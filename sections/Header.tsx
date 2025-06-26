import HeaderIsland from "site/islands/HeaderIsland.tsx";
import { ImageProps } from "site/types/ImageProps.ts";

/** @titleBy name */
interface NavItems {
  name: string;
  link: string;
}

interface HeaderButton {
  text: string;
  link: string;
}

export interface HeaderProps {
  logo: ImageProps;
  navItems: NavItems[];
  TestButton: HeaderButton;
  MyBrasasButton: HeaderButton;
}

export default function Header(
  { logo, navItems, TestButton, MyBrasasButton }: HeaderProps,
) {
  return (
    <HeaderIsland
      logo={logo}
      navItems={navItems}
      TestButton={TestButton}
      MyBrasasButton={MyBrasasButton}
    />
  );
}
