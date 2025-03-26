import TestimonialCard from "site/components/ui/TestimonialCard.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";
import { useEffect, useState } from "preact/hooks";
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/chevron-right.tsx";
import IconChevronLeft from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/chevron-left.tsx";

export default function TestimonialsIsland(props) {
  const { selectedLanguage } = useSelectLanguage();
  const totalItems = props.testimonials.length;

  const extendedTestimonials = [
    ...props.testimonials,
    ...props.testimonials,
    ...props.testimonials,
  ];

  const [currentIndex, setCurrentIndex] = useState(totalItems);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
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
          {selectedLanguage.value === "ptBr"
            ? props.titleInPortuguese
            : props.titleInEnglish}
        </h2>
      </div>

      <div className="flex">
        <div className="w-full flex items-center justify-center">
          {/* Contêiner do Carrossel */}
          <div className="relative w-full overflow-x-hidden flex justify-center">
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
                    className={` flex-shrink-0 flex ${justifyClass}`}
                    style={{
                      width: "calc(100% / 3)",
                    }}
                  >
                    <TestimonialCard
                      textInEnglish={testimonial.textInEnglish}
                      textInPortuguese={testimonial.textInPortuguese}
                      userName={testimonial.userName}
                      userRoleInEnglish={testimonial.userRoleInEnglish}
                      userRoleInPortuguese={testimonial.userRoleInPortuguese}
                      userImage={testimonial.userImage}
                      isActive={index === currentIndex}
                    />
                  </div>
                );
              })}
            </div>
            {/* Botão Esquerdo */}
            <button
              className="absolute top-1/4 translate-y-full left-[calc(50%-336px-20px)] z-10 bg-blue-300 text-white rounded-full p-4"
              onClick={prevSlide}
            >
              <IconChevronLeft class="w-6 h-6" />
            </button>

            {/* Botão Direito */}
            <button
              className="absolute top-1/4 translate-y-full right-[calc(50%-336px-20px)] z-10 bg-blue-300 text-white rounded-full p-4"
              onClick={nextSlide}
            >
              <IconChevronRight class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
