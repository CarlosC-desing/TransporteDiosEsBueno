"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const bentoItems = [
  {
    id: 1,
    type: "video",
    src: "/videos/truck-1.mp4",
    poster: "/truck.png",
  },
  {
    id: 2,
    type: "image",
    src: "/truck-2.jpg",
  },
  {
    id: 3,
    type: "video",
    src: "/videos/truck-3.mp4",
    poster: "/truck.png",
    span: "md:row-span-2 md:h-full",
  },
  {
    id: 4,
    type: "image",
    src: "/truck-4.jpg",
  },
  {
    id: 5,
    type: "image",
    src: "/truck-5.jpeg",
  },
];

export default function BentoGallery() {
  return (
    <section className="w-full bg-[#0a0a0a]/60 py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Texto informativo arriba de la galería */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl text-center mb-10 px-4"
      >
        <p className="font-bebas text-white text-xl sm:text-2xl md:text-3xl tracking-wide leading-relaxed">
          Todos los camiones tienen una capacidad de carga de{" "}
          <span className="text-mint-primary">10 Ton.</span> y poseen cavas de{" "}
          <span className="text-mint-primary">50 metros cúbicos</span>.
        </p>
      </motion.div>

      {/* Grilla exacta de 3 columnas y 2 filas */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 sm:gap-6 auto-rows-[240px]">
        {bentoItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 0.99 }}
            className={`relative overflow-hidden rounded-2xl shadow-xl bg-black/40 border border-white/10 ${
              item.span || ""
            }`}
          >
            {item.type === "video" ? (
              /* Reproductor de video optimizado como GIF */
              <video
                src={item.src}
                poster={item.poster}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
              />
            ) : (
              /* Componente de Imagen optimizado para Next.js */
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={`Camión galería ${item.id}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center rounded-2xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}

            {/* Capa sutil de sombra interna */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-2xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
