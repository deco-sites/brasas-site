import Image from "apps/website/components/Image.tsx";

export default function ReferAndEarnPageBannerIsland(props) {
  return (
    <section className="flex w-full h-[35.8rem]">
      <Image
        src={props.image}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className="w-full object-cover"
      />
    </section>
  );
}
