"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function CotizaForm() {
  const [form, setForm] = useState({
    nombre: "",
    tlf: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar el formulario
    console.log("Datos de cotización:", form);
  };

  return (
    <section className="w-full bg-[#0a0a0a]/60 py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      {/* Contenedor principal: en móvil es columna, en md+ pasa a fila */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* BLOQUE IZQUIERDO: Título y sobre/icono */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2"
        >
          {/* TÍTULO */}
          <h2 className="font-bebas text-white text-3xl sm:text-5xl lg:text-6xl tracking-wide leading-none select-none mb-2">
            COTIZA CON
          </h2>
          <h2 className="font-bebas text-[#82D9C9] text-3xl sm:text-5xl lg:text-6xl tracking-wide leading-none select-none mb-8 md:mb-12 underline decoration-2 underline-offset-8">
            NOSOTROS
          </h2>

          {/* ICONO DE SOBRE / CORREO */}
          <div className="w-32 h-24 sm:w-40 sm:h-28 bg-[#82D9C9]/20 border-2 border-[#82D9C9] rounded-xl flex items-center justify-center shadow-lg">
            <Mail className="w-16 h-16 sm:w-20 sm:h-20 text-[#82D9C9] stroke-[1.5]" />
          </div>
        </motion.div>

        {/* BLOQUE DERECHO: Tarjeta del Formulario */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 bg-[#133D35] p-6 sm:p-8 rounded-2xl shadow-2xl border border-[#82D9C9]/30"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Campo NOMBRE */}
            <div>
              <input
                type="text"
                placeholder="NOMBRE"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full bg-[#82D9C9] text-[#0a0a0a] placeholder-[#0a0a0a]/70 font-bebas text-lg sm:text-xl py-3 px-5 rounded-full outline-none focus:ring-2 focus:ring-white transition-all shadow-inner"
                required
              />
            </div>

            {/* Campo TLF */}
            <div>
              <input
                type="tel"
                placeholder="TLF"
                value={form.tlf}
                onChange={(e) => setForm({ ...form, tlf: e.target.value })}
                className="w-full bg-[#82D9C9] text-[#0a0a0a] placeholder-[#0a0a0a]/70 font-bebas text-lg sm:text-xl py-3 px-5 rounded-full outline-none focus:ring-2 focus:ring-white transition-all shadow-inner"
                required
              />
            </div>

            {/* Campo EMAIL */}
            <div>
              <input
                type="email"
                placeholder="EMAIL"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#82D9C9] text-[#0a0a0a] placeholder-[#0a0a0a]/70 font-bebas text-lg sm:text-xl py-3 px-5 rounded-full outline-none focus:ring-2 focus:ring-white transition-all shadow-inner"
                required
              />
            </div>

            {/* Botón ENVIAR */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#34C759] hover:bg-[#2eb04f] text-white font-bebas text-xl sm:text-2xl tracking-wider py-3.5 rounded-full shadow-lg transition-colors cursor-pointer mt-2"
            >
              ENVIAR
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
