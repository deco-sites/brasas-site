import { useRef, useState } from "preact/hooks";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function VideosCarouselIsland({ videos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { selectedLanguage } = useSelectLanguage();
  const videoRef = useRef(null);

  const changeVideo = (direction) => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pausa o vídeo atual antes de trocar
    }

    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + direction + videos.length) % videos.length;
      return newIndex;
    });
  };

  return (
    <section className="relative flex flex-col items-center w-full mx-auto">
      <h2 className="absolute z-50 top-4 text-base xl:text-2xl font-bold mb-4 text-center text-red-300">
        {selectedLanguage.value === "ptBr"
          ? videos[currentIndex].titleInPortuguese
          : videos[currentIndex].titleInEnglish}
      </h2>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {videos.map((video, index) => (
            <video
              key={index}
              ref={index === currentIndex ? videoRef : null}
              className="w-full max-h-[46rem] bg-black flex-shrink-0"
              controls
              poster={video.poster}
            >
              <source src={video.url} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          ))}
        </div>
        <button
          onClick={() => changeVideo(-1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black-500 bg-opacity-50 shrink-0 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-opacity-75"
        >
          &#9664;
        </button>
        <button
          onClick={() => changeVideo(1)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black-500 bg-opacity-50 shrink-0 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-opacity-75"
        >
          &#9654;
        </button>
      </div>
    </section>
  );
}
