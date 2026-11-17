import Image from "next/image";
import styles from "./Footer.module.css";

const clouds = ["firstCloud", "secondCloud", "thirdCloud"] as const;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.clouds} aria-hidden="true">
        {clouds.map((cloud) => (
          <Image
            key={cloud}
            src="/svg/nube.png"
            alt=""
            width={360}
            height={360}
            className={styles[cloud]}
          />
        ))}
      </div>

      <div className={styles.landscape} aria-hidden="true">
        <Image
          src="/svg/pasto.png"
          alt=""
          fill
          sizes="100vw"
          className={styles.grass}
        />
        <div className={styles.flowers} />
      </div>

      <div className={styles.content}>
        <div className={styles.brand}>
          <Image
            src="/logo/jdv.png"
            alt="Jardín de Eva"
            width={1190}
            height={1149}
            className={styles.logo}
          />
        </div>

        <section
          className={styles.group}
          aria-labelledby="footer-orders"
        >
          <h2 id="footer-orders">Pedidos y contacto</h2>
          <a href="tel:+529613706653">
            +52-961-370-6653
          </a>
          <a href="mailto:jardindeeva19@gmail.com">
            jardindeeva19@gmail.com
          </a>
        </section>

        <nav className={styles.group} aria-label="Redes sociales">
          <h2>Síguenos</h2>
          <a
            className={styles.socialLink}
            href="https://www.tiktok.com/@jardin.de.eva"
          >
            <svg
              className={styles.socialIcon}
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 1 1-2.9-2.9c.23 0 .46.03.69.08V9.33a6.36 6.36 0 1 0 5.66 6.32V8.71a8.16 8.16 0 0 0 4.76 1.52V6.8c-.34 0-.67-.04-.99-.11Z" />
            </svg>
            <span>@jardin.de.eva</span>
          </a>
          <a
            className={styles.socialLink}
            href="https://www.instagram.com/_jardindeeva_/"
          >
            <svg
              className={styles.socialIcon}
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="17.5" cy="6.5" r="1.25" />
            </svg>
            <span>@_jardindeeva_</span>
          </a>
        </nav>
      </div>

      <p className={styles.copyright}>© Jardín de Eva</p>
    </footer>
  );
}
