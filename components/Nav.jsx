"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { logo } from "@/public";
import Image from "next/image";
import { CgMenuRight } from "react-icons/cg";
import { exportContext } from "./useStateContext/StateContext";
import Menu from "./Menu";
import { usePathname } from "next/navigation";

export default function Nav() {
  const { setToggleBar, toggleBar } = exportContext();

  const pathname = usePathname();

  const navRef = useRef();

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
    <nav className="fixed h-14 top-0 left-0 w-full px-4 py-2 flex justify-between items-center bg-cultured z-50">
      <Link href="/pages/home" className="flex justify-center items-center ">
        scanMate
      </Link>
      <div
        className="w-5 h-5 flex justify-center items-center md:hidden"
        onClick={() => setToggleBar((prevState) => !prevState)}
      >
        <div className="burger" />
      </div>

      <ul className="hidden md:flex items-center space-x-5">
        <li>
          <Link
            href="/pages/home"
            style={{
              color: pathname === "/pages/home" ? "#CA2828" : "#000",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/pages/create"
            style={{
              color: pathname === "/pages/create" ? "#CA2828" : "#000",
            }}
          >
            Create Qrcode
          </Link>
        </li>
        <li>
          <Link
            href="/pages/notification"
            style={{
              color: pathname === "/pages/notification" ? "#CA2828" : "#000",
            }}
          >
            Notification
          </Link>
        </li>
        <li>
          <Link
            href="/pages/user"
            style={{
              color: pathname === "/pages/user" ? "#CA2828" : "#000",
            }}
          >
            User
          </Link>
        </li>
      </ul>

      <Menu navRef={navRef} />
    </nav>
  );
}
