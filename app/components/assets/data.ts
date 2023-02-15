import { FooterProps, MobileMenuProps, UserProps } from "./data.types";

export const footerLinks: FooterProps[] = [
  {
    category: "HELP & INFORMATION",
    children: [
      {
        title: "Help",
        href: "/",
      },
      {
        title: "Track order",
        href: "/",
      },
      {
        title: "Delivery & returns",
        href: "/",
      },
      {
        title: "Sitemap",
        href: "/",
      },
    ],
  },
  {
    category: "ABOUT ASOS",
    children: [
      {
        title: "About us",
        href: "/",
      },
      {
        title: "Careers at ASOS",
        href: "/",
      },
      {
        title: "Corporate responsibility",
        href: "/",
      },
      {
        title: "Investors' site",
        href: "/",
      },
    ],
  },
  {
    category: "MORE FROM ASOS",
    children: [
      {
        title: "Mobile and ASOS app",
        href: "/",
      },
      {
        title: "ASOS Marketplace",
        href: "/",
      },
      {
        title: "Gift vouchers",
        href: "/",
      },
      {
        title: "Black Friday",
        href: "/",
      },
      {
        title: "ASOS x thrift+",
        href: "/",
      },
    ],
  },
  {
    category: "SHOPPING FROM:",
    children: [],
    location: true,
  },
];

export const userOption: UserProps[] = [
  {
    title: "My Account",
    href: "/",
    icon: "/icons/user.svg",
  },
  {
    title: "My Orders",
    href: "/",
    icon: "/icons/box.svg",
  },
  {
    title: "Returns Information",
    href: "/",
    icon: "/icons/question-circle.svg",
  },
  {
    title: "Contact Preferences",
    href: "/",
    icon: "/icons/chat.svg",
  },
];

export const footerSocialHandles: string[] = [
  "/icons/facebook.svg",
  "/icons/instagram.svg",
  "/icons/snapchat.svg",
];

export const footerPayments: string[] = [
  "/images/visa-png.webp",
  "/images/mastercard-png.webp",
  "/images/pay-pal-png.webp",
  "/images/american-express-png.webp",
  "/images/visa-electron-png.webp",
];

export const womenMobileMenuData: MobileMenuProps[] = [
  {
    title: "home",
    bgImg: "/images/women_1.jpeg",
    height: "small",
  },
  {
    title: "up to 50% off fab fits",
    color: true,
    bgColor: "bg-purple-500",
    height: "big",
  },
  {
    title: "new in",
    bgImg: "/images/women_2.jpeg",
    height: "big",
  },
  {
    title: "clothing",
    bgImg: "/images/women_3.jpeg",
    height: "big",
  },
  {
    title: "dresses",
    bgImg: "/images/women_4.jpeg",
    height: "big",
  },
  {
    title: "shoes",
    bgImg: "/images/women_5.jpeg",
    height: "big",
  },
  {
    title: "trainers",
    bgImg: "/images/women_6.jpeg",
    height: "big",
  },
  {
    title: "sportwears",
    bgImg: "/images/women_7.jpeg",
    height: "big",
  },
  {
    title: "marketplace",
    desc: "vintage & new brands",
    bgImg: "/images/women_8.jpeg",
    height: "big",
  },
  {
    title: "accessories",
    bgImg: "/images/women_9.jpeg",
    height: "big",
  },
  {
    title: "topshop",
    bgColor: "bg-orange-600",
    height: "big",
    top: true,
  },
  {
    title: "face + body",
    bgImg: "/images/women_10.jpeg",
    height: "big",
  },
  {
    title: "brands",
    bgImg: "/images/women_11.jpeg",
    height: "big",
  },
  {
    title: "outlets",
    bgImg: "/images/women_12.jpeg",
    desc: "up to 70% off",
    height: "big",
  },
];

export const menMobileMenuData: MobileMenuProps[] = [
  {
    title: "home",
    bgImg: "/images/men_1.jpeg",
    height: "small",
  },
  {
    title: "up to 50% off fab fits",
    color: true,
    bgColor: "bg-purple-500",
    height: "big",
  },
  {
    title: "new in",
    bgImg: "/images/men_2.jpeg",
    height: "big",
  },
  {
    title: "clothing",
    bgImg: "/images/men_3.jpeg",
    height: "big",
  },
  {
    title: "dresses",
    bgImg: "/images/men_4.jpeg",
    height: "big",
  },
  {
    title: "shoes",
    bgImg: "/images/men_5.jpeg",
    height: "big",
  },
  {
    title: "trainers",
    bgImg: "/images/men_6.jpeg",
    height: "big",
  },
  {
    title: "sportwears",
    bgImg: "/images/men_7.jpeg",
    height: "big",
  },
  {
    title: "marketplace",
    desc: "vintage & new brands",
    bgImg: "/images/men_8.jpeg",
    height: "big",
  },
  {
    title: "accessories",
    bgImg: "/images/men_9.jpeg",
    height: "big",
  },
  {
    title: "topshop",
    bgColor: "bg-orange-600",
    height: "big",
    top: true,
  },
  {
    title: "face + body",
    bgImg: "/images/women_10.jpeg",
    height: "big",
  },
  {
    title: "brands",
    bgImg: "/images/men_10.jpeg",
    height: "big",
  },
  {
    title: "outlets",
    bgImg: "/images/men_11.jpeg",
    desc: "up to 70% off",
    height: "big",
  },
];
