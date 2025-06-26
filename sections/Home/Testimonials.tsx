import { ImageWidget } from "apps/admin/widgets.ts";
import TestimonialsIsland from "site/islands/Home/TestimonialsIsland.tsx";

/** @titleBy userName */
export interface TestimonialCard {
  text: string;
  userName: string;
  userRole: string;
  userImage: ImageWidget;
}

interface TestimonialProps {
  title: string;
  testimonials: TestimonialCard[];
}

export default function Testimonials(props: TestimonialProps) {
  return (
    <>
      <TestimonialsIsland {...props} />
    </>
  );
}
