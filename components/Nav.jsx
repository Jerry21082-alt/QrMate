"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { logo } from "@/public";
import Image from "next/image";
import { CgMenuRight } from "react-icons/cg";
import { exportContext } from "./useStateContext/StateContext";
import Menu from "./Menu";

export default function Nav() {
  const { setToggleBar, toggleBar } = exportContext();

  const navRef = useRef();
  const navLinkRef = useRef();

  const onClose = () => {
    setToggleBar(false);
  };

  const handleClickOutside = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (toggleBar) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleBar, onClose]);

  return (
    <nav className="fixed h-14 top-0 left-0 w-full px-4 py-2 flex justify-between items-center bg-charcoal z-50">
      <Link href="/pages/home" className="flex justify-center items-center">
        <div className="flex justify-center items-center w-[50px] h-[50px] text-white">
          logo
        </div>
      </Link>
      <div
        className="w-7 h-7 flex justify-center items-center"
        onClick={() => setToggleBar((prevState) => !prevState)}
      >
        <div className="burger"/>
      </div>

      <Menu navRef={navRef} />
    </nav>
  );
}
