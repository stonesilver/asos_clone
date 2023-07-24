import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </>
  );
}
