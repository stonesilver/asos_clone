"use client";

import Image from "next/image";
import React from "react";
import {
  womenMobileMenuData,
  menMobileMenuData,
  userOption,
  userAuth,
  footerLinks,
} from "./assets/data";
import Link from "next/link";
import Transition from "./Transition";

interface Props {
  show: boolean;
  close: () => void;
}

const MobileMenu: React.FC<Props> = ({ show, close }) => {
  const [activeTab, setActiveTab] = React.useState<string>("women");
  const [footerMenu, setFooterMenu] = React.useState<string>("");

  const switchTab: (tab: string) => void = (tab) => {
    setActiveTab(tab);
  };

  const showFooterMenu: (title: string) => void = (title) => {
    if (title === footerMenu) return setFooterMenu("");
    setFooterMenu(title);
  };

  const activeData =
    activeTab === "women" ? womenMobileMenuData : menMobileMenuData;

  return (
    <Transition name="move-in" show={show}>
      <div className="fixed top-0 w-screen h-screen bg-[#27252526] z-50 lg:hidden">
        <div className="bg-white max-w-[320px] h-screen relative overflow-y-auto">
          <span
            className="fixed top-0 left-[320px] text-white z-50 bg-primary font-extrabold text-4xl px-4 py-2"
            onClick={close}
          >
            &#10005;
          </span>

          {/* Tab switch */}
          <div className="h-[50px] flex items-center text-text-200 sticky top-0 bg-white">
            {["women", "men"].map((itm) => (
              <button
                key={itm}
                className={`flex-1 text-lg tracking-wider font-semibold h-full uppercase ${
                  activeTab === itm
                    ? "border-b-2 border-black text-black"
                    : "border-b text-text-400"
                }`}
                onClick={() => switchTab(itm)}
              >
                {itm}
              </button>
            ))}
          </div>

          {/* content */}
          <ul className="p-4">
            {activeData.map(
              ({ title, desc, bgColor, bgImg, height, color, top }) => (
                <li
                  key={title}
                  className={`${height === "big" ? "h-[96px]" : "h-14"} ${
                    top ? "text-center" : "flex flex-col justify-center"
                  } px-4  ${
                    bgImg
                      ? "bg-text-100 bg-contain bg-right bg-no-repeat"
                      : bgColor
                  } mb-4`}
                  style={{ backgroundImage: bgImg && `url('${bgImg}')` }}
                >
                  <span
                    className={`${
                      top ? "text-6xl" : "text-lg"
                    } font-semibold tracking-wider uppercase ${
                      color ? "text-white" : "text-black"
                    } w-1/2`}
                  >
                    {title}
                  </span>
                  {desc && (
                    <span className="uppercase text-xl font-light tracking-wider w-1/2">
                      {desc}
                    </span>
                  )}
                </li>
              )
            )}
            <li className="flex items-stretch">
              <span className="flex-1 border mr-4 px-2">
                <img
                  src="/images/women_13.webp"
                  alt=""
                  className="object-contain"
                />

                <p className="uppercase text-sm font-semibold text-center tracking-wider">
                  gift vouchers
                </p>
              </span>
              <span className="flex-1 border px-2">
                <img
                  src="/images/women_14.webp"
                  alt=""
                  className="object-contain"
                />

                <p className="uppercase text-sm font-semibold text-center tracking-wider">
                  download the app
                </p>
              </span>
            </li>
          </ul>

          <div className="bg-text-100 border">
            <div className="bg-white h-[60px] mt-6 flex items-center justify-evenly">
              {[
                "/icons/facebook.svg",
                "/icons/instagram.svg",
                "/icons/snapchat.svg",
              ].map((social, idx) => (
                <span key={idx} className="relative w-[34px] h-[34px]">
                  <Image src={social} alt="social" fill={true} sizes="34px" />
                </span>
              ))}
            </div>

            <div className="mt-6">
              <ul className="flex items-center px-4">
                {userAuth.map(({ title, href, divider }, idx) =>
                  divider ? (
                    <li key={idx} className="mx-2">
                      |
                    </li>
                  ) : (
                    <li key={idx} className="underline text-xl">
                      <Link href={{ pathname: href }}>{title}</Link>
                    </li>
                  )
                )}
              </ul>

              <div className="mt-6 bg-white px-4 py-3">
                {userOption.map(({ title, href, icon }) => (
                  <Link
                    key={title}
                    href={{ pathname: href }}
                    className="flex items-center py-3 hover:bg-text-50"
                  >
                    <span className="relative w-6 h-6 cursor-pointer mr-3">
                      <Image src={icon} alt="user" fill={true} sizes="24px" />
                    </span>
                    <p className="text-lg">{title}</p>
                  </Link>
                ))}
              </div>
            </div>

            <ul className="">
              {footerLinks.slice(0, 3).map(({ category, children }) => (
                <li key={category} className="text-base">
                  <div className="flex justify-between items-center px-3 py-2  border-b border-text-200">
                    <span className="text-text-500 font-medium">
                      {category}
                    </span>
                    <button
                      className="text-2xl w-6"
                      onClick={() => showFooterMenu(category)}
                    >
                      {footerMenu === category ? "-" : "+"}
                    </button>
                  </div>
                  <ul
                    className={`px-3  ${
                      footerMenu === category ? "max-h-[700px]" : "max-h-0"
                    } transition-all overflow-hidden`}
                  >
                    {children.map(({ title, href }) => (
                      <li key={title} className="py-2 text-text-300">
                        <Link href={{ pathname: href }}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <div className="flex items-center text-black px-3 py-4">
                <span className="flex items-center text-lg text-text-300">
                  You're in{" "}
                  <img
                    src="https://assets.asosservices.com/storesa/images/flags/ng.png"
                    alt="nigeria"
                    className="w-5 h-5 rounded-full border ml-1"
                  />
                </span>{" "}
                <span className="px-2">|</span>
                <span className="text-text-400 font-semibold text-lg hover:text-blue-500 cursor-pointer">
                  Change
                </span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default MobileMenu;
