import Image from "next/image";
import Link from "next/link";
import ServicesSlider from "@/components/ServicesSliders";
import DocumentacionScroll from "@/components/DocumentationScroll";
import BentoGallery from "@/components/BentoGallery";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section
        id="inicio"
        className="w-full min-h-screen flex flex-col justify-center items-center pb-12 gap-12 overflow-hidden px-7 md:px-12"
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-10 z-20 space-y-6">
            <div className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px] self-center">
              <Image
                src="/transport_god_is_good.svg"
                alt="Transportes Dios Es Bueno"
                width={500}
                height={300}
                style={{ width: "100%", height: "auto" }}
                className="w-full h-auto select-none"
                priority
              />
            </div>

            <div className="self-center">
              <Link
                href="#contacto"
                className="md:w-80 lg:w-95 inline-flex items-center justify-center bg-mint-light text-green font-bebas text-2xl md:text-3xl tracking-wide px-8 py-2 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 active:scale-100"
              >
                <p className="text-green text-[33px] md:text-[50px]">
                  <span className="text-black">¡COTIZA</span> AHORA!
                </p>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative w-full lg:w-[55%] h-[420px] lg:h-[500px] overflow-hidden z-10">
            <div className="absolute inset-y-0 left-0 w-60 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent z-20 pointer-events-none" />
            <Image
              src="/truck.png"
              alt="Camión de Transportes Dios Es Bueno"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center rounded-2xl"
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

      <section
        id="sobre-nosotros"
        className="min-h-screen flex flex-col justify-center items-center px-7 md:px-12 scroll-mt-24 py-16"
      >
        <div className="flex flex-col gap-20 lg:w-1/2 lg:justify-center mx-auto lg:mx-0">
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

      <section
        id="servicios"
        className="min-h-screen flex flex-col justify-center gap-10 lg:gap-20 px-7 md:px-12 scroll-mt-24 py-16"
      >
        <div className="flex xl:pl-85 max-w-[1600px] mx-auto w-full">
          <h2 className="text-4xl lg:text-7xl font-bebas m-0">
            <span>Servicios</span>
            <br />
            <span className="text-5xl lg:text-9xl border-b-4 border-white text-green">
              A nivel nacional
            </span>
          </h2>
        </div>
        <div className="w-full">
          <ServicesSlider />
        </div>
      </section>

      <section
        id="respaldo"
        className="min-h-screen flex flex-col justify-center gap-10 lg:gap-20 px-7 md:px-12 scroll-mt-24 py-16"
      >
        <div className="flex xl:pl-85 max-w-[1600px] mx-auto w-full">
          <h2 className="text-4xl lg:text-7xl font-bebas m-0">
            <span>Nuestro</span>
            <br />
            <span className="text-5xl lg:text-9xl border-b-4 border-white text-green">
              Respaldo
            </span>
          </h2>
        </div>
        <div className="w-full">
          <DocumentacionScroll />
        </div>
      </section>

      <section
        id="flotas"
        className="min-h-screen flex flex-col justify-center gap-10 lg:gap-20 px-7 md:px-12 scroll-mt-24 py-16"
      >
        <div className="flex xl:pl-85 max-w-[1600px] mx-auto w-full">
          <h2 className="text-4xl lg:text-7xl font-bebas m-0">
            <span>Flotas</span>
            <br />
            <span className="text-5xl lg:text-8xl border-b-4 border-white text-green">
              Seguras
            </span>
          </h2>
        </div>
        <div className="w-full">
          <BentoGallery />
        </div>
      </section>

      <section
        id="contacto"
        className="min-h-screen flex flex-col justify-center px-7 md:px-12 scroll-mt-24 py-16"
      >
        <QuoteForm />
      </section>

      <footer className="bg-forest-dark min-h-[400px] px-3 py-10 md:px-12 flex flex-col justify-center items-center">
        <div className="mb-8 xl:mb-13">
          <p className="bg-black rounded-full flex justify-center items-center h-8 p-8 font-bebas text-2xl md:text-4xl xl:text-6xl text-white">
            <span className="text-green">Dios</span>&nbsp;es bueno 2024 C.A
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl justify-center mb-10">
          <div className="flex flex-col gap-4 px-2 flex-1 w-full md:w-auto">
            <p className="bg-black rounded-full flex justify-center items-center h-8 font-bebas text-3xl p-5 text-white">
              Contacto
            </p>
            <ul className="flex flex-col gap-1 text-center md:text-left">
              <li>
                <a
                  href="tel:04144319572"
                  className="transition-all duration-300 hover:text-mint-light hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                >
                  0414-431.95.72
                </a>
              </li>
              <li>
                <a
                  href="tel:04129559144"
                  className="transition-all duration-300 hover:text-mint-light hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                >
                  0412-955.91.44
                </a>
              </li>
              <li>
                <a
                  href="mailto:caigcada2303@gmail.com"
                  className="transition-all duration-300 hover:text-mint-light hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] break-all"
                >
                  2024diosesbueno@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 px-2 flex-1 w-full md:w-auto">
            <p className="bg-black rounded-full flex justify-center items-center h-8 font-bebas text-3xl p-5 text-white">
              Ubicación
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+N%2FI+Sector+El+Perrote,+parcela+18,+Parroquia+Yagua,+Guacara,+Carabobo,+Venezuela"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center md:text-left transition-all duration-300 hover:text-mint-light hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] group block cursor-pointer"
              title="Ver en Google Maps"
            >
              Av. N/I Sector El Perrote, parcela 18, Parroquia Yagua, Guacara,
              Carabobo, Venezuela.
            </a>
          </div>

          <div className="flex flex-col gap-4 px-2 flex-1 w-full md:w-auto">
            <p className="bg-black rounded-full flex justify-center items-center h-8 font-bebas text-3xl p-5 text-white">
              Redes
            </p>
            <div className="flex justify-center gap-4 items-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                aria-label="Facebook"
              >
                <img
                  src="/facebook_logo.png"
                  alt="Facebook"
                  className="w-[50px] h-[50px] xl:w-[75px] xl:h-[75px] object-contain"
                />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                aria-label="Instagram"
              >
                <img
                  src="/instagram_logo.png"
                  alt="Instagram"
                  className="w-[70px] h-[70px] xl:w-[100px] xl:h-[100px] object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full text-center pt-6 border-t border-white/10 text-sm text-gray-300 md:text-2xl">
          <p>Dios es bueno 2024 All rights reserved ©</p>
        </div>
      </footer>
    </div>
  );
}
