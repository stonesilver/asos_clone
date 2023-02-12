"use client";

import { ChangeEvent, ReactNode, forwardRef } from "react";

interface Props {
  value: string;
  type?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: () => void;
  placeholder?: string;
  customStyles?: string;
  rightIcon?: ReactNode;
}

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, Props>(
  (
    {
      value,
      type = "text",
      handleChange,
      handleFocus,
      placeholder,
      customStyles,
      rightIcon,
    },
    ref
  ) => (
    <div className="relative flex items-center">
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        className={`w-full h-[40px] px-4 text-black text-lg placeholder:text-text-400 ${customStyles}`}
      />
      <div className="absolute right-0 mr-4">{rightIcon}</div>
    </div>
  )
);

export default Input;
