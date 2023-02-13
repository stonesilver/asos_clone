import Image from "next/image";
import Transition from "./components/Transition";
import LargeImg from "../public/images/large.webp";

const Home: React.FC = () => {
  return (
    <main className="">
      {/* <Transition /> */}
      <Image
        src={LargeImg}
        priority
        className="relative w-full object-cover"
        alt=""
      />
    </main>
  );
};

export default Home;
