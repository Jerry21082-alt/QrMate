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
      className={`absolute top-[4.5rem] left-4 right-4 z-10 bg-darkGray rounded-xl justify-between flex items-center space-x-10 py-6 px-8 shadow-sm ${
        toggleBar ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } transition-all 150ms ease-in-out`}
    >
      <GoHomeFill
        onClick={() => navigate("/pages/home")}
        size={25}
        color={pathname === "/pages/home" ? "#CA2828" : "#9f9f9f"}
      />

      <FaPlusCircle
        onClick={() => navigate("/pages/create")}
        size={25}
        color={pathname === "/pages/create" ? "#CA2828" : "#9f9f9f"}
      />

      <IoNotificationsOutline
        onClick={() => navigate("/pages/notification")}
        size={25}
        color={pathname === "/pages/notification" ? "#CA2828" : "#9f9f9f"}
      />

      <CgProfile
        onClick={() => navigate("/pages/profile")}
        size={25}
        color={pathname === "/pages/profile" ? "#CA2828" : "#9f9f9f"}
      />
    </div>
  );
}
