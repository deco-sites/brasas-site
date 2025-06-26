import { ImageWidget } from "apps/admin/widgets.ts";

/** @titleBy title */
export interface CourseCard {
  title: string;
  /**
   * @format rich-text
   */
  description: string;
  image: ImageWidget;
  link: string;
}
