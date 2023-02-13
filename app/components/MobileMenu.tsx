"use client";

import React from "react";
import Transition from "./Transition";

interface Props {
  show: boolean;
  close: () => void;
}

const MobileMenu: React.FC<Props> = ({ show, close }) => {
  return (
    <Transition name="move-in" show={show}>
      <div className="fixed top-0 w-screen h-screen bg-[#27252526] z-50 lg:hidden">
        <div className="bg-white max-w-[320px] h-screen relative">
          <span
            className="absolute top-0 right-[-53px] text-white bg-primary font-extrabold text-4xl px-4 py-2"
            onClick={close}
          >
            &#10005;
          </span>
        </div>
      </div>
    </Transition>
  );
};

export default MobileMenu;
