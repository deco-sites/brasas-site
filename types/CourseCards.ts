import { ImageWidget } from "apps/admin/widgets.ts";

/** @titleBy englishTitle */
export interface CourseCard {
  englishTitle: string;
  portugueseTitle: string;
  /**
   * @format rich-text
   */
  englishDescription: string;
  /**
   * @format rich-text
   */
  portugueseDescription: string;
  image: ImageWidget;
  link: string;
}
