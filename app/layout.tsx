import "./globals.css";
import localFont from "@next/font/local";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ASOS | Online Shopping For Latest Clothes and Fashion',
  description: 'ASOS | Online Shopping For Latest Clothes and Fashion | Fashion | Clothes | Trending Fashion | Dress | Jacket | Jeans',
};

const FuturaPt = localFont({
  src: [
    {
      path: "./fonts/futura-pt/FuturaCyrillicLight.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/futura-pt/FuturaCyrillicBook.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/futura-pt/FuturaCyrillicMedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/futura-pt/FuturaCyrillicDemi.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/futura-pt/FuturaCyrillicBold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/futura-pt/FuturaCyrillicExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/futura-pt/FuturaCyrillicHeavy.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--futura-pt",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${FuturaPt.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />

        <main className="w-full flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
