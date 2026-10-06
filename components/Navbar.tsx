'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'INICIO', href: '/' },
  { name: 'SOBRE NOSOTROS', href: '/sobre-nosotros' },
  { name: 'SERVICIOS', href: '/servicios' },
  { name: 'RESPALDO', href: '/respaldo' },
  { name: 'FLOTAS', href: '/flotas' },
  { name: 'CONTACTO', href: '/contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 sm:px-8 flex justify-center">
      {/* Contenedor principal de la barra (Estilo Píldora con fondo #D9D9D9) */}
      <nav className="w-full max-w-7xl bg-[#D9D9D9] rounded-full px-6 py-3 flex items-center justify-between shadow-lg">

        {/* Logo / Nombre */}
        <Link href="/" className="flex items-center gap-2">
          {/* Aquí puedes cambiar el texto por una etiqueta de imagen si prefieres tu logo */}
          <span className="font-bold text-lg tracking-wider text-[#133D35]">
            TuLogo
          </span>
        </Link>

        {/* Enlaces de navegación para Escritorio (Oculto en móviles) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-[#133D35] font-semibold text-sm tracking-wide transition-colors duration-200 hover:text-[#0A0A0A] group py-1"
            >
              {link.name}
              {/* Línea inferior / Subrayado en hover (#3BBFA7) */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3BBFA7] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Botón Hamburguesa para Móviles (Color #1C5A4E) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#1C5A4E] focus:outline-none p-2"
            aria-label="Abrir menú"
          >
            {isOpen ? (
              /* Icono X para cerrar */
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Icono de Hamburguesa personalizado */
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Menú desplegable para Móviles */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[#D9D9D9] rounded-2xl shadow-xl p-6 flex flex-col gap-4 md:hidden z-50 border border-black/5 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
              className="text-[#133D35] font-semibold text-base py-2 px-4 rounded-lg transition-colors hover:bg-[#1C5A4E]/10 hover:text-[#0A0A0A]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}