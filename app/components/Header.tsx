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
import UserDropdown from "./UserDropdown";

const Header: React.FC = () => {
  const [searchInput, setSearchInput] = React.useState<string>("");
  const [show, setShow] = React.useState<boolean>(false);
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

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

      <div className="bg-white hidden px-4 md:px-8 lg:px-16 lg:block">
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

      <nav className=" bg-primary px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center w-full text-white max-w-[1366px] mx-auto h-[50px] md:h-[60px]">
          <div className="flex items-center h-full">
            <img
              src="./icons/hamburger.svg"
              alt=""
              className="lg:hidden block mr-4"
            />

            <Link href="/" className="flex items-center h-full">
              <span className="text-2xl md:text-5xl md:pr-4 font-bold mt-[-5px] md:mt-[-10px]">
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
              customStyles="rounded-3xl z-90 h-[35px]"
            />
          </div>

          <div className="flex items-center">
            <SearchWhiteIcon className="w-10 h-10 mr-3 md:hidden" />
            <div className="relative flex justify-center">
              <UserIcon
                className="w-10 h-10 mr-3 cursor-pointer"
                onClick={() => setShowMenu(true)}
              />
              <UserDropdown enter={showMenu} setShowMenu={setShowMenu} />
            </div>
            <HeartIcon className="w-10 h-10 mr-3 cursor-pointer" />
            <CartIcon className="w-10 h-10 cursor-pointer" />
          </div>
        </div>
      </nav>

      <div className="w-full h-[50px] bg-[#ccff00] hidden md:block">
        <div className="max-w-[1400] h-full mx-auto flex justify-between items-center text-black text-lg font-semibold px-4 md:px-8 lg:px-16">
          <Link href="/" className="w-32 text-center border-2 border-black">
            Women
          </Link>
          <div className="flex-1 text-center text-base font-semibold">
            <p className="tracking-widest">UP TO 50% OFF YOUR FAVES</p>
            <p className="tracking-widest">LIKE SAVINGS! YOU'LL LOVE THIS</p>
          </div>
          <Link href="/" className="w-32 text-center border-2 border-black">
            Men
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
