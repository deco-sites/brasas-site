import { useSelectLanguage } from "site/sdk/language.ts";
import { useEffect, useRef } from "preact/hooks";

export default function PartnersCarouselIsland(props) {
  const { selectedLanguage } = useSelectLanguage();
  const carouselRef = useRef(null);
  const requestRef = useRef();
  const speed = 0.8; // Velocidade ajustável (0.5-1.5)

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

    // 2. Limpa e prepara o carrossel
    carousel.innerHTML = "";
    const elements = createLogoElements();

    // 3. Adiciona 3 cópias dos logos para transição suave
    for (let i = 0; i < 3; i++) {
      elements.forEach((el) => carousel.appendChild(el.cloneNode(true)));
    }

    // 4. Configura animação fluída
    let position = 0;
    const singleLoopWidth = carousel.scrollWidth / 3;
    let lastTime = performance.now();

    const animate = (currentTime) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      position -= (speed * delta) / 16;

      // Reset suave antes de chegar ao final
      if (position <= -singleLoopWidth * 2) {
        position += singleLoopWidth;
        carousel.style.transition = "none";
        carousel.style.transform = `translateX(${position}px)`;
        // Força reflow
        void carousel.offsetWidth;
      }

      carousel.style.transition = "transform 0s linear";
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
