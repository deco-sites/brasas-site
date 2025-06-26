export default function TermsOfUseIsland(props) {
  return (
    <section className="flex w-full justify-center">
      <div className="w-full max-w-[88.5rem] px-9 py-8 lg:py-14">
        <div className="flex justify-end">
          <span>
            {props.lastUpdateDate}
          </span>
        </div>
        <div className="flex flex-col gap-8">
          {props.textBlocks.map((textBlock, index) => (
            <div className="flex flex-col gap-6" key={index}>
              <h2 className="text-black-500 font-bold text-2xl leading-10">
                {textBlock.title}
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: textBlock.text }}
              >
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
