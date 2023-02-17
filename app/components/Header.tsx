"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import Input from "./Input";
import { ChangeEvent } from "react";
import SearchIcon from "../../public/icons/search.svg";
import HeartIcon from "../../public/icons/heart.svg";
import CartIcon from "../../public/icons/cart.svg";
import UserIcon from "../../public/icons/user.svg";
import UserDropdown from "./UserDropdown";
import MobileMenu from "./MobileMenu";
import Container from "./Container";
import { desktopMenuData } from "./assets/data";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [searchInput, setSearchInput] = React.useState<string>("");
  const [show, setShow] = React.useState<boolean>(false);
  const [showMobileSearch, setShowMobileSearch] =
    React.useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
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

  return (
    <header className="w-full sticky top-0 z-10">
      {show && (
        <div
          onClick={handleFocus}
          className="fixed top-0 bg-black opacity-50 w-screen h-screen"
        />
      )}

      {showMobileSearch && (
        <div className="fixed h-screen w-screen bg-white p-4">
          <div className="w-full flex justify-end mb-2">
            <button
              className="py-1 px-4 text-2xl font-extrabold"
              onClick={() => setShowMobileSearch(false)}
            >
              &#10005;
            </button>
          </div>
          <Input
            value={searchInput}
            type="search"
            placeholder=" Search for items and brands"
            handleChange={handleChange}
            // handleFocus={handleFocus}
            rightIcon={<SearchIcon className="w-5 h-5" />}
            customStyles="rounded-3xl z-90 h-[35px] border border-amber-500"
          />
        </div>
      )}

      <MobileMenu show={showMobileMenu} close={closeMobileMenu} />

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
              onClick={openMobileMenu}
            />

            <Link href="/" className="flex items-center h-full">
              <span className="text-3xl md:text-5xl md:pr-4 font-bold mt-[-5px] md:mt-[-10px]">
                asos
              </span>
            </Link>
            <div className="items-center hidden lg:flex h-full">
              <Link
                href="/women"
                className={`flex items-center justify-center ${pathname?.includes("/women") && "bg-text-500"
                  } text-xl text-bold w-[100px] h-full border-l border-text-500 hover:bg-text-500`}
              >
                Women
              </Link>
              <Link
                href="/men"
                className={`flex items-center justify-center ${pathname?.includes("/men") && "bg-text-500"
                  } text-xl text-bold w-[100px] h-full border-x border-text-500 hover:bg-text-500`}
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
              rightIcon={<SearchIcon className="w-5 h-5" />}
              customStyles="rounded-3xl z-90 h-[35px]"
            />
          </div>

          <div className="flex items-center">
            <SearchIcon
              className="w-6 h-6 mr-5 md:mr-7 md:hidden fill-current"
              onClick={() => setShowMobileSearch(true)}
            />

            <div className="relative flex justify-center">
              <UserIcon
                className="w-6 h-6 mr-5 md:mr-7 cursor-pointer"
                onClick={() => setShowMenu(true)}
              />
              <UserDropdown enter={showMenu} setShowMenu={setShowMenu} />
            </div>

            <HeartIcon className="w-7 h-7 mr-5 md:mr-7 cursor-pointer" />

            <CartIcon className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </nav>

      <div className="h-[50px] bg-text-500 hidden lg:block">
        <Container>
          <ul className="flex h-full relative">
            {desktopMenuData.map(({ title }) => (
              <li
                key={title}
                className="flex items-center peer justify-center transition-all px-4 select-none text-white h-full hover:bg-white hover:text-black"
              >
                {title}
              </li>
            ))}
            <div className="grid grid-cols-4 absolute left-0 top-[50px] peer-hover:opacity-100 opacity-0 h-[400px] w-full bg-white shadow-lg z-40 py-5 px-6">
              <div className="border-r">
                <h3 className="border-b border-black w-fit text-black font-semibold tracking-widest">
                  NEW PRODUCTS
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
                    <li key={itm} className="py-2">
                      <Link href="/">{itm}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-r px-4">
                <h3 className="border-b border-black w-fit text-black font-semibold tracking-widest">
                  SHOP BY BRANDS
                </h3>
                <ul className="mt-4">
                  <li className="flex items-center">
                    <span className="w-[40px] h-[40px] overflow-hidden relative rounded-full border border-text-100 hover:border-blue-300">
                      <Image
                        src="/images/nav-1.webp"
                        fill={true}
                        sizes="40px"
                        alt="navigation"
                      />
                    </span>
                    <span className="ml-3 h-[40px] border-b px-1 flex items-center">
                      Ski & Snowboard
                    </span>
                  </li>
                </ul>
              </div>
              <div className="border-r"></div>
              <div className="border-r"></div>
            </div>
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;
