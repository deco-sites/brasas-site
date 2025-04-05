import CardsGrid from "site/components/ui/CardsGrid.tsx";

export default function CoursesCardsIsland(props) {
  return (
    <div
      className="relative flex justify-center bg-blue-100 w-full"
      style={{
        backgroundImage: ` url('/courses-bg-2.svg')`,
        backgroundPosition: "0px calc(100% - 296px)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
      }}
    >
      <div className="max-w-full md:max-w-[88.5rem] px-9 pt-12 pb-36">
        <CardsGrid cards={props.cards} />
      </div>
    </div>
  );
}
