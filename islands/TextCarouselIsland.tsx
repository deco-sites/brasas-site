import { useState } from "preact/hooks";

export default function TextCarouselIsland(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === props.cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? props.cards.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const COLORS = {
    blue: "blue-300",
    red: "red-300",
  };

  // Eventos de toque
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

  return (
    <section className="flex flex-col justify-center w-full relative py-10">
      {/* Container principal do carrossel */}
      <div className="relative w-full">
        {/* Navegação por setas */}
        <div className="absolute hidden xl:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-0 max-w-5xl mx-auto z-50">
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 text-${COLORS[props.color]}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 text-${COLORS[props.color]}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Slides do carrossel com eventos de toque */}
        <div
          className="w-full px-9 max-w-5xl flex overflow-hidden mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex items-center w-full gap-20 transition-transform duration-300"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% - ${
                currentIndex * 80
              }px))`,
            }}
          >
            {props.cards.map((methodCard, index) => (
              <div
                key={index}
                className={`w-full shrink-0 bg-white flex flex-col items-center justify-center gap-6 rounded-2xl border border-gray-100 p-4 md:p-20 transition duration-300 h-full border-l-${
                  COLORS[props.color]
                } border-l-8`}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                      p > mark {
                        color: #C8102E !important;
                        padding: 4px 8px;
                        border-radius: 5px;
                        background: #c8102e1f !important;
                      }
                    `,
                  }}
                />
                <h3
                  className={`text-${
                    COLORS[props.color]
                  } font-bold text-xl text-center`}
                >
                  {methodCard.title}
                </h3>
                <p
                  className="text-black-500 text-base"
                  dangerouslySetInnerHTML={{
                    __html: methodCard.description,
                  }}
                >
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots de navegação */}
      <div className="flex justify-center mt-6 gap-2">
        {props.cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? `bg-${COLORS[props.color]}`
                : "bg-gray-100"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
