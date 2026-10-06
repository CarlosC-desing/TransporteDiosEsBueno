import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar'; // 1. Importa tu Navbar
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Transportes Dios es Bueno',
  description: 'Descripción persuasiva de entre 150 y 160 caracteres optimizada para Google y conversiones.',
  metadataBase: new URL('https://tu-dominio.com'),
  openGraph: {
    title: 'Título de la Landing | Tu Cliente o Empresa',
    description: 'Descripción persuasiva para redes sociales.',
    url: 'https://tu-dominio.com',
    siteName: 'Nombre de la Empresa',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vista previa de la web',
      },
    ],
    locale: 'es_ES',
    type: 'website',
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
    <html lang="es">
      {/* Se eliminó bg-white para dejar que actúe el fondo personalizado del CSS */}
      <body className={`${inter.className} antialiased`}>
        <SmoothScroll>
          <Navbar /> {/* 2. Coloca la Navbar aquí dentro */}
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}