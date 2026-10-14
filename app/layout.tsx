import type { Metadata } from "next";
import { Italianno, Bebas_Neue, Montserrat } from "next/font/google";
import InitialLoader from "@/components/InitialLoader";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import "./globals.css";

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italianno",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.diosesbuenotransporte.com"),
  alternates: {
    canonical: "/",
  },
  title:
    "Transportes Dios es Bueno | Carga Pesada y Envíos Nacionales en Valencia",
  description:
    "Servicio profesional de transporte de carga pesada, fletes y mudanzas en Valencia y a nivel nacional. Camiones con cavas de 50m³ y capacidad de 10 Toneladas.",
  keywords: [
    "Transportes Dios es Bueno",
    "transporte de carga venezuela",
    "envios nacionales e internacionales venezuela",
    "fletes valencia",
    "mudanzas valencia",
    "transporte internacional venezuela",
    "camiones de carga valencia",
  ],
  verification: {
    google: "M143Ke99iKzwxqvfTy-RhWd-0pJaSDPuVjZhvGzLUHE",
  },
  openGraph: {
    title: "Transportes Dios es Bueno | Carga Pesada y Mudanzas",
    description:
      "Servicio profesional de transporte de carga pesada y mudanzas a nivel nacional con cavas de 50m³.",
    url: "https://www.diosesbuenotransporte.com",
    siteName: "Transportes Dios es Bueno 2024 C.A.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Transportes Dios es Bueno - Carga Pesada y Mudanzas",
      },
    ],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transportes Dios es Bueno | Carga Pesada y Mudanzas",
    description:
      "Servicio profesional de transporte de carga pesada y mudanzas a nivel nacional.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${italianno.variable} ${bebasNeue.variable} ${montserrat.variable}`}
    >
      <body className="font-sans antialiased text-slate-100">
        <SmoothScroll>
          <InitialLoader />
          <Toaster theme="dark" position="bottom-right" richColors />
          <Navbar />
          <main className="pt-28 md:pt-32">{children}</main>
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
