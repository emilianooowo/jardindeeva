import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductLightbox from "@/components/ProductLightbox";
import { arreglosData } from "../../../../data/arreglos";
import styles from "./page.module.css";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return arreglosData.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const arreglo = arreglosData.find((item) => item.slug === slug);

  if (!arreglo) return {};

  return {
    title: arreglo.titulo,
    description: arreglo.descripcion,
    alternates: { canonical: `/ramos-y-arreglos/${arreglo.slug}` },
    openGraph: {
      title: `${arreglo.titulo} | Ramos y arreglos`,
      description: arreglo.descripcion,
      url: `/ramos-y-arreglos/${arreglo.slug}`,
      images: [{ url: arreglo.fotoPrincipal, alt: arreglo.titulo }],
      type: "website",
    },
  };
}

export default async function ArregloDetallePage({ params }: ProductPageProps) {
  const { slug } = await params;
  const arreglo = arreglosData.find((item) => item.slug === slug);

  if (!arreglo) notFound();

  const productosRelacionados = arreglosData.filter(
    (producto) =>
      producto.slug !== arreglo.slug &&
      producto.categorias.some((categoria) => arreglo.categorias.includes(categoria)),
  );

  return (
    <main className={styles.page}>
      <div className={styles.detail}>
        <div className={styles.imageColumn}>
          <Link href="/ramos-y-arreglos" className={styles.backLink}>
            ← Ramos y arreglos
          </Link>
          <div className={styles.imagePanel}>
            <ProductLightbox
              src={arreglo.fotoPrincipal}
              alt={`${arreglo.titulo}, diseño floral de Jardín de Eva`}
              productName={arreglo.titulo}
            />
          </div>
        </div>

        <section className={styles.content} aria-labelledby="product-title">
          <p className={styles.category}>{arreglo.categorias.join(" · ")}</p>
          <h1 id="product-title">{arreglo.titulo}</h1>
          <p className={styles.description}>{arreglo.descripcion}</p>
          <div className={styles.flowers}>
            <h2>Flores que contiene</h2>
            <ul>
              {arreglo.flores.map((flor) => (
                <li key={flor}>{flor}</li>
              ))}
            </ul>
          </div>
          <button type="button" className={styles.whatsappButton}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
            </svg>
            Pedir por WhatsApp
          </button>
        </section>
      </div>

      {productosRelacionados.length > 0 && (
        <section className={styles.recommendations} aria-labelledby="related-title">
          <div className={styles.recommendationsHeading}>
            <h2 id="related-title">
              Más {arreglo.categorias[0]?.toLowerCase() ?? "diseños florales"}
            </h2>
          </div>
          <ul className={styles.carousel} aria-label="Productos de la misma categoría">
            {productosRelacionados.map((producto) => (
              <li className={styles.relatedCard} key={producto.slug}>
                <Link href={`/ramos-y-arreglos/${producto.slug}`} className={styles.relatedLink}>
                  <div className={styles.relatedImageFrame}>
                    <Image
                      src={producto.fotoPrincipal}
                      alt={producto.titulo}
                      fill
                      sizes="(max-width: 600px) 72vw, (max-width: 900px) 36vw, 22rem"
                      className={styles.relatedImage}
                    />
                  </div>
                  <span className={styles.relatedName}>{producto.titulo}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
