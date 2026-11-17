import Image from "next/image";
import Link from "next/link";
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
        url: "/nobg/arreglo-1-nobg.png",
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
          <h1 id="catalog-title">Ramos y arreglos</h1>
        </header>

        <ul className={styles.grid}>
          {arreglosData.map((arreglo) => (
            <li className={styles.card} key={arreglo.id}>
              <Link
                className={styles.cardLink}
                href={`${catalogPath}/${arreglo.slug}`}
                aria-label={`Ver imagen y detalles de ${arreglo.titulo}`}
              >
                <div className={styles.imageFrame}>
                <Image
                  src={arreglo.fotoPrincipal}
                  alt={`${arreglo.titulo}, diseño floral de Jardín de Eva`}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, 390px"
                  className={styles.image}
                />
                </div>
                <span className={styles.overlay} aria-hidden="true">
                  Ver Arreglo
                </span>
              </Link>
              {arreglo.galeria.length > 1 && (
                <div className={styles.visuallyHidden}>
                  Incluye {arreglo.galeria.length} fotografías.
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
