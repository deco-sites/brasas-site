import { ImageWidget } from "apps/admin/widgets.ts";
import FooterIsland from "site/islands/FooterIsland.tsx";
import { ImageProps } from "site/types/ImageProps.ts";

/* @titleBy altText */
interface socialMediaIcon {
  altText: string;
  icon: ImageWidget;
  link: string;
}

/**
 * @titleBy text
 */
interface NavItem {
  text: string;
  url: string;
}

/**
 * @titleBy name
 */
interface Course {
  name: string;
  url: string;
}

interface TestButton {
  text: string;
  url: string;
}

interface MyBrasasButton {
  text: string;
  url: string;
}

interface Seal {
  image: ImageProps;
  text: string;
  link: string;
  title: string;
}

/**
 * @titleBy text
 */
interface endPageNavItem {
  text: string;
  url: string;
}

interface Copyright {
  text: string;
}

interface FooterProps {
  footerLogo: ImageProps;
  socialMediaTitle: string;
  socialMediaIcons: socialMediaIcon[];
  footerNav: NavItem[];
  coursesTitle: string;
  coursesLink: string;
  coursesList: Course[];
  testButton: TestButton;
  myBrasasButton: MyBrasasButton;
  seals: Seal[];
  endPageNavItems: endPageNavItem[];
  copyright: Copyright;
}

export default function Footer(props: FooterProps) {
  return <FooterIsland {...props} />;
}
