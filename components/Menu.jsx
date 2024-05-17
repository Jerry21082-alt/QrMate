"use client";

import { GoHomeFill } from "react-icons/go";
import { FaPlusCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import { exportContext } from "./useStateContext/StateContext";
import { user } from "@/public";

export default function Menu({ navRef }) {
  const { toggleBar, setToggleBar } = exportContext();
  const pathname = usePathname();

  const router = useRouter();

  const navigate = (link) => {
    router.push(link);
    setToggleBar(false);
  };

  return (
    <div
      ref={navRef}
      className={`fixed w-3/4 h-full top-0 right-0 z-[50] py-10 px-5 bg-black ${
        toggleBar ? "open-menu" : "close-menu"
      }`}
    >
      <div
        onClick={() => setToggleBar(false)}
        className={`w-6 h-6 active:bg-slate-800 rounded flex items-center justify-center absolute right-4 top-4 cursor-pointer ${
          toggleBar ? "open" : ""
        }`}
      >
        <div className="line1"></div>
        <div className="line2"></div>
      </div>

      <ul className="flex flex-col justify-center items-center h-full space-y-8 w-full">
        <li onClick={() => navigate("/pages/home")}>
          <span
            className="text-2xl"
            style={{
              color: pathname === "/pages/home" ? "#CA2828" : "#FFFFFF",
            }}
          >
            Home
          </span>
        </li>

        <li onClick={() => navigate("/pages/create")}>
          <span
            className="text-2xl"
            style={{
              color: pathname === "/pages/create" ? "#CA2828" : "#FFFFFF",
            }}
          >
            Create Qr
          </span>
        </li>

        <li onClick={() => navigate("/pages/home")}>
          <span
            className="text-2xl"
            style={{
              color: pathname === "/pages/notification" ? "#CA2828" : "#FFFFFF",
            }}
          >
            Notifications
          </span>
        </li>

        <li onClick={() => navigate("/pages/home")}>
          <span
            className="text-2xl"
            style={{
              color: pathname === "/pages/user" ? "#CA2828" : "#FFFFFF",
            }}
          >
            User
          </span>
        </li>
      </ul>
    </div>
  );
}
