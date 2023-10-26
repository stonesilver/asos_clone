import {
  FooterProps,
  MobileMenuProps,
  // UserProps,
  AUthProps,
  DesktopMenuProps,
} from "../types/data.types";
// import { UserIcon, OrdersIcon, ReturnInfoIcon, ContactIcon } from '@/assets/icons';

export const footerLinks: FooterProps[] = [
  {
    category: "help & information",
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
    category: "about ASOS",
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
    category: "more from ASOS",
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
    category: "shopping from:",
    children: [],
    location: true,
  },
];

// export const userOption: UserProps[] = [
//   {
//     title: "My Account",
//     href: "/",
//     icon: <UserIcon className="dark-icon w-6 h-6" />,
//   },
//   {
//     title: "My Orders",
//     href: "/",
//     icon: <OrdersIcon className="dark-icon w-6 h-6" />,
//   },
//   {
//     title: "Returns Information",
//     href: "/",
//     icon: <ReturnInfoIcon className="dark-icon w-6 h-6" />,
//   },
//   {
//     title: "Contact Preferences",
//     href: "/",
//     icon: <ContactIcon className="dark-icon w-6 h-6" />,
//   },
// ];

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

export const userAuth: AUthProps[] = [
  {
    title: "Sign in",
    href: "/",
  },
  {
    divider: true,
  },
  {
    title: "Join",
    href: "/",
  },
];

export const desktopMenuData: DesktopMenuProps[] = [
  {
    title: "New In",
    children: [
      {
        title: "NEW PRODUCTS",
        type: "text_links",
        li: [
          { label: "View all", href: "/" },
          { label: "Clothing", href: "/" },
          { label: "Shoes", href: "/" },
          { label: "Coats & Jackets", href: "/" },
          { label: "Hoodies", href: "/" },
          { label: "T-Shirts & Vests", href: "/" },
          { label: "Sportswear", href: "/" },
          { label: "Accessories", href: "/" },
          { label: "Face + Body", href: "/" },
        ],
      },
      {
        title: "BRAND DROPS",
        type: "small_avatar",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "ASOS DESIGN",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Adidas",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "British Brands",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "New Balance",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "New York",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "The North Face",
            href: "/",
          },
        ],
      },
      {
        title: "TOP SAVED",
        type: "big_avatar",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "clothings",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "brands",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "sportswears",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "trainers",
            href: "/",
          },
        ],
      },
      {
        title: "NEW EDITS",
        type: "big_thumbnail",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "BEST-DRESSED GUESTS",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "RECLAIMED VINTAGE",
            href: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Clothings",
    children: [
      {
        title: "SHOP BY PRODUCT",
        type: "text_links",
        li: [
          { label: "Bestsellers", href: "/" },
          { label: "Top Saved Styles", href: "/" },
          { label: "New in", href: "/" },
          { label: "T-Shirts & Vests", href: "/" },
          { label: "Shirts", href: "/" },
          { label: "Shorts", href: "/" },
          { label: "Trousers & Chinos", href: "/" },
          { label: "Cargo Trousers", href: "/" },
          { label: "Co-ords", href: "/" },
          { label: "Designer", href: "/" },
          { label: "Hoodies & Sweatshirts", href: "/" },
          { label: "Jackets & Coats", href: "/" },
        ],
      },
      {
        title: "",
        type: "text_links",
        li: [
          { label: "Jeans", href: "/" },
          { label: "Joggers", href: "/" },
          { label: "Jumpers & Cardigans", href: "/" },
          { label: "Loungewear", href: "/" },
          { label: "Multipacks", href: "/" },
          { label: "Polo shirts", href: "/" },
          { label: "Socks", href: "/" },
          { label: "Sportswear", href: "/" },
          { label: "Suits & Tailoring", href: "/" },
          { label: "Swimwear", href: "/" },
          { label: "Tracksuits", href: "/" },
          { label: "Underwear", href: "/" },
        ],
      },
      {
        title: "SHOP BESTSELLERS",
        type: "small_avatar",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "View All",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Autumn Styles",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Jeans & Trousers",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Jackets & Coats",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Formal Wears",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Designer Brands",
            href: "/",
          },
        ],
      },
      {
        title: "SHOP BY EDIT",
        type: "small_avatar",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "Halloween",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Party Wears",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "ASOS Basics",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Occasion Wears",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Autumn Styles",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Festivals",
            href: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Shoes",
    children: [
      {
        title: "SHOP BY PRODUCT",
        type: "text_links",
        li: [
          { label: "Bestsellers", href: "/" },
          { label: "View All", href: "/" },
          { label: "New In", href: "/" },
          { label: "Trainers", href: "/" },
          { label: "Boats", href: "/" },
          { label: "Loafers", href: "/" },
          { label: "Running Trainers", href: "/" },
          { label: "Sandals", href: "/" },
          { label: "Shoes", href: "/" },
          { label: "Slipper & Flip flops", href: "/" },
          { label: "Slipper", href: "/" },
          { label: "Socks", href: "/" },
        ],
      },
      {
        title: "SHOP BY BRAND",
        type: "small_avatar",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "ASOS DESIGN",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "New Balance",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "On Running",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Adidas Originals",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Asics",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Dr Martens",
            href: "/",
          },
        ],
      },
      {
        title: "SHOP BY TRAINER STYLE",
        type: "text_links",
        li: [
          { label: "Adidas Originals Campus", href: "/" },
          { label: "Adidas Originals Gazelle", href: "/" },
          { label: "Adidas Originals Stan Smith", href: "/" },
          { label: "New Balance 550", href: "/" },
          { label: "New Balance 530", href: "/" },
          { label: "New Balance 327", href: "/" },
          { label: "New Balance 574", href: "/" },
          { label: "ON Cloudnova", href: "/" },
          { label: "ON Cloudmonster", href: "/" },
          { label: "Vans Old Skool", href: "/" },
          { label: "Reebok Classic", href: "/" },
        ],
      },
      {
        title: "",
        type: "big_thumbnail_text",
        li: [
          {
            text: "BLACK TRAINERS",
            href: "/",
          },
          {
            text: "CHUNKY SHOES",
            href: "/",
          },
          {
            text: "OCCASION SHOES",
            href: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Accessories",
    children: [
      {
        title: "SHOP BY PRODUCT",
        type: "text_links",
        li: [
          { label: "View All", href: "/" },
          { label: "New In", href: "/" },
          { label: "Sunglasses", href: "/" },
          { label: "Caps & Hats", href: "/" },
          { label: "Belts", href: "/" },
          { label: "Ties", href: "/" },
          { label: "Watches", href: "/" },
          { label: "Beanies", href: "/" },
          { label: "Gifts", href: "/" },
          { label: "Gloves", href: "/" },
          { label: "Scarves", href: "/" },
          { label: "Socks", href: "/" },
        ],
      },
      {
        title: "SHOP BY JEWELLERY",
        type: "small_avatar",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "View All",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Necklaces",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Rings",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Bracelets",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Earrings",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Cufflinks",
            href: "/",
          },
        ],
      },
      {
        title: "SHOP BY BAGS",
        type: "small_avatar",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "View All",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Backpacks",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Duffle Bags",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Bum Bags",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Shopper Bags",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Wallets",
            href: "/",
          },
        ],
      },
      {
        title: "",
        type: "big_thumbnail",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "SMART ACCESSORIES",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "AUTUMN ACCESSORIES",
            href: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Sportswear",
    children: [
      {
        title: "SHOP BY PRODUCT",
        type: "text_links",
        li: [
          { label: "View All", href: "/" },
          { label: "New In", href: "/" },
          { label: "Trainers", href: "/" },
          { label: "Shorts", href: "/" },
          { label: "Tops", href: "/" },
          { label: "Accessories", href: "/" },
          { label: "Hoodies & Sweatshirts", href: "/" },
          { label: "Jacket", href: "/" },
          { label: "Joggers", href: "/" },
          { label: "Trousers & Tights", href: "/" },
        ],
      },
      {
        title: "SHOP BY ACTIVITY",
        type: "small_avatar",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "Lifestyle",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Gym",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Running",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Outdoors",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Footballs",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Ski & Snowboard",
            href: "/",
          },
        ],
      },
      {
        title: "SHOP BY BRAND",
        type: "small_avatar",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "Adidas",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "ASOS 4505",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "New Balance",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "On Running",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Puma",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "The North Face",
            href: "/",
          },
        ],
      },
      {
        title: "",
        type: "big_thumbnail",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "RUNNING",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "NEW BALANCE",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "OUTDOORS",
            href: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Autumn",
    children: [
      {
        title: "SHOP BY PRODUCT",
        type: "text_links",
        li: [
          { label: "View All", href: "/" },
          { label: "Bestsellers", href: "/" },
          { label: "Halloween", href: "/" },
          { label: "Jumpers & Cardigans", href: "/" },
          { label: "Hoodies & Sweatshirts", href: "/" },
          { label: "Trousers & Chinos", href: "/" },
          { label: "Jeans", href: "/" },
          { label: "Lounge wear", href: "/" },
          { label: "Fleeces", href: "/" },
          { label: "Gilets", href: "/" },
          { label: "Boots", href: "/" },
          { label: "Scarves", href: "/" },
          { label: "Gloves", href: "/" },
          { label: "Beanies", href: "/" },
        ],
      },
      {
        title: "SHOP BY EDIT",
        type: "big_avatar",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "Essentials",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Smarts",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Oversized",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Student Styles",
            href: "/",
          },
        ],
      },
      {
        title: "SHOP JACKETS",
        type: "small_avatar",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "View All",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Puffer Jackets",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Shackets",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Leather Jackets",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Denim Jackets",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Rain Jackets",
            href: "/",
          },
        ],
      },
      {
        title: "SHOP COATS",
        type: "small_avatar",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "View All",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Trench Coats",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Overcoats",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Parkas",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Smarts Coats",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Puff Coats",
            href: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Gifting",
    children: [
      {
        title: "SHOP BY EDIT",
        type: "text_links",
        li: [
          { label: "Gifts for Him", href: "/" },
          { label: "Gifts for Her", href: "/" },
          { label: "Face + Body", href: "/" },
          { label: "Advent Calendar", href: "/" },
          { label: "Pyjamas", href: "/" },
          { label: "Underwear", href: "/" },
          { label: "Fragrances", href: "/" },
          { label: "Stocking Fillers", href: "/" },
          { label: "Slippers", href: "/" },
          { label: "T-Shirts", href: "/" },
          { label: "Bestselling Gifts", href: "/" },
        ],
      },
      {
        title: "SHOP BY PRICE POINT",
        type: "big_avatar",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "Luxury Gifts",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Secret Santa",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Stocking Fillers",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Gift Vouchers",
            href: "/",
          },
        ],
      },
      {
        title: "",
        type: "big_thumbnail",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "",
            href: "/",
          },
        ],
      },
      {
        title: "",
        type: "big_thumbnail",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "",
            href: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Brands",
    children: [
      {
        title: "TOP BRANDS",
        type: "text_links",
        li: [
          { label: "A-Z of brands", href: "/" },
          { label: "adidas", href: "/" },
          { label: "Calvin Klein", href: "/" },
          { label: "Carhartt WIP", href: "/" },
          { label: "New Balance", href: "/" },
          { label: "New Era", href: "/" },
          { label: "On running", href: "/" },
          { label: "Polo Ralph Lauren", href: "/" },
          { label: "Puma", href: "/" },
          { label: "The North Face", href: "/" },
          { label: "Jack & Jones", href: "/" },
        ],
      },
      {
        title: "ASOS BRANDS",
        type: "small_avatar",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "View All",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "ASOS DESIGN",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "ASOS 4505",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Topman",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "COLLUSION",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Reclaimed Vintage",
            href: "/",
          },
        ],
      },
      {
        title: "DISCOVER BRANDS",
        type: "small_avatar",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "New In",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Outdoors",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Trainers",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Emerging Brands",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "Designer Brands",
            href: "/",
          },
        ],
      },
      {
        title: "FEATURED",
        type: "big_thumbnail",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "PLUS SIZE BRANDS",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "ASOS BRANDS",
            href: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Topman",
    children: [
      {
        title: "SHOP BY PRODUCT",
        type: "text_links",
        li: [
          { label: "View all", href: "/" },
          { label: "New in", href: "/" },
          { label: "Hoodies & Sweats", href: "/" },
          { label: "Jackets & Coats", href: "/" },
          { label: "Jeans", href: "/" },
          { label: "Joggers", href: "/" },
          { label: "Jumpers & Cardigans", href: "/" },
          { label: "Multipacks", href: "/" },
        ],
      },
      {
        title: "",
        type: "text_links",
        li: [
          { label: "Shirts", href: "/" },
          { label: "Shorts", href: "/" },
          { label: "Suits & Tailoring", href: "/" },
          { label: "Swimwear", href: "/" },
          { label: "T-Shirts & Vests", href: "/" },
          { label: "Trousers & Chinos", href: "/" },
          { label: "Underwear & Loungewear", href: "/" },
        ],
      },
      {
        title: "",
        type: "big_thumbnail",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "DISCOVER TOPMAN",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "KNITWEAR",
            href: "/",
          },
        ],
      },
      {
        title: "",
        type: "big_thumbnail",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "JACKETS & COATS",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "TROUSERS",
            href: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Marketplace",
    children: [
      {
        title: "",
        type: "big_thumbnail_desc",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "EXPLORE ASOS MARKETPLACE",
            desc: "Vintage boutiques and independent brands",
            href: "/",
          },
        ],
      },
      {
        title: "",
        type: "big_thumbnail_desc",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "T-SHIRTS",
            desc: "Vintage, branded & one-of-a-kind",
            href: "/",
          },
        ],
      },
      {
        title: "",
        type: "big_thumbnail_desc",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "TROUSERS & SHOES",
            desc: "Level-up your lower half in these styles",
            href: "/",
          },
        ],
      },
      {
        title: "",
        type: "big_thumbnail_desc",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "JACKETS",
            desc: "Vintage & new layers, incoming",
            href: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Outlet",
    children: [
      {
        title: "SHOP BY PRODUCT",
        type: "text_links",
        li: [
          { label: "View all", href: "/" },
          { label: "New in: Clothing", href: "/" },
          { label: "New in: Shoes & Accessories", href: "/" },
          { label: "Accessories", href: "/" },
          { label: "Activewear", href: "/" },
          { label: "Bags", href: "/" },
          { label: "Designer Brands", href: "/" },
          { label: "Gifts", href: "/" },
          { label: "Hoodies & Sweatshirts", href: "/" },
          { label: "Jackets & Coats", href: "/" },
          { label: "Jeans", href: "/" },
          { label: "Jewellery & Watches", href: "/" },
        ],
      },
      {
        title: "",
        type: "text_links",
        li: [
          { label: "Jumpers & Cardigans", href: "/" },
          { label: "Loungewear", href: "/" },
          { label: "Shirts", href: "/" },
          { label: "Shoes & Trainers", href: "/" },
          { label: "Shorts", href: "/" },
          { label: "Suits & Tailoring", href: "/" },
          { label: "Sunglasses", href: "/" },
          { label: "Swimwear", href: "/" },
          { label: "T-Shirts & Vests", href: "/" },
          { label: "Tracksuits", href: "/" },
          { label: "Trousers & Chinos", href: "/" },
          { label: "Underwear & Socks", href: "/" },
        ],
      },
      {
        title: "SHOP BY BRAND",
        type: "text_links",
        li: [
          { label: " adidas", href: "/" },
          { label: "Bolongaro Trevor", href: "/" },
          { label: "BOSS", href: "/" },
          { label: "Brave Soul", href: "/" },
          { label: "Calvin Klein", href: "/" },
          { label: "French Connection", href: "/" },
          { label: "Jack & Jones", href: "/" },
          { label: "Puma", href: "/" },
          { label: "Tommy Hilfiger", href: "/" },
          { label: "Vans", href: "/" },
          { label: "A-Z of brands", href: "/" },
        ],
      },
      {
        title: "",
        type: "big_thumbnail",
        li: [
          {
            avatar: "/images/nav-1.webp",
            label: "FURTHER REDUCTIONS: UP TO 70% OFF",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "AUTUMN EDIT",
            href: "/",
          },
          {
            avatar: "/images/nav-1.webp",
            label: "BEST OF OUTLETS",
            href: "/",
          },
        ],
      },
    ],
  },
];
