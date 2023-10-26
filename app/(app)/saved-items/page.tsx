import React from "react";
// import Loader from "@/components/Loader";
import Container from "@/components/Container";
import Button from "@/components/Button";
// import { EmptyBoxIcon } from "@/assets/icons";
import Link from "next/link";

const page: React.FC = () => {
  return (
    <Container>
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-primary">
        {/* <Loader /> */}
        {/* <EmptyBoxIcon /> */}
        <p className="text-lg font-semibold md:text-xl">
          You have no Saved Items
        </p>
        <p className="mt-3 mb-8 max-w-[244px] text-center text-sm md:text-base">
          Sign in to sync your Saved Items across all your devices.
        </p>
        <Link
          href="/auth/sign-in"
          className="block h-[54px] w-full max-w-[320px]"
        >
          <Button variant="dark" className="h-full w-full font-semibold">
            SIGN IN
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default page;
