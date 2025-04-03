import { useSelectLanguage } from "site/sdk/language.ts";
import { useEffect, useRef } from "preact/hooks";

export default function PartnersCarouselIsland(props) {
  const { selectedLanguage } = useSelectLanguage();
  const carouselRef = useRef(null);
  const requestRef = useRef();
  const speed = 0.8; // Velocidade ajustável

  useEffect(() => {
    if (!carouselRef.current || !props.partnersLogos.length) return;

    const carousel = carouselRef.current;
    const logos = props.partnersLogos;

    // 1. Cria elementos de imagem otimizados
    const createLogoElements = () => {
      return logos.map((logo) => {
        const img = document.createElement("img");
        img.src = logo.image;
        img.alt = logo.alt;
        img.className = "h-16 w-auto object-contain mx-8 flex-shrink-0";
        img.loading = "lazy";
        img.draggable = false;
        return img;
      });
    };

    // 2. Limpa e configura o carrossel
    carousel.innerHTML = "";
    const elements = createLogoElements();

    // 3. Duplicação dos elementos para efeito contínuo
    elements.forEach((el) => carousel.appendChild(el.cloneNode(true)));
    elements.forEach((el) => carousel.appendChild(el.cloneNode(true))); // Duplica novamente

    // 4. Configura a animação contínua
    let position = 0;
    let lastTime = performance.now();
    const totalWidth = carousel.scrollWidth / 2; // Metade do conteúdo visível

    const animate = (currentTime) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      position -= (speed * delta) / 16;

      // Reset suave ao atingir a metade do carrossel
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }

      carousel.style.transform = `translateX(${position}px)`;

      requestRef.current = requestAnimationFrame(animate);
    };

    // 5. Inicia animação após breve delay
    const startDelay = setTimeout(() => {
      requestRef.current = requestAnimationFrame(animate);
    }, 300);

    return () => {
      clearTimeout(startDelay);
      cancelAnimationFrame(requestRef.current);
    };
  }, [props.partnersLogos]);

  return (
    <section className="bg-gray-100/10 flex flex-col gap-20 items-center justify-center h-[22rem] relative">
      <h2 className="text-center text-2xl font-bold text-blue-500 z-10">
        {selectedLanguage.value === "ptBr"
          ? props.titleInPortuguese
          : props.titleInEnglish}
      </h2>

      <div className="w-full overflow-hidden relative px-4">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f8f8f9] via-[#f8f8f9] to-transparent z-10 pointer-events-none">
        </div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f8f8f9] via-[#f8f8f9] to-transparent z-10 pointer-events-none">
        </div>

        <div className="overflow-hidden">
          <div
            ref={carouselRef}
            className="flex w-max will-change-transform"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
