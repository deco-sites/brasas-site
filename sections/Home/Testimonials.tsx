import { ImageWidget } from "apps/admin/widgets.ts";
import TestimonialsIsland from "site/islands/Home/TestimonialsIsland.tsx";

/** @titleBy userName */
export interface TestimonialCard {
  textInEnglish: string;
  textInPortuguese: string;
  userName: string;
  userRoleInEnglish: string;
  userRoleInPortuguese: string;
  userImage: ImageWidget;
}

interface TestimonialProps {
  titleInEnglish: string;
  titleInPortuguese: string;
  testimonials: TestimonialCard[];
}

export default function Testimonials(props: TestimonialProps) {
  return (
    <>
      <TestimonialsIsland {...props} />
    </>
  );
}
