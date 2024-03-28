"use client";

import { useEffect, useRef } from "react";
import { TiWarning } from "react-icons/ti";

import { exportContext } from "./useStateContext/StateContext";

export default function GeneralMsg({ onClose }) {
  const { showMsg, setShowMsg, generalMsg } = exportContext();

  const generalMsgContainer = useRef();

  const handleOutsideClick = (e) => {
    const onClose = () => {
      setShowMsg(false);
    };

    if (
      generalMsgContainer.current &&
      !generalMsgContainer.current.contains(e.target)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (showMsg) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showMsg, onClose]);

  return (
    <>
      <div
        ref={generalMsgContainer}
        className={`bg-charcoal rounded-lg flex items-center justify-center w-[70%] p-4 fixed top-1/2 left-1/2 tranform translate-x-[-50%] translate-y-[-50%] z-20 ${
          showMsg ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } transition-all ease 150ms`}
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
