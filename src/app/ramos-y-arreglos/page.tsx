import Image from "next/image";
import type { Metadata } from "next";
import { arreglosData } from "../../../data/arreglos";
import styles from "./page.module.css";

const catalogPath = "/ramos-y-arreglos";
const catalogDescription =
  "Conoce los ramos y arreglos florales de Jardín de Eva, estudio de diseño floral en Tuxtla Gutiérrez, Chiapas.";

export const metadata: Metadata = {
  title: "Ramos y arreglos florales",
  description: catalogDescription,
  alternates: {
    canonical: catalogPath,
  },
  openGraph: {
    title: "Ramos y arreglos florales | Jardín de Eva",
    description: catalogDescription,
    url: catalogPath,
    siteName: "Jardín de Eva",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/ramos/arreglo-1.jpg",
        alt: "Arreglo floral Gala de Jardín",
      },
    ],
  },
};

export default function RamosYArreglosPage() {
  return (
    <main className={styles.page}>
      <section className={styles.catalog} aria-labelledby="catalog-title">
        <header className={styles.heading}>
          <p className={styles.eyebrow}>Diseño floral</p>
          <h1 id="catalog-title">Ramos y arreglos</h1>
        </header>

        <ul className={styles.grid}>
          {arreglosData.map((arreglo) => (
            <li className={styles.card} key={arreglo.id}>
              <div className={styles.imageFrame}>
                <Image
                  src={arreglo.fotoPrincipal}
                  alt={`${arreglo.titulo}, diseño floral de Jardín de Eva`}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className={styles.image}
                />
              </div>
              {arreglo.galeria.length > 1 && (
                <div
                  className={styles.additionalImages}
                  aria-label={`Más fotografías de ${arreglo.titulo}`}
                >
                  {arreglo.galeria.slice(1).map((foto) => (
                    <div className={styles.additionalImage} key={foto}>
                      <Image
                        src={foto}
                        alt={`Vista adicional de ${arreglo.titulo}`}
                        fill
                        sizes="(max-width: 600px) 45vw, 15vw"
                        className={styles.image}
                      />
                    </div>
                  ))}
                </div>
              )}
              <div className={styles.details}>
                <p className={styles.category}>{arreglo.categorias.join(" · ")}</p>
                <h2 className={styles.name}>{arreglo.titulo}</h2>
                <p className={styles.description}>{arreglo.descripcion}</p>
                <p className={styles.composition}>
                  <span>Flores:</span> {arreglo.flores.join(", ")}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
