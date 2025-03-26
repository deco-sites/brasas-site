import Image from "apps/website/components/Image.tsx";

export default function WhatsappFloatingButton() {
  return (
    <a
      target="_blank"
      href="https://api.whatsapp.com/send?1=pt_BR&phone=552122017586"
    >
      <Image
        src="/brasas_iconewppsite.gif"
        className="fixed z-50 bottom-4 right-4 w-16 h-16"
        alt="Whatsapp Floating Button"
      />
    </a>
  );
}
