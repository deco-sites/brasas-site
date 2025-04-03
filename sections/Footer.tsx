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
 * @titleBy textInPortuguese
 */
interface NavItem {
  textInEnglish: string;
  textInPortuguese: string;
  url: string;
}

/**
 * @titleBy nameInPortuguese
 */
interface Course {
  nameInEnglish: string;
  nameInPortuguese: string;
  url: string;
}

interface TestButton {
  textInEnglish: string;
  textInPortuguese: string;
  url: string;
}

interface MyBrasasButton {
  textInEnglish: string;
  textInPortuguese: string;
  url: string;
}

interface Seal {
  image: ImageProps;
  textInEnglish: string;
  textInPortuguese: string;
  link: string;
  title: string;
}

/**
 * @titleBy textInPortuguese
 */
interface endPageNavItem {
  textInEnglish: string;
  textInPortuguese: string;
  url: string;
}

interface Copyright {
  textInEnglish: string;
  textInPortuguese: string;
}

interface FooterProps {
  footerLogo: ImageProps;
  socialMediaTitleInEnglish: string;
  socialMediaTitleInPortuguese: string;
  socialMediaIcons: socialMediaIcon[];
  footerNav: NavItem[];
  coursesTitleInEnglish: string;
  coursesTitleInPortuguese: string;
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
