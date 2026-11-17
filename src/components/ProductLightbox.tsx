"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./ProductLightbox.module.css";

type ProductLightboxProps = {
  src: string;
  alt: string;
  productName: string;
};

export default function ProductLightbox({ src, alt, productName }: ProductLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  function closeLightbox() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className={styles.imageTrigger}
        onClick={() => setIsOpen(true)}
        aria-label={`Ampliar fotografía de ${productName}`}
      >
        <Image src={src} alt={alt} fill priority sizes="(max-width: 760px) 100vw, 50vw" />
      </button>

      <dialog
        ref={dialogRef}
        className={styles.lightbox}
        aria-label={`Fotografía ampliada de ${productName}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeLightbox();
        }}
        onClose={closeLightbox}
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={closeLightbox}
          aria-label="Cerrar imagen ampliada"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
        <div className={styles.enlargedImage}>
          <Image src={src} alt={alt} fill sizes="94vw" />
        </div>
      </dialog>
    </>
  );
}
