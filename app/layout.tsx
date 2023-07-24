import "./globals.css";
import localFont from "@next/font/local";
import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ASOS | Online Shopping For Latest Clothes and Fashion',
  description: 'ASOS | Online Shopping For Latest Clothes and Fashion | Fashion | Clothes | Trending Fashion | Dress | Jacket | Jeans',
};

const FuturaPt = localFont({
  src: [
    {
      path: "./_fonts/futura-pt/FuturaCyrillicLight.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./_fonts/futura-pt/FuturaCyrillicBook.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_fonts/futura-pt/FuturaCyrillicMedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./_fonts/futura-pt/FuturaCyrillicDemi.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./_fonts/futura-pt/FuturaCyrillicBold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./_fonts/futura-pt/FuturaCyrillicExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./_fonts/futura-pt/FuturaCyrillicHeavy.woff",
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
      <body className="min-h-screen flex">
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
