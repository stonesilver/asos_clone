"use client";

import React, { useRef } from "react";
import Link from "next/link";
import BoxIcon from "../../public/icons/box.svg";
import QuestionIcon from "../../public/icons/question-circle.svg";
import ChatIcon from "../../public/icons/chat.svg";
import UserIcon from "../../public/icons/user.svg";
import { CSSTransition } from "react-transition-group";

interface Props {
  enter: boolean;
  setShowMenu: (value: boolean) => void;
}

const UserDropdown: React.FC<Props> = ({ enter, setShowMenu }) => {
  const ref = useRef(null);

  return (
    <CSSTransition
      in={enter}
      nodeRef={ref}
      timeout={300}
      classNames="translate-down"
      unmountOnExit
    >
      <div
        ref={ref}
        className="absolute top-14 shadow-lg min-w-[22rem] right-[-6rem] rounded-lg bg-white min-h-64 text-black"
      >
        <div className="flex justify-between bg-text-100 p-4">
          <div className="">
            <Link
              href=""
              className="text-text-400 text-lg underline pr-3 border-r border-text-400 hover:text-blue-500"
            >
              Sign In
            </Link>
            <Link
              href=""
              className="text-text-400 text-lg underline pl-3 hover:text-blue-500"
            >
              Join
            </Link>
          </div>
          <span
            className="text-text-400 text-2xl cursor-pointer hover:text-blue-500"
            onClick={() => setShowMenu(false)}
          >
            &#10005;
          </span>
        </div>
        <div className="flex flex-col gap-3 py-2">
          <Link
            href="/"
            className="flex items-center px-4 py-2 hover:bg-text-50"
          >
            <UserIcon className="w-8 h-8 mr-3 cursor-pointer dark-icon" />
            <p className="text-lg">My Account</p>
          </Link>

          <Link
            href="/"
            className="flex items-center px-4 py-2 hover:bg-text-50"
          >
            <BoxIcon className="w-8 h-8 mr-3 cursor-pointer dark-icon" />
            <p className="text-lg">My Orders</p>
          </Link>

          <Link
            href="/"
            className="flex items-center px-4 py-2 hover:bg-text-50"
          >
            <QuestionIcon className="w-8 h-8 mr-3 cursor-pointer dark-icon" />
            <p className="text-lg">Returns Information</p>
          </Link>

          <Link
            href="/"
            className="flex items-center px-4 py-2 hover:bg-text-50"
          >
            <ChatIcon className="w-8 h-8 mr-3 cursor-pointer dark-icon" />
            <p className="text-lg">Contact Preferences</p>
          </Link>
        </div>
      </div>
    </CSSTransition>
  );
};

export default UserDropdown;
