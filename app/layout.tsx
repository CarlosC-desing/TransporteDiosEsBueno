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
  title: "Transportes Dios es bueno | Valencia | Envios Nacionales",
  description:
    "Descripción persuasiva de entre 150 y 160 caracteres optimizada para Google y conversiones.",
  metadataBase: new URL("https://tu-dominio.com"),
  openGraph: {
    title: "Transportes Dios es bueno",
    description: "Descripción persuasiva para redes sociales.",
    url: "https://tu-dominio.com",
    siteName: "Dios es bueno",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vista previa de la web",
      },
    ],
    locale: "es_ES",
    type: "website",
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
