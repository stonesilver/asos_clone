import { ReactSVG } from "react";

export interface FooterChildrenProps {
  title: string;
  href: string;
}

export interface FooterProps {
  category: string;
  children: FooterChildrenProps[];
  location?: boolean;
}

export interface MobileMenuProps {
  title: string;
  color?: boolean;
  desc?: string;
  bgImg?: string;
  bgColor?: string;
  height: string;
  top?: boolean;
}

export interface UserProps {
  title: string;
  href: string;
  icon: string | ReactSVG | any;
}

export interface AUthProps {
  title?: string;
  href?: string;
  divider?: boolean;
}

export interface DesktopLiProp {
  title: string;
  li: {} | { label: string; href: string }[];
  type: string;
}

export interface DesktopMenuProps {
  title: string;
  children: DesktopLiProp[];
}
