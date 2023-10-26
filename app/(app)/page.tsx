import Link from "next/link";
import Container from "@/components/Container";
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <div className="hidden h-[50px] w-full bg-[#9447ff] md:block">
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-4 text-lg font-semibold text-white md:px-8 lg:px-16">
          <Link href="/" className="w-28 border-2 border-white text-center">
            Women
          </Link>

          <div className="flex-1 text-center text-base font-semibold">
            <p className="tracking-widest">UP TO 50% OFF YOUR FAVES</p>
            <p className="tracking-widest">LIKE SAVINGS! YOU'LL LOVE THIS</p>
          </div>

          <Link href="/" className="w-28 border-2 border-white text-center">
            Men
          </Link>
        </div>
      </div>
      <Container>
        <div className="item-center relative flex h-full w-full flex-col md:pt-12">
          <div className="relative bottom-0 left-0 flex h-[74px] w-full flex-col items-center justify-around overflow-x-hidden border-t border-white bg-primary text-white md:absolute md:h-[54px] md:flex-row md:border-t-0">
            <div className="move-one">
              <p className="text-base font-bold tracking-widest md:text-lg">
                EASY WORLDWIDE DELIEVRY
              </p>
              <p className="text-center md:text-left">*minimum spends apply</p>
            </div>
            <div className="move-two hidden text-base md:block">
              <p className="text-lg font-bold tracking-widest md:max-w-[250px]">
                ASOS DESIGN and 850+ brands
              </p>
            </div>
          </div>

          <picture className="h-full w-full">
            <source srcSet="/images/small.webp" media="(max-width: 768px)" />
            <img src="/images/large.webp" alt="large" className="w-full" />
          </picture>

          <div className="absolute flex h-full w-full flex-col items-center justify-center">
            <div className="md:mt-[-54px]">
              <p className="mx-auto w-fit bg-white px-2 text-4xl font-bold tracking-wider text-black md:text-6xl">
                This is ASOS
              </p>
              <p className="mx-auto w-fit bg-white px-2 text-lg tracking-wider text-black">
                ASOS DESIGN and 850+ brands
              </p>

              <div className="mx-auto mt-8 flex w-fit flex-col md:flex-row">
                <Link
                  href="/women"
                  className="flex h-[42px] w-44 items-center justify-center bg-white text-sm font-bold text-black transition-all hover:bg-black hover:text-white md:mr-6 md:text-base"
                >
                  SHOP WOMEN
                </Link>
                <Link
                  href="/men"
                  className="mt-5 flex h-[42px] w-44 items-center justify-center bg-white text-sm font-bold text-black transition-all hover:bg-black hover:text-white md:mt-0 md:text-base"
                >
                  SHOP MEN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
