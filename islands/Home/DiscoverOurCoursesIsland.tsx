import { useSelectLanguage } from "site/sdk/language.ts";
import HomeForm from "site/islands/HomeForm.tsx";
import CardsGrid from "site/components/ui/CardsGrid.tsx";
import { DiscoverOurCoursesProps } from "site/sections/Home/DiscoverOurCourses.tsx";

export default function DiscoverOurCoursesIsland(
  props: DiscoverOurCoursesProps,
) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <div
      className="relative flex justify-center bg-blue-100 w-full"
      style={{
        backgroundImage: `url('/courses-bg-1.svg'), url('/courses-bg-2.svg')`,
        backgroundPosition: "55% -15%, 0px calc(100% - 296px)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "auto, 100% auto",
      }}
    >
      <div className="w-full max-w-[88.5rem] px-9 pb-36">
        <HomeForm
          ptBrTitle={props.portugueseFormTitle}
          enUsTitle={props.englishFormTitle}
          RecipientsEmailArr={props.RecipientsEmailArr}
          CopyToArr={props.CopyToArr}
          subject={props.subject}
        />
        <div className="mt-[40rem] xl:mt-[26.5rem] flex flex-col items-center">
          <h2 className="font-black leading-[48px] text-black-500 text-[2.5rem] mb-12">
            {selectedLanguage.value === "ptBr"
              ? props.portugueseTitle
              : props.englishTitle}
          </h2>
          <CardsGrid cards={props.cards} />
        </div>
      </div>
    </div>
  );
}
