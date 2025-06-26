import Image from "apps/website/components/Image.tsx";

export default function TestimonialCard(
  {
    text,
    userName,
    userRole,
    userImage,
    isActive,
  },
) {
  return (
    <div
      key={userName}
      className={`max-w-[22.8rem] lg:max-w-2xl px-4 transition-all duration-300 ${
        isActive ? "scale-100 opacity-100" : "scale-90 opacity-50 blur-sm"
      }`}
    >
      <div
        className={`relative rounded-2xl px-8 py-12 xl:px-32 xl:py-20 overflow-visible -skew-y-3 ${
          isActive ? "bg-yellow-500" : "bg-gray-300"
        }`}
      >
        <div className="skew-y-3">
          {/* Contêiner para compensar a inclinação */}
          <span className="font-semibold text-black-500 leading-8 flex text-center">
            {text}
          </span>
        </div>
        {/* Triângulo no final do balão */}
        <div
          className={`absolute rotate-90 scale-y-[-1] bottom-1 max-lg:left-1/2 -translate-x-1/2 lg:translate-x-0 lg:right-14 translate-y-full w-0 h-0 border-l-[50px] border-t-[50px] ${
            isActive ? "border-l-yellow-500" : "border-l-gray-300"
          } border-t-transparent`}
        >
        </div>
      </div>
      <div className="flex justify-center lg:justify-end mt-16">
        <div className="flex flex-col-reverse items-center lg:flex-row gap-4">
          <div className="flex flex-col items-center lg:items-end gap-2 text-gray-500">
            <span>
              &mdash; {userName}
            </span>
            <span>
              {userRole}
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
