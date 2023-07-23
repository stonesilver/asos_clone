"use client";

import React, { useRef, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";

interface Props {
  show: boolean;
  name: string;
  children: ReactNode;
}

const Transition: React.FC<Props> = ({ show, name, children }) => {
  const nodeRef = useRef(null);

  return (
    <div>
      <CSSTransition
        in={show}
        nodeRef={nodeRef}
        timeout={300}
        classNames={name}
        unmountOnExit
        onEnter={() => {}}
        onExited={() => {}}
      >
        <div ref={nodeRef}>{children}</div>
      </CSSTransition>
    </div>
  );
};

export default Transition;
