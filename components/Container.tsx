import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 h-full">
      <div className="w-full max-w-[1400px] mx-auto h-full">{children}</div>
    </div>
  );
};

export default Container;
