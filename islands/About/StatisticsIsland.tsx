export default function StatisticsIsland(props) {
  return (
    <section className="flex flex-col gap-12 items-center bg-green-100 py-20 px-6">
      <p className="text-2xl font-normal max-w-[44rem] text-center">
        {props.text}
      </p>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-36 w-full lg:justify-center">
        {props.items.map((item, index) => (
          <div className="flex lg:flex-col items-center gap-4 w-44">
            <div className="relative w-full flex justify-start lg:justify-center">
              <div className=" flex items-center justify-center bg-blue-300 w-14 h-14 rounded-full">
                <img
                  src={item.icon}
                  alt={item.text}
                />
                {/*Linha esquerda*/}
                {index !== 0 && (
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -translate-x-full left-[calc(50%-28px)] w-[calc(50%-28px+73px)] bg-blue-300 h-1">
                  </div>
                )}
                {/*Linha direita*/}
                {props.items.length - 1 !== index && (
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-[calc(50%-28px)] translate-x-full w-[calc(50%-28px+73px)] bg-blue-300 h-1">
                  </div>
                )}
                {/* Linha abaixo */}
                {props.items.length - 1 !== index && (
                  <div className="lg:hidden rotate-90 absolute top-full mt-4 w-11 bg-blue-300 h-1">
                  </div>
                )}
              </div>
            </div>
            <p className="font-black text-2xl whitespace-nowrap lg:text-wrap lg:text-center">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
