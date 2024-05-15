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
        className={`w-6 h-6 active:bg-slate-800 rounded flex items-center justify-center absolute right-4 top-4 cursor-pointer ${toggleBar ? 'open' : ''}`}
      >
        <div className="line1"></div>
        <div className="line2"></div>
      </div>

      <ul className="flex flex-col space-y-8 mt-5 w-full">
        <li onClick={() => navigate("/pages/home")}>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25"
              height="25"
              fill={pathname === "/pages/home" ? "#CA2828" : "#9f9f9f"}
            >
              <path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z" />
            </svg>
            <span className="text-white text-lg">Home</span>
          </div>
        </li>

        <li onClick={() => navigate("/pages/create")}>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="25"
              height="25"
              fill={pathname === "/pages/create" ? "#CA2828" : "#9f9f9f"}
            >
              {" "}
              <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z" />
            </svg>

            <span className="text-white text-lg">Create Qr</span>
          </div>
        </li>

        <li onClick={() => navigate("/pages/home")}>
          <div className="flex items-center space-x-2">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 20 20"
              onClick={() => navigate("/pages/notification")}
              fill={pathname === "/pages/notification" ? "#CA2828" : "#9f9f9f"}
            >
              <title>notification</title>
              <path d="M4 8c0-0.001 0-0.002 0-0.003 0-2.608 1.664-4.827 3.988-5.654l0.042-0.013c-0.016-0.095-0.025-0.204-0.025-0.315 0-1.105 0.895-2 2-2s2 0.895 2 2c0 0.111-0.009 0.22-0.027 0.327l0.002-0.012c2.361 0.843 4.020 3.060 4.020 5.664 0 0.002 0 0.004 0 0.006v-0 6l3 2v1h-18v-1l3-2v-6zM12 18c0 1.105-0.895 2-2 2s-2-0.895-2-2v0h4z"></path>
            </svg>
            <span className="text-white text-lg">Notifications</span>
          </div>
        </li>
        <li onClick={() => navigate("/pages/home")}>
          <div className="flex items-center space-x-2">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 32 32"
              fill={pathname === "/pages/profile" ? "#CA2828" : "#9f9f9f"}
              onClick={() => navigate("/pages/profile")}
            >
              <title>user</title>
              <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
            </svg>
            <span className="text-white text-lg">User</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
