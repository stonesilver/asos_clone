"use client";

import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const Transition: React.FC = () => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);

  return (
    <div style={{ paddingTop: "2rem" }}>
      {showButton && (
        <button
          className="bg-blue-700 w-32 h-[3rem] rounded-lg text-white"
          onClick={() => setShowMessage(true)}
        >
          Show Message
        </button>
      )}
      <CSSTransition
        in={showMessage}
        nodeRef={nodeRef}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div ref={nodeRef} className="w-[400px] rounded-lg bg-blue-100 p-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-medium text-blue-500">
              Animated alert message
            </h1>

            <span
              className="text-2xl text-blue-500 cursor-pointer"
              onClick={() => setShowMessage(false)}
            >
              &#10005;
            </span>
          </div>

          <p className="text-base text-blue-500 mt-4">
            This alert message is being transitioned in and out of the DOM.
          </p>

          <button
            className="bg-blue-700 w-32 h-[3rem] rounded-lg text-white mt-8"
            onClick={() => setShowMessage(false)}
          >
            Close
          </button>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Transition;
