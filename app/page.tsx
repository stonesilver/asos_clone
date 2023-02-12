import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Transition from "./components/Transition";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  return (
    <main className="">
      <h1 className="text-3xl">Home</h1>
      <Transition />
    </main>
  );
};

export default Home;
