"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "INICIO", href: "/" },
  { name: "SOBRE NOSOTROS", href: "#sobre-nosotros" },
  { name: "SERVICIOS", href: "#servicios" },
  { name: "RESPALDO", href: "#respaldo" },
  { name: "FLOTAS", href: "#flotas" },
  { name: "CONTACTO", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 flex justify-center px-4 md:px-8">
      <nav className="w-full max-w-[1850px] h-[50px] md:h-[80px] bg-[#D9D9D9]/95 backdrop-blur-md rounded-full px-6 md:px-12 flex items-center justify-between shadow-xl">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Logo.png"
            alt="Logo de la empresa"
            width={150}
            height={50}
            className="h-7 md:h-15 w-auto object-contain transition-all"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-[#133D35] font-bebas text-2xl xl:text-3xl font-semibold tracking-wide transition-colors duration-200 hover:text-[#0A0A0A] group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3BBFA7] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#1C5A4E] focus:outline-none p-2 transition-transform duration-300 active:scale-95"
            aria-label="Abrir menú"
          >
            {isOpen ? (
              <svg
                className="w-7 h-7 transition-transform duration-300 rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7 transition-transform duration-300 rotate-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        className={`absolute top-24 md:top-30 left-4 right-4 bg-[#D9D9D9]/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 flex flex-col gap-4 lg:hidden z-50 border border-black/10 transition-all duration-300 ease-in-out transform origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-y-95 -translate-y-3 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-[#133D35] font-bebas text-2xl tracking-wide py-2 px-4 rounded-lg transition-all duration-200 hover:bg-[#1C5A4E]/10 hover:text-[#0A0A0A] active:scale-[0.98]"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
