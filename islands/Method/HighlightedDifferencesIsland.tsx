export default function HighlightedDifferencesIsland(props) {
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-[88.5rem] px-9 pt-20 pb-10 md:pb-32 xl:py-20">
        <h2 className="text-center font-bold text-3xl text-black-500 xl:px-9">
          {props.title}
        </h2>

        <div className="relative mt-20 xl:mb-24 flex flex-col gap-7 pb-10">
          <div className="bg-green-100 rounded-3xl flex items-center lg:items-start justify-center h-60 px-6 lg:px-52">
            <h3 className="py-10 pb-8 text-blue-300 font-black text-2xl text-center">
              {props.description}
            </h3>
          </div>
          <div className="lg:absolute lg:bottom-0 lg:translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 grid lg:flex grid-cols-2 items-center justify-center gap-8">
            {props.differenceCards.map((card) => (
              <div className="flex items-center justify-center w-full">
                <div
                  key={card.text}
                  className="flex flex-col items-center justify-center gap-2 w-36 h-36 md:w-44 md:h-44 bg-blue-300 rounded-full"
                >
                  <img
                    src={card.icon.src}
                    alt={card.icon.alt}
                    width={card.icon.width ?? 100}
                    height={card.icon.height ?? 100}
                  />
                  <p className="text-green-100 font-bold text-base text-wrap text-center px-4">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
