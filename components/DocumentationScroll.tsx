"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation, FileText, ShieldCheck, Truck } from "lucide-react";

// Lista de características adicionales de los camiones
const items = [
  {
    id: 1,
    title: "ALGUNOS CAMIONES POSEEN SISTEMA GPS",
    icon: Navigation,
  },
  {
    id: 2,
    title: "ROTC: REGISTRO DE OPERADORAS DE TRANSPORTE DE CARGA",
    icon: FileText,
  },
  {
    id: 3,
    title: "SEGURO DE RESPONSABILIDAD CIVIL",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "MONITOREO Y LOGÍSTICA SATELITAL AVANZADA",
    icon: Truck,
  },
];

export default function DocumentacionHover() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#0a0a0a]/60 py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* TÍTULO PRINCIPAL */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl text-center lg:text-left mb-12 sm:mb-16"
      >
        <h2 className="font-bebas text-white/90 text-2xl sm:text-3xl md:text-4xl tracking-wider select-none leading-snug">
          APARTE DE LA DOCUMENTACIÓN OBLIGATORIA, LOS CAMIONES CUENTAN CON:
        </h2>
      </motion.div>

      {/* CONTENEDOR DE ELEMENTOS */}
      <div className="w-full max-w-5xl flex flex-col gap-6 sm:gap-8">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          const isHovered = hoveredId === item.id;
          const isDimmed = hoveredId !== null && !isHovered;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              animate={{
                scale: isHovered ? 1.03 : 1,
                opacity: isDimmed ? 0.4 : 1,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="w-full flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 md:gap-10 p-4 sm:p-6 cursor-pointer"
            >
              {/* CÍRCULO CONTENEDOR DEL ICONO */}
              <motion.div
                animate={{
                  backgroundColor: isHovered
                    ? "#82D9C9"
                    : "rgba(25, 35, 32, 0.7)",
                  borderColor: isHovered
                    ? "#82D9C9"
                    : "rgba(255, 255, 255, 0.1)",
                }}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-xl shrink-0 border"
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{
                    color: isHovered ? "#133D35" : "#82D9C9",
                    scale: isHovered ? 1.15 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <IconComponent className="w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 stroke-[2.2]" />
                </motion.div>
              </motion.div>

              {/* TÍTULO DEL ELEMENTO */}
              <motion.h3
                animate={{
                  color: isHovered ? "#82D9C9" : "rgba(255, 255, 255, 0.85)",
                  x: isHovered ? 6 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="font-bebas text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide max-w-xl text-center lg:text-left select-none"
              >
                {item.title}
              </motion.h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
