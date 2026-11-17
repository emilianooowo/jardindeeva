import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const siteUrl = "https://jardindeeva.com.mx";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Jardín de Eva",
  title: {
    default: "Jardín de Eva | Florería en Tuxtla Gutiérrez",
    template: "%s | Jardín de Eva",
  },
  description:
    "Florería y estudio de diseño floral en Tuxtla Gutiérrez, Chiapas. Ramos y arreglos florales personalizados para pedir en línea.",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Jardín de Eva" }],
  creator: "Jardín de Eva",
  publisher: "Jardín de Eva",
  openGraph: {
    title: "Jardín de Eva | Florería en Tuxtla Gutiérrez",
    description:
      "Ramos y arreglos florales personalizados. Haz tu pedido en línea con Jardín de Eva, en Tuxtla Gutiérrez, Chiapas.",
    url: siteUrl,
    siteName: "Jardín de Eva",
    images: [
      {
        url: "/logo/jdv-2.png",
        width: 2000,
        height: 2000,
        alt: "Logotipo de Jardín de Eva",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jardín de Eva | Florería en Tuxtla Gutiérrez",
    description:
      "Ramos y arreglos florales personalizados para pedir en línea en Tuxtla Gutiérrez, Chiapas.",
    images: ["/logo/jdv-2.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={lato.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
