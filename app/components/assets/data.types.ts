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
  icon: string;
}

export interface AUthProps {
  title?: string;
  href?: string;
  divider?: boolean;
}
