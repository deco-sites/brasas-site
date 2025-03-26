import Image from "apps/website/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";

export default function CookiesCardIsland() {
  const [isAccepted, setIsAccepted] = useState<boolean>(true);

  useEffect(() => {
    // Checa se já existe uma preferência salva
    const savedPreference = localStorage.getItem("cookiesAccepted");
    if (savedPreference !== null) {
      setIsAccepted(savedPreference === "true" ? false : true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsAccepted(false);
  };

  const handleClose = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setIsAccepted(false);
  };

  if (!isAccepted) return null;

  return (
    <div className="fixed max-w-[32rem] bg-white rounded-xl shadow-2xl p-8 z-50 bottom-4 left-1/2 -translate-x-1/2 flex flex-col gap-6">
      <div className="flex gap-4 justify-center">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
          className="w-12 h-12"
          width={48}
          height={48}
          alt="Cookie icon"
          loading="eager"
        />
        <span className="text-center font-bold">
          We use cookies to ensure that we give you the best experience on our
          website.
        </span>
      </div>
      <div className="flex justify-center gap-6">
        <button
          onClick={handleAccept}
          className="bg-blue-300 hover:bg-blue-950 transition-all duration-300 py-2 px-8 text-white rounded-lg"
        >
          Accept
        </button>
        <button
          onClick={handleClose}
          className="bg-blue-300 hover:bg-blue-950 transition-all duration-300 py-2 px-8 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}
