import Image from "next/image";
import Link from "next/link";

export default function WhatsAppButton() {
  // Número de teléfono de ejemplo y mensaje predeterminado (cámbialo por el de tu cliente)
  const phoneNumber = "584144319572";
  const message = encodeURIComponent(
    "¡Hola! Me gustaría obtener más información sobre sus servicios.",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="block transition-transform duration-300 hover:scale-110 active:scale-95 drop-shadow-lg"
      >
        <Image
          src="/WhatsApp_Icon.svg"
          alt="WhatsApp Chat"
          width={100}
          height={100}
          /* 50x50 en móviles (w-[50px] h-[50px]) y 100x100 de md/lg en adelante (md:w-[100px] md:h-[100px]) */
          className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-contain"
          priority
        />
      </Link>
    </div>
  );
}
