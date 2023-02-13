import React from "react";
import Link from "next/link";
import { footerLinks } from "./assets/data";
import { FooterChildrenProps } from "./assets/data.types";

const Footer: React.FC = () => {
  return (
    <div className="w-full">
      <div className="h-[61px] bg-white w-full hidden md:block px-4 md:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto"></div>
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

      <div className="bg-text-100 px-4 md:px-8 lg:px-16">
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
