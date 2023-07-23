"use client";

import React from "react";
import Link from "next/link";
import Transition from "./Transition";
import Image from "next/image";
import { userAuth } from "../assets/data";
import { UserIcon, OrdersIcon, ReturnInfoIcon, ContactIcon } from '@/assets/icons';

interface Props {
  enter: boolean;
  setShowMenu: (value: boolean) => void;
  passRef: any
}

const userOption = [
  {
    title: "My Account",
    href: "/",
    icon: <UserIcon className="dark-icon w-5 h-5" />,
  },
  {
    title: "My Orders",
    href: "/",
    icon: <OrdersIcon className="dark-icon w-5 h-5" />,
  },
  {
    title: "Returns Information",
    href: "/",
    icon: <ReturnInfoIcon className="dark-icon w-5 h-5" />,
  },
  {
    title: "Contact Preferences",
    href: "/",
    icon: <ContactIcon className="dark-icon w-5 h-5" />,
  },
];

const UserDropdown: React.FC<Props> = ({ enter, setShowMenu, passRef }) => {
  return (
    <Transition show={enter} name="fade-in">
      <div ref={passRef}
        className="absolute top-12 hidden lg:block shadow-lg min-w-[22rem] right-[-6rem] rounded-lg bg-white min-h-64 text-black z-40 overflow-hidden">
        <div className="flex justify-between bg-text-100 p-4 cursor-pointer">
          <div className="">
            {userAuth.map(({ title, href, divider }, idx) =>
              divider ? (
                <span key={idx} className="px-2">
                  |
                </span>
              ) : (
                <Link
                  key={idx}
                  href={{ pathname: href }}
                  className="text-text-400 text-base underline border-text-400 hover:text-blue-500"
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

        <ul className="flex flex-col">
          {userOption.map(({ title, href, icon }) => (
            <li key={title}>
              <Link
                href={href}
                className="flex items-center px-4 py-4 hover:bg-text-50"
              >
                <span className="relative w-6 h-6 cursor-pointer mr-3">
                  {icon}
                </span>
                <p className="text-sm text-primary">{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Transition>
  );
};

export default UserDropdown;
