import { useState } from "preact/hooks";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function VideosCarouselIsland({ videos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { selectedLanguage } = useSelectLanguage();

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + videos.length) % videos.length
    );
  };

  return (
    <section className="relative flex flex-col items-center w-full mx-auto">
      <h2 className="absolute z-50 top-4 text-2xl font-bold mb-4 text-center text-red-300">
        {selectedLanguage.value === "ptBr"
          ? videos[currentIndex].titleInPortuguese
          : videos[currentIndex].titleInEnglish}
      </h2>
      <div className="relative w-full">
        <video
          className="w-full max-h-[46rem] bg-black"
          controls
          poster={videos[currentIndex].poster}
        >
          <source src={videos[currentIndex].url} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        <button
          onClick={prevVideo}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          &#9664;
        </button>
        <button
          onClick={nextVideo}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          &#9654;
        </button>
      </div>
    </section>
  );
}
