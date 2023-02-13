import Link from "next/link";
// import Transition from "./components/Transition";

const Home: React.FC = () => {
  return (
    <div className="h-full w-full">
      <div className="relative flex flex-col item-center h-full w-full md:pt-12">
        <div className="relative md:absolute border-t md:border-t-0 overflow-x-hidden border-white flex flex-col md:flex-row justify-around items-center bg-primary text-white bottom-0 left-0 w-full h-[74px] md:h-[54px]">
          <div className="move-one">
            <p className="text-base md:text-lg font-bold tracking-widest">
              EASY WORLDWIDE DELIEVRY
            </p>
            <p className="text-center md:text-left">*minimum spends apply</p>
          </div>
          <div className="text-base move-two hidden md:block">
            <p className="text-lg font-bold tracking-widest md:max-w-[250px]">
              ASOS DESIGN and 850+ brands
            </p>
          </div>
        </div>

        <picture className="w-full h-full">
          <source srcSet="/images/small.webp" media="(max-width: 768px)" />
          <img src="/images/large.webp" alt="large" className="w-full" />
        </picture>

        <div className="absolute w-full h-full flex flex-col justify-center items-center">
          <div className="md:mt-[-54px]">
            <p className="bg-white text-4xl md:text-6xl mx-auto tracking-wider w-fit px-2 font-bold text-black">
              This is ASOS
            </p>
            <p className="bg-white text-lg tracking-wider px-2 text-black w-fit mx-auto">
              ASOS DESIGN and 850+ brands
            </p>

            <div className="flex flex-col md:flex-row mt-8 mx-auto w-fit">
              <Link
                href="/women"
                className="flex items-center justify-center text-sm md:text-base font-bold w-44 h-[42px] text-black bg-white hover:bg-black hover:text-white transition-all md:mr-6"
              >
                SHOP WOMEN
              </Link>
              <Link
                href="/men"
                className="flex items-center justify-center text-sm md:text-base font-bold w-44 h-[42px] text-black bg-white hover:bg-black hover:text-white transition-all mt-5 md:mt-0"
              >
                SHOP MEN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
