import Image from "apps/website/components/Image.tsx";

export default function CourseCardExpanded({ card }) {
  return (
    <a
      href={card.link}
      className="flex flex-col justify-between bg-white h-[16.75rem] w-[20.25rem] overflow-hidden rounded-2xl border border-gray-100 transform transition-transform duration-500 hover:scale-105"
    >
      <div className="flex flex-col items-center gap-2 text-blue-900 p-4 h-[36.36%]">
        <span className="leading-8 font-black text-xl">
          {card.title}
        </span>
        <span className="leading-6 font-medium font-base">
          {card.description}
        </span>
      </div>
      <div className="relative max-w-full h-[63.64%]">
        <Image
          src={card.image}
          alt=""
          className="absolute bottom-0 rounded-b-2xl w-full h-auto object-cover"
          style={{ overflowClipMargin: "content-box" }}
        />
      </div>
    </a>
  );
}
