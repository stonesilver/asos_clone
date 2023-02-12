"use client";

import Link from "next/link";
import React from "react";
import Input from "./Input";
import { ChangeEvent } from "react";
import SearchIcon from "../../public/icons/search.svg";
import SearchWhiteIcon from "../../public/icons/search-white.svg";
import HeartIcon from "../../public/icons/heart.svg";
import CartIcon from "../../public/icons/cart.svg";
import UserIcon from "../../public/icons/user.svg";
import BoxIcon from "../../public/icons/box.svg";
import QuestionIcon from "../../public/icons/question-circle.svg";
import ChatIcon from "../../public/icons/chat.svg";

const Header: React.FC = () => {
  const [searchInput, setSearchInput] = React.useState<string>("");
  const [show, setShow] = React.useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleFocus = () => {
    setShow((prevS) => !prevS);
  };

  return (
    <header className="w-full sticky top-0 z-10">
      {show && (
        <div
          onClick={handleFocus}
          className="fixed top-0 bg-black opacity-50 w-screen h-screen"
        />
      )}

      <div className="bg-white hidden px-4 md:px-8 lg:block">
        <ul className="flex justify-end items-center h-30 w-full max-w-[1400px] mx-auto">
          <li className="px-4 border-l border-muted-200 h-full flex items-center">
            Marketplace
          </li>
          <li className="px-4 border-l border-muted-200 h-full flex items-center">
            Help & FAQs
          </li>
          <li className="px-4 border-l border-r border-muted-200 h-full flex items-center">
            <img
              src="https://assets.asosservices.com/storesa/images/flags/ng.png"
              alt="nigeria"
              className="w-5 h-5 rounded-full border"
            />
          </li>
        </ul>
      </div>

      <nav className=" bg-primary px-4 md:px-8">
        <div className="flex justify-between items-center w-full text-white max-w-[1366px] mx-auto h-[50px] md:h-[60px]">
          <div className="flex items-center h-full">
            <img
              src="./icons/hamburger.svg"
              alt=""
              className="lg:hidden block mr-4"
            />

            <Link href="/" className="flex items-center h-full">
              <span className="text-2xl md:text-5xl font-bold mt-[-5px] md:mt-[-10px]">
                asos
              </span>
            </Link>
            <div className="items-center hidden lg:flex h-full">
              <Link
                href="/women"
                className=" flex items-center justify-center text-xl text-bold w-[100px] h-full border-l border-text-500 hover:bg-text-500"
              >
                Women
              </Link>
              <Link
                href="/men"
                className=" flex items-center justify-center text-xl text-bold w-[100px] h-full border-x border-text-500 hover:bg-text-500"
              >
                Men
              </Link>
            </div>
          </div>

          <div className="flex-1 hidden md:block px-8">
            <Input
              value={searchInput}
              type="search"
              placeholder=" Search for items and brands"
              handleChange={handleChange}
              handleFocus={handleFocus}
              rightIcon={<SearchIcon className="w-8 h-8" />}
              customStyles="rounded-3xl z-90"
            />
          </div>

          <div className="flex items-center">
            <SearchWhiteIcon className="w-10 h-10 mr-3 md:hidden" />
            <div className="relative flex justify-center">
              <UserIcon className="w-10 h-10 mr-3 cursor-pointer" />
              <div className="absolute top-14 shadow-lg min-w-[22rem] right-[-6rem] rounded-lg bg-white min-h-64 text-black">
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
                  <span className="text-text-400 text-2xl cursor-pointer hover:text-blue-500">
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
            </div>
            <HeartIcon className="w-10 h-10 mr-3 cursor-pointer" />
            <CartIcon className="w-10 h-10 cursor-pointer" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
