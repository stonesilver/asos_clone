import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { desktopMenuData, womenMobileMenuData } from "../assets/data";

const DesktopMenu: React.FC = () => {
  const [show, setShow] = React.useState<boolean>(false);

  const onMouseEnter = () => {
    setShow(true);
  };

  const onMouseLeave = () => {
    setShow(false);
  };

  return (
    <div className="hidden h-[50px] bg-text-500 lg:block">
      <Container>
        <ul className="relative flex h-full">
          {desktopMenuData.map(({ title }) => (
            <li
              key={title}
              className="flex h-full select-none items-center justify-center px-4 text-white transition-all hover:bg-white hover:text-black"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {title}
            </li>
          ))}

          {show && (
            <div
              className="absolute left-0 top-[50px] z-40 grid h-[400px] w-full grid-cols-4 bg-white py-5 px-6 shadow-lg"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div className="text_links border-r">
                <h3 className="w-fit border-b border-black font-semibold uppercase tracking-widest text-black">
                  new products
                </h3>
                <ul className="mt-4">
                  {[
                    "View all",
                    "Clothing",
                    "Shoes",
                    "Coats & Jackets",
                    "Hoodies",
                    "T-Shirts & Vests",
                    "Sportswear",
                    "Accessories",
                    "Face + Body",
                  ].map((itm) => (
                    <li
                      key={itm}
                      className="max-w-fit py-2 hover:text-blue-500"
                    >
                      <Link href="/">{itm}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="small_avatar border-r px-4">
                <h3 className="w-fit border-b border-black font-semibold uppercase tracking-widest text-black">
                  shop by brands
                </h3>
                <ul className="mt-4">
                  <Link href="/" className="group">
                    <li className="flex items-center">
                      <div className="h-fit w-fit rounded-full border border-text-100 p-[2px] group-hover:border-blue-500">
                        <span className="relative block h-[40px] w-[40px] overflow-hidden rounded-full group-hover:border-blue-500">
                          <Image
                            src="/images/nav-1.webp"
                            fill={true}
                            sizes="40px"
                            alt="navigation"
                          />
                        </span>
                      </div>
                      <span className="ml-3 flex h-[40px] max-w-max items-center border-b px-1 group-hover:text-blue-500">
                        Ski & Snowboard
                      </span>
                    </li>
                  </Link>
                </ul>
              </div>

              <div className="big_avatar border-r px-4">
                <h3 className="w-fit border-b border-black font-semibold uppercase tracking-widest text-black">
                  shop by body fit
                </h3>
                <div className="mt-4 flex flex-wrap gap-y-6">
                  {[
                    "ASOS Curve & Plus size",
                    "Maternity",
                    "Petite",
                    "Tall",
                  ].map((itm) => (
                    <Link href="/" key={itm} className="group flex-[50%]">
                      <div className="mx-auto h-fit w-fit rounded-full border border-text-100 p-[2px] group-hover:border-blue-500">
                        <span className="relative mx-auto block h-[78px] w-[78px] overflow-hidden rounded-full border-text-200 group-hover:border-blue-500">
                          <Image
                            src="/images/mw_gbl.webp"
                            fill={true}
                            alt="big bold woman"
                            sizes="78px"
                          />
                        </span>
                      </div>
                      <p className="mx-auto mt-1 w-4/5 text-center group-hover:text-blue-500">
                        {itm}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className=" px-4">
                <ul className="space-y-3">
                  <li className="big_thumbnail h-32 max-w-[289px] flex-1 border p-[2px] hover:border-blue-500">
                    <Link
                      href="/"
                      className="relative block h-full w-full after:absolute after:top-0 after:h-full after:w-full after:bg-[linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,97.3%,.8))] after:content-['']"
                    >
                      <Image
                        src="/images/nyx.webp"
                        alt="nyx"
                        fill={true}
                        sizes="auto"
                      />
                    </Link>
                  </li>

                  <li className="big_thumbnail_text h-28 max-w-[289px] flex-1 border p-[2px] hover:border-blue-500">
                    <Link
                      href="/"
                      className="relative flex h-full w-full items-center bg-gray-200 text-base font-semibold text-black after:absolute after:top-0 after:h-full after:w-full after:bg-[linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,97.3%,.8))] after:content-['']"
                    >
                      <p className="px-2">BLACK TRAINERS</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </ul>
      </Container>
    </div>
  );
};

export default DesktopMenu;
