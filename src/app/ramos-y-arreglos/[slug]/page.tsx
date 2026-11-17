import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
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

  return (
    <main className={styles.page}>
      <div className={styles.detail}>
        <div className={styles.imagePanel}>
          <Image
            src={arreglo.fotoPrincipal}
            alt={`${arreglo.titulo}, diseño floral de Jardín de Eva`}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 50vw"
            className={styles.image}
          />
        </div>

        <section className={styles.content} aria-labelledby="product-title">
          <Link href="/ramos-y-arreglos" className={styles.backLink}>
            ← Ramos y arreglos
          </Link>
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
              <path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.3-4.9A8.4 8.4 0 1 1 20.5 11.8Z" />
              <path d="M8.8 7.7c.2-.4.4-.4.6-.4h.5c.2 0 .3 0 .4.3l.7 1.7c.1.2.1.3 0 .5l-.5.6c-.2.2-.2.3 0 .5.4.7 1 1.3 1.7 1.7.2.1.3.1.5-.1l.7-.8c.2-.2.3-.2.5-.1l1.6.8c.2.1.3.2.3.4 0 .3-.2 1.1-.7 1.5-.5.4-1.1.6-1.7.5-.5-.1-1.4-.3-2.5-1.1-1.5-1-2.5-2.3-2.8-3-.3-.6-.7-1.7-.1-2.6.3-.5.6-.7.8-.8Z" />
            </svg>
            Pedir por WhatsApp
          </button>
        </section>
      </div>
    </main>
  );
}
