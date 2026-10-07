"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // O puedes usar tus propios iconos o SVG

// Definimos las diapositivas con sus títulos y rutas de imagen de ejemplo
const slides = [
  {
    id: 1,
    title: "TRANSPORTE DE ELECTRODOMESTICOS",
    image: "/appliances.png", // Reemplaza con tu ruta de imagen real
  },
  {
    id: 2,
    title: "TRANSPORTE DE MERCANCIA EMBALADA O EMPAQUETADA",
    image: "/boxes.png", // Reemplaza con tu ruta de imagen real
  },
  {
    id: 3,
    title: "TRANSPORTE DE CUALQUIER MERCANCIA O MATERIAL",
    image: "/boxes1.png", // Reemplaza con tu ruta de imagen real
  },
  {
    id: 4,
    title: "TRANSPORTE DE ALIMENTOS NO PERECEDEROS",
    image: "/food.png", // Reemplaza con tu ruta de imagen real
  },
];

export default function ServiceSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // Para saber si va a izq o der

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Variantes para la animación de entrada y salida de las diapositivas
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full bg-[#0a0a0a]/60 py-16 px-4 relative overflow-hidden flex flex-col items-center rounded-2xl">
      {/* Contenedor principal del Slider */}
      <div className="relative w-full max-w-[1200px] min-h-[450px] sm:min-h-[500px] flex flex-col items-center justify-center">
        {/* --- FLECHA IZQUIERDA --- */}
        <motion.button
          onClick={handlePrev}
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(130, 217, 201, 0.2)",
          }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-0 sm:left-4 z-30 p-2 sm:p-3 rounded-full text-white bg-transparent transition-colors cursor-pointer"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12" />
        </motion.button>

        {/* --- CONTENIDO CENTRAL (Animado con Framer Motion) --- */}
        <div className="w-full max-w-[900px] px-12 sm:px-16 flex flex-col items-center overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full flex flex-col items-center text-center"
            >
              {/* TÍTULO DEL SLIDE (Igual al de la referencia) */}
              <h2 className="font-bebas text-mint-primary text-2xl sm:text-4xl md:text-[38px] tracking-wide uppercase mb-6 sm:mb-8 select-none">
                {slides[currentIndex].title}
              </h2>

              {/* CONTENEDOR DE LA IMAGEN */}
              <div className="relative w-full h-[280px] sm:h-[380px] md:h-[420px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- FLECHA DERECHA --- */}
        <motion.button
          onClick={handleNext}
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(130, 217, 201, 0.2)",
          }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-0 sm:right-4 z-30 p-2 sm:p-3 rounded-full text-white bg-transparent transition-colors cursor-pointer"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12" />
        </motion.button>
      </div>

      {/* --- PUNTITOS INDICADORES DE POSICIÓN --- */}
      <div className="flex items-center justify-center gap-3 mt-8 z-30">
        {slides.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              // Microinteracción al pasar el mouse y al hacer clic
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              animate={{
                scale: isActive ? 1.25 : 1,
                opacity: isActive ? 1 : 0.5,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`h-3.5 rounded-full transition-colors cursor-pointer ${
                isActive ? "w-8 bg-[#82D9C9]" : "w-3.5 bg-[#82D9C9]/50"
              }`}
              aria-label={`Ir a diapositiva ${index + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
}
