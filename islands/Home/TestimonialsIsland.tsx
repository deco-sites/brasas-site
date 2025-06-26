import { useEffect, useState } from "preact/hooks";
import TestimonialCard from "site/components/ui/TestimonialCard.tsx";
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/chevron-right.tsx";
import IconChevronLeft from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/chevron-left.tsx";

export default function TestimonialsIsland(props) {
  const totalItems = props.testimonials.length;

  const extendedTestimonials = [
    ...props.testimonials,
    ...props.testimonials,
    ...props.testimonials,
  ];

  const [currentIndex, setCurrentIndex] = useState(totalItems);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index + totalItems);
  };

  useEffect(() => {
    if (currentIndex === totalItems * 2) {
      setIsTransitioning(false);
      setCurrentIndex(totalItems);
    } else if (currentIndex === totalItems - 1) {
      setIsTransitioning(false);
      setCurrentIndex(totalItems * 2 - 1);
    }
  }, [currentIndex, totalItems]);

  // Eventos de toque para deslizar
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Deslizou para a esquerda (próximo slide)
      nextSlide();
    } else if (touchStartX - touchEndX < -50) {
      // Deslizou para a direita (slide anterior)
      prevSlide();
    }
  };

  return (
    <div
      className="flex flex-col gap-10 py-20 bg-none xl:bg-[url('/testimonials-left-bg.svg'),_url('/testimonials-right-bg.svg')]"
      style={{
        backgroundPosition: "0 calc(5rem + 18px), 100% -16px",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "auto, auto",
      }}
    >
      <div className="flex justify-center">
        <h2 className="text-blue-900 leading-10 text-4xl font-black text-center">
          {props.title}
        </h2>
      </div>

      <div className="flex flex-col">
        <div className="w-full flex items-center justify-center">
          {/* Contêiner do Carrossel */}
          <div
            className="relative w-full overflow-x-hidden flex justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`flex transition-transform duration-300 ease-in-out mt-16`}
              style={{
                transform: `translateX(calc(-${
                  currentIndex * (100 / 3)
                }% + 33.33%))`,
              }}
            >
              {extendedTestimonials.map((testimonial, index) => {
                // Calcula a posição relativa ao card ativo
                const position = index - currentIndex;

                // Determina o justify-content baseado na posição
                let justifyClass = "justify-center"; // padrão (card ativo)
                if (position === -1) justifyClass = "justify-end"; // card à esquerda
                if (position === 1) justifyClass = "justify-start"; // card à direita

                return (
                  <div
                    key={index}
                    className={`flex-shrink-0 flex ${justifyClass}`}
                    style={{
                      width: "calc(100% / 3)",
                    }}
                  >
                    <TestimonialCard
                      text={testimonial.text}
                      userName={testimonial.userName}
                      userRole={testimonial.userRole}
                      userImage={testimonial.userImage}
                      isActive={index === currentIndex}
                    />
                  </div>
                );
              })}
            </div>
            {/* Botão Esquerdo */}
            <button
              className="absolute hidden md:block top-1/4 translate-y-full left-[calc(50%-336px-20px)] z-10 bg-blue-300 text-white rounded-full p-4"
              onClick={prevSlide}
            >
              <IconChevronLeft class="w-6 h-6" />
            </button>

            {/* Botão Direito */}
            <button
              className="absolute hidden md:block top-1/4 translate-y-full right-[calc(50%-336px-20px)] z-10 bg-blue-300 text-white rounded-full p-4"
              onClick={nextSlide}
            >
              <IconChevronRight class="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex md:hidden justify-center gap-2">
          {props.testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-4 w-4 rounded-full cursor-pointer ${
                index + totalItems === currentIndex
                  ? "bg-blue-300"
                  : "bg-blue-300/25"
              }`}
              onClick={() => goToSlide(index)}
            >
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
