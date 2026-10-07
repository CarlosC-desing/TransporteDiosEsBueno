import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-30 md:gap-50">
      {/* --- SECCIÓN HERO PRINCIPAL --- */}
      <section className="w-full min-h-[75vh] flex flex-col justify-center items-center pt-20 pb-12 gap-20 overflow-hidden">
        {/* Contenedor maestro general: Centrado en pantallas grandes y distribuido con Flexbox */}
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-center justify-between">
          {/* --- BLOQUE IZQUIERDO (SVG + Botón de Cotización con Flexbox limpio) --- */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-10 z-20 space-y-6">
            {/* LOGO / TÍTULO EN SVG (100% responsivo y nítido) */}
            <div className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px] self-center">
              <Image
                src="/transport_god_is_good.svg"
                alt="Transportes Dios Es Bueno"
                width={500}
                height={300}
                className="w-full h-auto select-none"
                priority
              />
            </div>

            {/* BOTÓN ¡COTIZA AHORA! (Ubicado fluidamente debajo del SVG gracias a space-y-6) */}
            <div className="self-center">
              <Link
                href="/contacto"
                className="md:w-80 lg:w-95 inline-flex items-center justify-center bg-mint-light text-green font-bebas text-2xl md:text-3xl tracking-wide px-8 py-2 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 active:scale-100"
              >
                <p className="text-green text-[33px] md:text-[50px]">
                  <span className="text-black">¡COTIZA</span> AHORA!
                </p>
              </Link>
            </div>
          </div>

          {/* --- IMAGEN DEL CAMIÓN (Visible ÚNICAMENTE de lg/desktop en adelante, integrada por flujo Flexbox) --- */}
          <div className="hidden lg:block relative w-full lg:w-[55%] h-[420px] lg:h-[500px] overflow-hidden z-10">
            {/* Degradado lateral para fundir la imagen con la sección oscura */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent z-20 pointer-events-none" />

            <Image
              src="/truck.jpg"
              alt="Camión de Transportes Dios Es Bueno"
              fill
              className="object-cover object-center rounded-xl"
              priority
            />
          </div>
        </div>
        <div className="px-4 sm:px-6 lg:px-12 py-4 text-center lg:text-left max-w-[1400px] mx-auto">
          <p className="font-italianno text-4xl lg:text-7xl sm:text-4xl text-mint-primary select-none">
            &ldquo;El señor es mi pastor: nada me falta&rdquo;
          </p>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="flex flex-col gap-20 lg:w-1/2 lg:justify-center">
          <h2 className="text-5xl lg:text-7xl font-bebas m-0">
            <span>Sobre</span>
            <br />
            <span className="text-7xl lg:text-9xl border-b-4 border-white text-green">
              Nosotros
            </span>
          </h2>
          <p className="text-[15px] lg:text-3xl text-justify">
            Somos una Empresa dedicada al transporte de carga, comprometida con
            sus clientes para cumplir con el propósito de realizar un servicio
            seguro, puntual y eficiente, apoyados en nuestras unidades y en un
            equipo humano altamente calificado que garantiza la integridad de
            cada mercancía de principio a fin.
          </p>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="flex flex-col gap-20 lg:w-1/2 lg:justify-center">
          <h2 className="text-4xl lg:text-7xl font-bebas m-0">
            <span>Servicios</span>
            <br />
            <span className="text-5xl lg:text-9xl border-b-4 border-white text-green">
              A nivel nacional
            </span>
          </h2>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="flex flex-col gap-20 lg:w-1/2 lg:justify-center">
          <h2 className="text-4xl lg:text-7xl font-bebas m-0">
            <span>Nuestro</span>
            <br />
            <span className="text-5xl lg:text-9xl border-b-4 border-white text-green">
              Respaldo
            </span>
          </h2>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="flex flex-col gap-20 lg:w-1/2 lg:justify-center">
          <h2 className="text-3xl lg:text-7xl font-bebas m-0">
            <span>Flotas</span>
            <br />
            <span className="text-3xl lg:text-9xl border-b-4 border-white text-green">
              Seguras y en buen estado
            </span>
          </h2>
        </div>
      </section>
    </div>
  );
}
