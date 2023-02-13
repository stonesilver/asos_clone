export interface FooterChildrenProps {
  title: string;
  href: string;
}

export interface FooterProps {
  category: string;
  children: FooterChildrenProps[];
  location?: boolean;
}
