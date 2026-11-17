"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";

type NavigationLink = {
  label: string;
  href: string;
  isContact?: boolean;
};

const leftLinks: NavigationLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Ramos y arreglos", href: "/ramos-y-arreglos" },
];

const rightLinks: NavigationLink[] = [
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "#contacto", isContact: true },
];

const announcementPhrases = [
  "Pedidos únicamente en línea",
  "Estamos para ayudarte a elegir tus flores",
];
const repeatedAnnouncementPhrases = Array.from({ length: 5 }, () =>
  announcementPhrases,
).flat();

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [...leftLinks, ...rightLinks];

  function renderLink({
    label,
    href,
    isContact,
  }: NavigationLink) {
    const isCurrentPage =
      !isContact &&
      (href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`));

    return (
      <Link
        key={href}
        href={href}
        className={`${styles.navigationLink} ${isCurrentPage ? styles.currentPage : ""}`}
        aria-current={isCurrentPage ? "page" : undefined}
        onClick={() => setMenuOpen(false)}
      >
        <span>{label}</span>
        <span className={styles.flowerIcon} aria-hidden="true">
          ❀
        </span>
      </Link>
    );
  }

  return (
    <>
      <div className={styles.announcement}>
        <p className={styles.announcementText}>
          {announcementPhrases.join(" • ")}
        </p>
        <div className={styles.announcementTrack} aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className={styles.announcementGroup} key={copy}>
              {repeatedAnnouncementPhrases.map((phrase, index) => (
                <span
                  className={styles.announcementPhrase}
                  key={`${copy}-${index}`}
                >
                  {phrase}
                  <span className={styles.announcementBullet}>•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.inner}>
          <button
            className={styles.menuButton}
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span
              className={`${styles.menuIcon} ${menuOpen ? styles.menuIconOpen : ""}`}
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
            </span>
          </button>

          <nav className={styles.desktopNavigation} aria-label="Navegación principal">
            <div className={styles.leftLinks}>{leftLinks.map(renderLink)}</div>

            <Link
              className={styles.logoLink}
              href="/"
              aria-label="Jardín de Eva, inicio"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/logo/je-2.png"
                alt="Jardín de Eva, florería y diseño floral"
                width={1190}
                height={1149}
                className={styles.logo}
              />
            </Link>

            <div className={styles.rightLinks}>{rightLinks.map(renderLink)}</div>
          </nav>

          <nav
            id="mobile-navigation"
            className={styles.mobileNavigation}
            data-open={menuOpen}
            aria-label="Navegación principal"
          >
            {links.map(renderLink)}
          </nav>
        </div>
      </header>
    </>
  );
}
