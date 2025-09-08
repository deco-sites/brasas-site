import { useEffect, useState } from "preact/hooks";
import TestimonialCard from "site/components/ui/TestimonialCard.tsx";
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/chevron-right.tsx";
import IconChevronLeft from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/chevron-left.tsx";

export default function TestimonialsIsland(props) {
  const totalItems = props.testimonials.length;

  // Criamos apenas os clones necessários para a ilusão de infinito
  const extendedTestimonials = [
    props.testimonials[totalItems - 1], // último item no início
    ...props.testimonials,
    props.testimonials[0], // primeiro item no final
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Começa no primeiro item real
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
    setCurrentIndex(index + 1); // +1 porque começamos no índice 1
  };

  useEffect(() => {
    // Quando chegar no clone do final
    if (currentIndex === extendedTestimonials.length - 1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1); // Volta para o primeiro item real
      }, 300);
      return () => clearTimeout(timer);
    } // Quando chegar no clone do início
    else if (currentIndex === 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(extendedTestimonials.length - 2); // Volta para o último item real
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, extendedTestimonials.length]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    } else if (touchStartX - touchEndX < -50) {
      prevSlide();
    }
  };

  // Calcula o índice real para os dots
  const getRealIndex = (index: number) => {
    if (index === 0) return totalItems - 1;
    if (index === extendedTestimonials.length - 1) return 0;
    return index - 1;
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
          <div
            className="relative w-full overflow-x-hidden flex justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`flex transition-transform duration-300 ease-in-out mt-16 ${
                !isTransitioning ? "!transition-none" : ""
              }`}
              style={{
                transform: `translateX(calc(-${
                  currentIndex * (100 / 3)
                }% + 33.33%))`,
              }}
            >
              {extendedTestimonials.map((testimonial, index) => {
                const position = index - currentIndex;
                let justifyClass = "justify-center";
                if (position === -1) justifyClass = "justify-end";
                if (position === 1) justifyClass = "justify-start";

                return (
                  <div
                    key={index}
                    className={`flex-shrink-0 flex ${justifyClass}`}
                    style={{ width: "calc(100% / 3)" }}
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

            <button
              className="absolute hidden md:block top-1/4 translate-y-full left-[calc(50%-336px-20px)] z-10 bg-blue-300 text-white rounded-full p-4"
              onClick={prevSlide}
            >
              <IconChevronLeft class="w-6 h-6" />
            </button>

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
                getRealIndex(currentIndex) === index
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
