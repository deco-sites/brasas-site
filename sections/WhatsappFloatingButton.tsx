import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

interface WhatsappFloatingButtonProps {
  phoneNumber: string;
  message: string;
  image: ImageWidget;
}

export default function WhatsappFloatingButton(
  { phoneNumber, message, image }: WhatsappFloatingButtonProps,
) {
  return (
    <div className="fixed z-50 bottom-4 right-4">
      {/* Balão de conversa */}
      <div
        className={`
          relative z-50 bg-white text-gray-700 text-xs px-4 py-1 rounded-md shadow-md mb-4 md:whitespace-nowrap
          max-w-[200px] text-center md:text-left
          md:absolute md:bottom-16 md:right-8
        `}
      >
        <span>{message}</span>

        {/* Perninha mobile */}
        <div className="absolute w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white left-1/2 -translate-x-1/2 -bottom-2 md:hidden">
        </div>

        {/* Perninha desktop */}
        <div className="hidden md:block absolute w-0 h-0 border-l-[10px] border-l-transparent border-r-0 border-t-[10px] border-t-white bottom-[-10px] right-4">
        </div>
      </div>
      {/*Botão Whatsapp*/}
      <a
        target="_blank"
        href={`https://wa.me/55${phoneNumber}?text=Eu%20estava%20no%20site%20do%20BRASAS.com%20e%20gostaria%20de%20tirar%20uma%20duvida`}
      >
        <div className="relative flex items-center justify-center">
          {/* Ondas (ripple) */}
          <span className="absolute w-14 h-14 rounded-full bg-[#10c379] opacity-75 animate-ripple">
          </span>
          <span className="absolute w-14 h-14 rounded-full bg-[#10c379] opacity-75 animate-ripple [animation-delay:0.6s]">
          </span>
          <span className="absolute w-14 h-14 rounded-full bg-[#10c379] opacity-75 animate-ripple [animation-delay:1.2s]">
          </span>

          {/* Ícone */}
          <Image
            src={image}
            className="relative w-14 h-14 z-50"
            alt="Whatsapp Floating Button"
          />
        </div>
      </a>
    </div>
  );
}
