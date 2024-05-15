"use client";

import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { user } from "@/public";
import Nav from "@/components/Nav";
import UseCalendar from "@/components/UseCalendar";

import { MdOutlineInfo } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FiSearch, FiPlusCircle } from "react-icons/fi";
import { CiCalendarDate } from "react-icons/ci";

import QrCodeDetails from "@/components/QrCodeDetails";
import { exportContext } from "@/components/useStateContext/StateContext";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const filterButtonsText = {
  active: "Active",
  paused: "Paused",
  all: "All",
};

export default function Home() {
  const { qrcodes, setQrcodes } = exportContext();
  const [filterItems, setFilterItems] = useState("Active");
  const [toggleCalendar, setToggleCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleFilterChange = (status) => {
    setFilterItems(status);
  };

  const filteredItems = qrcodes.filter((item) => {
    const isDateMatch = !selectedDate || item.date === selectedDate;
    const isfilterMatch = filterItems === "All" || item.status === filterItems;

    return isfilterMatch && isDateMatch;
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [filteredItems]);

  const handleQrcodepause = (id) => {
    const target = qrcodes.map((target) => {
      if (target.id === id) {
        return { ...target, status: "Paused" };
      }

      return target;
    });

    setQrcodes(target);
    console.log(qrcodes);
  };

  const handleQrcoderesume = (id) => {
    const target = qrcodes.map((target) => {
      if (target.id === id) {
        return { ...target, status: "Active" };
      }

      return target;
    });

    setQrcodes(target);
  };

  const handleDeleteQrcode = (itemId) => {
    const updatedItems = [...qrcodes];

    const itemToRemove = updatedItems.findIndex((item) => item.id === itemId);

    if (itemToRemove !== -1) {
      updatedItems.splice(itemToRemove, 1);
      setQrcodes(updatedItems);
    }
  };

  return (
    <Wrapper className="h-screen fixed">
      <section className="mt-14 bg-black z-50 ">
        <h1 className="text-center font-semibold my-5 text-2xl text-white">
          Your QR codes
        </h1>

        <div className="flex justify-between items-center w-full mt-10">
          {Object.values(filterButtonsText).map((text, index) => (
            <button
              key={text}
              className={`${
                filterItems === text
                  ? "bg-red text-white"
                  : "bg-darkGray text-grey"
              } w-[100px] py-4 px-5 rounded-md`}
              onClick={() => handleFilterChange(text)}
            >
              {text}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mt-8 space-x-3 p-2 rounded-md border border-grey">
          <FiSearch size={30} color="#9f9f9f" />
          <input
            placeholder="Search for QR code"
            className="w-full bg-transparent outline-none border-none text-white"
          />
        </div>

        <div className="my-5 w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1">
              <h3 className="font-semibold text-grey">
                {filterItems} QR Codes
              </h3>
              <span className="font-semibold text-red">{`(${
                isMounted ? filteredItems.length : 0
              })`}</span>
            </div>
            <CiCalendarDate
              size={30}
              color="#CA2828"
              onClick={() => setToggleCalendar((prev) => !prev)}
            />
          </div>
        </div>
        <UseCalendar
          toggleCalendar={toggleCalendar}
          setToggleCalendar={setToggleCalendar}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
      </section>

      <div id="scroll" className="max-h-[500px]" ref={ref}>
        {qrcodes.length && isMounted ? (
          <div className="h-full w-full flex flex-col justify-start">
            {filteredItems.map((detail, i) => (
              <div key={i} className="pb-3">
                <QrCodeDetails
                  type={detail.type}
                  url={
                    detail.url.length > 10
                      ? `${detail.url.substring(0, 10)}...`
                      : detail.url
                  }
                  src={detail.src}
                  name={
                    detail.name.length > 10
                      ? `${detail.name.substring(0, 10)}...`
                      : detail.name
                  }
                  detail={detail}
                  handleQrcodepause={handleQrcodepause}
                  handleQrcoderesume={handleQrcoderesume}
                  handleDeleteQrcode={handleDeleteQrcode}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center mt-10">
            <h3 className="text-grey font-semibold text-lg my-2">
              No active Qrcode
            </h3>
            <Link href="/pages/create mt-8 block">
              <FiPlusCircle size={40} color="#fff" />
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
}
