"use client";

import { ChangeEvent, ReactNode, forwardRef } from "react";

type Props = {
  value: string;
  type?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: () => void;
  placeholder?: string;
  customStyles?: string;
  rightIcon?: ReactNode;
  name?: string;
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
      rightIcon, name
    },
    ref
  ) => (
    <div className="relative flex items-center">
      <input
        ref={ref}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        className={`w-full min-h-full px-4 text-black text-lg outline-none placeholder:text-text-400 ${customStyles}`}
      />
      <div className="absolute right-0 mr-4 z-30">{rightIcon}</div>
    </div>
  )
);

export default Input;
