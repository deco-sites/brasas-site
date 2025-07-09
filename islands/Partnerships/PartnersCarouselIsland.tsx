import { useEffect, useRef } from "preact/hooks";

export default function PartnersCarouselIsland(props) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || !props.partnersLogos.length) return;

    // Limpa conteúdo antigo
    carousel.innerHTML = "";

    // Cria elementos
    const elements = props.partnersLogos.map((logo) => {
      const img = document.createElement("img");
      img.src = logo.image;
      img.alt = logo.alt;
      img.className = "h-16 w-auto object-contain mx-8 flex-shrink-0";
      img.loading = "lazy";
      img.draggable = false;
      return img;
    });

    // Append original + clone para criar o efeito infinito
    elements.forEach((el) => carousel.appendChild(el));
    elements.forEach((el) => carousel.appendChild(el.cloneNode(true)));
  }, [props.partnersLogos]);

  const styles = `
    @keyframes infiniteScroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    .infinite-scroll-container {
      display: flex;
      width: max-content;
      animation: infiniteScroll ${
    props.animationDuration || 30
  }s linear infinite;
    }
    
    .infinite-scroll-wrapper {
      overflow: hidden;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section className="bg-gray-100/10 flex flex-col gap-20 items-center justify-center h-[22rem] relative">
        <h2 className="text-center text-2xl font-bold text-blue-500 z-10">
          {props.title}
        </h2>

        <div className="w-full overflow-hidden relative px-4">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f8f8f9] via-[#f8f8f9] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f8f8f9] via-[#f8f8f9] to-transparent z-10 pointer-events-none" />

          <div className="infinite-scroll-wrapper">
            <div
              ref={carouselRef}
              className="infinite-scroll-container"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
    </>
  );
}
