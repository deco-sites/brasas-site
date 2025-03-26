import Image from "apps/website/components/Image.tsx";
import { useSelectLanguage } from "site/sdk/language.ts";

export default function TestimonialCard(
  {
    textInEnglish,
    textInPortuguese,
    userName,
    userRoleInEnglish,
    userRoleInPortuguese,
    userImage,
    isActive,
  },
) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <div
      key={userName}
      className={`max-w-2xl px-4 transition-all duration-300 ${
        isActive ? "scale-100 opacity-100" : "scale-90 opacity-50 blur-sm"
      }`}
    >
      <div
        className={`relative rounded-2xl px-32 py-20 overflow-visible -skew-y-3 ${
          isActive ? "bg-yellow-500" : "bg-gray-300"
        }`}
      >
        <div className="skew-y-3">
          {/* Contêiner para compensar a inclinação */}
          <span className="font-semibold text-black-500 leading-8 flex text-center">
            {selectedLanguage.value === "ptBr"
              ? textInPortuguese
              : textInEnglish}
          </span>
        </div>
        {/* Triângulo no final do balão */}
        <div
          className={`absolute rotate-90 scale-y-[-1] bottom-1 right-14 translate-y-full w-0 h-0 border-l-[50px] border-t-[50px] ${
            isActive ? "border-l-yellow-500" : "border-l-gray-300"
          } border-t-transparent`}
        >
        </div>
      </div>
      <div className="flex justify-end mt-16">
        <div className="flex gap-4">
          <div className="flex flex-col items-end gap-2 text-gray-500">
            <span>&mdash; {userName}</span>
            <span>
              {selectedLanguage.value === "ptBr"
                ? userRoleInPortuguese
                : userRoleInEnglish}
            </span>
          </div>
          <Image
            src={userImage}
            alt=""
            className="rounded-full w-20 h-20 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
