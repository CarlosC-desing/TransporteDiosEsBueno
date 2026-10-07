"use client";

import { motion } from "framer-motion";

// Definimos los 5 elementos tal como aparecen en la referencia (3 columnas, 2 filas)
const bentoItems = [
  {
    id: 1,
    src: "/videos/camion-1.mp4",
    poster: "/truck.jpg",
  },
  {
    id: 2,
    src: "/videos/camion-2.mp4",
    poster: "/truck.jpg",
  },
  {
    id: 3,
    src: "/videos/camion-3.mp4",
    poster: "/truck.jpg",
    // Este elemento en la tercera columna ocupará las 2 filas verticales de altura
    span: "md:row-span-2 md:h-full",
  },
  {
    id: 4,
    src: "/videos/camion-4.mp4",
    poster: "/truck.jpg",
  },
  {
    id: 5,
    src: "/videos/camion-5.mp4",
    poster: "/truck.jpg",
  },
];

export default function BentoGallery() {
  return (
    <section className="w-full bg-[#0a0a0a]/60 py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
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
            className={`relative overflow-hidden rounded-2xl shadow-xl bg-black/40 border border-white/10 ${item.span || ""}`}
          >
            {/* Reproductor de video optimizado como GIF */}
            <video
              src={item.src}
              poster={item.poster}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
            />

            {/* Capa sutil de sombra interna */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-2xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
