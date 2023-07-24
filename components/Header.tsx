"use client";

import Link from "next/link";
import React from "react";
import Input from "./Input";
import { ChangeEvent } from "react";
import SearchIcon from "@/assets/icons/search.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import CartIcon from "@/assets/icons/cart.svg";
import UserIcon from "@/assets/icons/user.svg";
import UserDropdown from "./UserDropdown";
import MobileMenu from "./MobileMenu";
// import Container from "./Container";
// import { desktopMenuData } from "./assets/data";
import { usePathname } from "next/navigation";
import DesktopMenu from "./DesktopMenu";
import { useCloseOnOutsideClick } from "@/Hooks/useCloseOnOutsideClick";

const Header: React.FC = () => {
  const [searchInput, setSearchInput] = React.useState<string>("");
  const [show, setShow] = React.useState<boolean>(false);
  const [showMobileSearch, setShowMobileSearch] =
    React.useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const pathname = usePathname();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleFocus = () => {
    setShow((prevS) => !prevS);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const openMobileMenu = () => {
    setShowMobileMenu(true);
  };

  const { visible, setVisible, ref } = useCloseOnOutsideClick(false)

  return (
    <header className="sticky top-0 z-10 w-full">
      {show && (
        <div
          onClick={handleFocus}
          className="fixed top-0 h-screen min-h-screen w-screen bg-black opacity-50"
        />
      )}

      {showMobileSearch && (
        <div className="fixed h-screen w-screen bg-white p-4">
          <div className="mb-2 flex w-full justify-end">
            <button
              className="py-1 px-4 text-2xl font-extrabold"
              onClick={() => setShowMobileSearch(false)}
            >
              &#10005;
            </button>
          </div>
          <Input
            value={searchInput}
            type="text"
            placeholder=" Search for items and brands"
            handleChange={handleChange}
            rightIcon={<SearchIcon className="h-5 w-5" />}
            customStyles="rounded-3xl z-90 h-[35px] border border-amber-500"
          />
        </div>
      )}

      <MobileMenu show={showMobileMenu} close={closeMobileMenu} />

      <div className="hidden bg-white px-4 md:px-8 lg:block lg:px-16">
        <ul className="mx-auto flex h-30 w-full max-w-[1400px] items-center justify-end">
          <li className="border-muted-200 flex h-full items-center border-l px-4">
            Marketplace
          </li>
          <li className="border-muted-200 flex h-full items-center border-l px-4">
            Help & FAQs
          </li>
          <li className="border-muted-200 flex h-full items-center border-l border-r px-4">
            <img
              src="https://assets.asosservices.com/storesa/images/flags/ng.png"
              alt="nigeria"
              className="h-5 w-5 rounded-full border"
            />
          </li>
        </ul>
      </div>

      <nav className=" bg-primary px-4 md:px-8 lg:px-16">
        <div className="mx-auto flex h-[50px] w-full max-w-[1366px] items-center justify-between text-white md:h-[60px]">
          <div className="flex h-full items-center">
            <img
              src="./icons/hamburger.svg"
              alt=""
              className="mr-4 block lg:hidden"
              onClick={openMobileMenu}
            />

            <Link href="/" className="flex h-full items-center">
              <span className="mt-[-5px] text-3xl font-bold md:mt-[-10px] md:pr-4 md:text-5xl">
                asos
              </span>
            </Link>
            <div className="hidden h-full items-center lg:flex">
              <Link
                href="/women"
                className={`flex items-center justify-center ${pathname?.includes("/women") && "bg-text-500"
                  } text-bold h-full w-[100px] border-l border-text-500 text-xl hover:bg-text-500`}
              >
                Women
              </Link>
              <Link
                href="/men"
                className={`flex items-center justify-center ${pathname?.includes("/men") && "bg-text-500"
                  } text-bold h-full w-[100px] border-x border-text-500 text-xl hover:bg-text-500`}
              >
                Men
              </Link>
            </div>
          </div>

          <div className="hidden flex-1 px-8 md:block">
            <Input
              value={searchInput}
              type="text"
              placeholder=" Search for items and brands"
              handleChange={handleChange}
              handleFocus={handleFocus}
              rightIcon={<SearchIcon className="h-5 w-5" />}
              customStyles="rounded-3xl z-90 h-[35px]"
            />
          </div>

          <div className="flex space-x-5 md:space-x-7 items-center">
            <SearchIcon
              className="h-6 w-6 md:hidden white-icon"
              onClick={() => setShowMobileSearch(true)}
            />

            <div className="relative flex justify-center">
              <UserIcon
                className="h-6 w-6 cursor-pointer"
                onClick={() => setVisible(true)}
              />
              <UserDropdown enter={visible} setShowMenu={setVisible} passRef={ref} />
            </div>

            <Link href="/saved-items">
              <HeartIcon className="h-7 w-7 cursor-pointer" />
            </Link>

            <Link href="/my-cart">
              <CartIcon className="h-6 w-6 cursor-pointer" />
            </Link>
          </div>
        </div>
      </nav>

      <DesktopMenu />
    </header>
  );
};

export default Header;
