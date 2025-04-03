import { useSelectLanguage } from "site/sdk/language.ts";

export default function AboutTitlePageIsland(props) {
  const { selectedLanguage } = useSelectLanguage();

  return (
    <section className="flex justify-center">
      <div className="max-w-[88.5rem] px-9 py-14">
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .header-about {
            & strong {
                color: #1e22be;
                background: #1e22be26;
                border-radius: 5px;
                padding: 2px 4px;
            }
            }
          `,
          }}
        />
        <h2
          className="header-about text-blue-800 text-3xl text-center font-bold"
          dangerouslySetInnerHTML={{
            __html: selectedLanguage.value === "ptBr"
              ? props.titleInPortuguese
              : props.titleInEnglish,
          }}
        >
        </h2>
      </div>
    </section>
  );
}
