import type { Metadata } from "next";
import { Italianno, Bebas_Neue, Montserrat } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import "./globals.css";

// Configuración de las fuentes de Google
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
  title: "Título de la Landing | Tu Cliente o Empresa",
  description:
    "Descripción persuasiva de entre 150 y 160 caracteres optimizada para Google y conversiones.",
  metadataBase: new URL("https://tu-dominio.com"),
  openGraph: {
    title: "Título de la Landing | Tu Cliente o Empresa",
    description: "Descripción persuasiva para redes sociales.",
    url: "https://tu-dominio.com",
    siteName: "Nombre de la Empresa",
    images: [
      {
        url: "/og-image.jpg",
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
          <Navbar />
          {/* pt-28 o pt-32 asegura que el contenido no quede debajo del navbar fijo */}
          <main className="pt-28 md:pt-32 px-7 md:px-12">{children}</main>
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
