import Loader from "@/components/Loader";
import React from "react";
import Container from "@/components/Container";

const page: React.FC = () => {
  return (
    <div className="text-2xl">
      <Container>Men's Clothing</Container>
      <div className="mx-auto w-fit mt-12">
        <Loader />
      </div>
    </div>
  );
};

export default page;
