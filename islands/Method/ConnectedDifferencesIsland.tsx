import Image from "apps/website/components/Image.tsx";

export default function ConnectedDifferencesIsland(props) {
  return (
    <section className="flex flex-col gap-6 xl:gap-9 items-center justify-center py-10 xl:pt-20 xl:pb-16">
      <h2 className="font-normal leading-8 text-2xl max-w-[45rem] text-center">
        {props.title}
      </h2>
      <Image
        src={props.desktopImage}
        alt="Mandala"
        className="hidden md:flex object-cover"
      />
      <Image
        src={props.mobileImage}
        alt="Mandala"
        className="md:hidden object-cover"
      />
    </section>
  );
}
