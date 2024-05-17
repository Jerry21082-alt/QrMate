"use client";

import { useEffect, useRef } from "react";
import { TiWarning } from "react-icons/ti";

import { exportContext } from "./useStateContext/StateContext";

export default function GeneralMsg({ onClose }) {
  const { showMsg, setShowMsg, generalMsg } = exportContext();

  useEffect(() => {
    const timer = setInterval(() => {
      setShowMsg(false);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div
        className={`msg-modal bg-charcoal rounded-lg flex items-center justify-center w-[70%] z-20 p-4 ${
          showMsg ? "open-msg" : "close-msg"
        }`}
      >
        <div className="flex flex-col justify-center items-center">
          <TiWarning size={50} color="yellow" />
          <h2 className="font-semibold text-grey text-center">
            oops! Invalid credentials
          </h2>
          <p className="text-grey leading-5 text-center text-sm mt-5">
            {generalMsg}
          </p>
        </div>
      </div>
    </>
  );
}
