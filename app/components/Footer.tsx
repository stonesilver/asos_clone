import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  footerLinks,
  footerPayments,
  footerSocialHandles,
} from "./assets/data";
import { FooterChildrenProps } from "./assets/data.types";

const Footer: React.FC = () => {
  return (
    <div className="w-full">
      <div className="h-[61px] bg-white w-full hidden md:block px-4 md:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto flex items-center justify-center h-full">
          <div className="flex items-center h-full">
            {footerSocialHandles.map((soc) => (
              <span
                key={soc}
                className="relative w-[34px] h-[34px] mr-12 last:mr-0 cursor-pointer hover:scale-105"
              >
                <Image
                  src={soc}
                  fill={true}
                  alt={soc.replace(".png", "")}
                  sizes="34px"
                />
              </span>
            ))}
          </div>
          <span className="mx-8">|</span>
          <div className="flex items-center">
            {footerPayments.map((pay) => (
              <span key={pay} className="relative w-8 h-5 mr-12 last:mr-0">
                <Image
                  key={pay}
                  src={pay}
                  fill={true}
                  alt={pay.replace(".webp", "")}
                  sizes="32px"
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-text-50 px-4 md:px-8 lg:px-16 hidden md:block">
        <div className="flex max-w-[1400px] mx-auto py-8 min-h-64">
          {footerLinks.map(({ category, children, location }) => (
            <div className="flex-1" key={category}>
              <h4 className="text-text-400 font-semibold text-lg">
                {category}
              </h4>
              <div className="mt-5">
                {children.map(({ title, href }: FooterChildrenProps) => (
                  <>
                    <Link
                      href={href}
                      className="block text-base mt-3 hover:text-blue-500"
                    >
                      {title}
                    </Link>
                  </>
                ))}

                {location && (
                  <div className="flex items-center text-black">
                    <span className="flex items-center">
                      You're in{" "}
                      <img
                        src="https://assets.asosservices.com/storesa/images/flags/ng.png"
                        alt="nigeria"
                        className="w-5 h-5 rounded-full border ml-1"
                      />
                    </span>{" "}
                    |
                    <span className="text-text-400 font-semibold text-lg hover:text-blue-500 cursor-pointer">
                      Change
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-text-200 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto h-[50px] flex items-center justify-between">
          <span className="text-sm">
            &#169; {new Date().getFullYear()} ASOS
          </span>
          <div className="flex text-sm font-medium">
            <span className="border-r border-text-400 pr-2">
              Privacy & Cookies
            </span>
            <span className="md:pr-2 pl-2 ">Ts&Cs</span>
            <span className="border-l border-text-400 pl-2 hidden md:block">
              Accessibility
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
