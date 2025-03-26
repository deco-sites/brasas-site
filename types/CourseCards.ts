import { ImageWidget } from "apps/admin/widgets.ts";

/** @titleBy englishTitle */
export interface CourseCard {
  englishTitle: string;
  portugueseTitle: string;
  englishDescription: string;
  portugueseDescription: string;
  image: ImageWidget;
  link: string;
}
