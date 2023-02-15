"use client";

import React from "react";
import Link from "next/link";
import Transition from "./Transition";
import Image from "next/image";
import { userOption } from "./assets/data";

interface Props {
  enter: boolean;
  setShowMenu: (value: boolean) => void;
}

interface AUthProps {
  title?: string;
  href?: string;
  divider?: boolean;
}

const auth: AUthProps[] = [
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

const UserDropdown: React.FC<Props> = ({ enter, setShowMenu }) => {
  return (
    <Transition show={enter} name="translate-down">
      <div className="absolute top-12 hidden lg:block shadow-lg min-w-[22rem] right-[-6rem] rounded-lg bg-white min-h-64 text-black">
        <div className="flex justify-between bg-text-100 p-4">
          <div className="">
            {auth.map(({ title, href, divider }, idx) =>
              divider ? (
                <span key={idx} className="px-2">
                  |
                </span>
              ) : (
                <Link
                  key={idx}
                  href={{ pathname: href }}
                  className="text-text-400 text-lg underline border-text-400 hover:text-blue-500"
                >
                  {title}
                </Link>
              )
            )}
          </div>
          <span
            className="text-text-400 text-2xl cursor-pointer hover:text-blue-500"
            onClick={() => setShowMenu(false)}
          >
            &#10005;
          </span>
        </div>
        <div className="flex flex-col gap-3 py-2">
          {userOption.map(({ title, href, icon }) => (
            <Link
              key={title}
              href={href}
              className="flex items-center px-4 py-2 hover:bg-text-50"
            >
              <span className="relative w-6 h-6 cursor-pointer mr-3">
                <Image src={icon} alt="user" fill={true} sizes="24px" />
              </span>
              <p className="text-lg">{title}</p>
            </Link>
          ))}
        </div>
      </div>
    </Transition>
  );
};

export default UserDropdown;
