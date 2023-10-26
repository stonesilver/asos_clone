"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Input from "../Input";
import { useFormik } from "formik";
import Button from "../Button";
import { loginSchema } from "@/utils/yupSchema";

const nav = [
  {
    label: "JOIN",
    href: "/auth/sign-up",
  },
  {
    label: "SIGN IN",
    href: "/auth/sign-in",
  },
];

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const pathname = usePathname();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values, "logged in");
    },
    validationSchema: loginSchema,
  });

  return (
    <div className="flex flex-col items-center py-14 px-4">
      <h1 className="text-[65px] font-medium -tracking-[0.12em] text-primary">
        <Link href="\">asos</Link>
      </h1>
      <div className="mt-12 min-h-[40vh] w-full max-w-[650px] bg-white px-4">
        <div className="flex h-[50px] md:h-[70px]">
          {nav.map(({ label, href }) => (
            <Link
              key={label}
              replace
              href={href}
              className={`flex items-center justify-center text-sm font-semibold md:text-base ${
                pathname === href ? "border-blue-500" : "border-gray-200"
              } flex-1 border-b-2 last:border-l last:border-l-gray-100`}
            >
              {label}
            </Link>
          ))}
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="mx-auto mt-12 w-full space-y-6 md:max-w-[360px]"
        >
          <div>
            <label htmlFor="username" className="mb-3 block font-semibold">
              EMAIL ADDRESS:
            </label>
            <Input
              value={formik.values.username}
              name="username"
              type="email"
              customStyles="border border-black h-[51px]"
              handleChange={formik.handleChange}
            />
            <div className="text-xs text-red-500">{formik.errors.username}</div>
          </div>

          <div>
            <label htmlFor="password" className="mb-3 block font-semibold">
              PASSWORD:
            </label>
            <Input
              value={formik.values.password}
              name="password"
              type={showPassword ? "text" : "password"}
              customStyles="border border-black h-[51px]"
              handleChange={formik.handleChange}
              rightIcon={
                formik.values.password.length > 0 && (
                  <p
                    className="cursor-pointer text-xs font-semibold text-primary"
                    onClick={() => setShowPassword((prevS) => !prevS)}
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </p>
                )
              }
            />
            <div className="text-xs text-red-500">{formik.errors.password}</div>
          </div>

          <Button
            type="submit"
            variant="dark"
            className="h-[51px] w-full font-medium"
          >
            SIGN IN
          </Button>
        </form>

        <Link
          href="/auth/forgot-password"
          className="mx-auto mt-4 block w-fit text-center text-base font-normal text-primary hover:underline"
        >
          Forgot password?
        </Link>

        <p className="mt-8 text-center text-sm font-semibold tracking-wider text-primary md:text-base">
          OR SIGN IN WITH...
        </p>

        <div className="mb-8 mt-10 grid grid-cols-1  gap-4 md:mx-4 md:grid-cols-3">
          {["GOOGLE", "APPLE", "FACEBOOK"].map((itm) => (
            <button
              type="button"
              key={itm}
              className="h-[60px] border font-semibold"
            >
              {itm}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
