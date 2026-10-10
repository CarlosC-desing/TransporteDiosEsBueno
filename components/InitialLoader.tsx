"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Temporizador para quitar la pantalla de carga después de 2.2 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animación del Logo / Contenido de carga */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            {/* Logo de la empresa animado */}
            <div className="relative w-48 sm:w-64 h-20 sm:h-24">
              <Image
                src="/logo.png"
                alt="Transportes Dios Es Bueno"
                fill
                sizes="(max-width: 640px) 192px, 256px"
                className="object-contain filter drop-shadow-[0_0_15px_#82d9c9]"
                priority
              />
            </div>

            {/* Texto y barra de carga elegante */}
            <div className="flex flex-col items-center gap-2">
              <p className="font-bebas text-mint-primary tracking-widest text-lg sm:text-xl animate-pulse">
                INICIANDO MOTORES...
              </p>

              {/* Barra de progreso decorativa */}
              <div className="w-36 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full bg-mint-primary"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
