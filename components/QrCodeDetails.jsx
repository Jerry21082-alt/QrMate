import { SlOptions } from "react-icons/sl";
import { FaRegCirclePause, FaRegCirclePlay } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { exportContext } from "./useStateContext/StateContext";

export default function QrCodeDetails({
  src,
  url,
  name,
  type,
  detail,
  codeId,
}) {
  const [openModal, setOpenModal] = useState(false);
  const modalContainer = useRef();

  const { qrcodes, setQrcodes } = exportContext();

  const onClose = () => {
    setOpenModal(false);
  };

  const handleClickOutside = (e) => {
    if (modalContainer.current && !modalContainer.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (openModal) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [openModal, onClose]);

  const handleDeleteQrcode = (itemId) => {
    const updatedItems = [...qrcodes];

    const itemToRemove = updatedItems.findIndex((item) => item.id === itemId);

    if (itemToRemove !== -1) {
      updatedItems.splice(itemToRemove, 1);
      setQrcodes(updatedItems);
      setOpenModal(false);
    }
  };

  const handleQrcodepause = (id) => {
    const target = qrcodes.map((target) => {
      if (target.id === id) {
        return { ...target, status: "Paused" };
      }

      return target;
    });

    setQrcodes(target);
    setOpenModal(false);
  };

  const handleQrcoderesume = (id) => {
    const target = qrcodes.map((target) => {
      if (target.id === id) {
        return { ...target, status: "Active" };
      }

      return target;
    });

    setQrcodes(target);
    setOpenModal(false);
  };

  return (
    <div className="w-full flex items-center space-x-2 relative overflow-hidden bg-charcoal rounded-xl p-4">
      <div
        className={`w-2 h-full ${
          detail.status === "Active" ? "bg-kellyGreen" : "bg-red"
        } absolute left-0`}
      />

      <div className="flex justify-center items-center w-24">
        <img
          src={src}
          alt="qrcode image"
          className="overflow-hidden w-full h-full rounded-md"
        />
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col space-y-2 text-white">
          <div className="flex items-center space-x-2">
            <p className="text-xs text-slate-400">Name:</p>
            <span className="text-sm font-semibold">{name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-xs text-slate-400">Type:</p>
            <span className="text-sm font-semibold">{type}</span>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-xs text-slate-400">URL:</p>
            <span className="text-sm font-semibold">{url}</span>
          </div>
        </div>

        <div className="w-[30px] h-[30px] absolute top-4 right-4">
          <SlOptions
            onClick={() => setOpenModal((prev) => !prev)}
            color="#fff"
          />
        </div>

        <Link
          href={{
            pathname: `/pages/qrcode_details/${codeId}`,
            query: {
              id: detail.id,
            },
          }}
          className="bg-red rounded-md text-white px-4 py-2 text-xs absolute bottom-4 right-4"
        >
          Details
        </Link>
      </div>

      <div
        ref={modalContainer}
        className={`bg-darkGray p-3 flex flex-col space-y-2 absolute top-6 right-12 rounded-s-lg rounded-br-lg w-16 z-20 shadow-md ${
          openModal ? "open-modal" : "close-modal"
        }`}
      >
        {detail.status === "Active" ? (
          <div className="w-6 h-6" onClick={() => handleQrcodepause(detail.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 32 40"
              x="0px"
              y="0px"
              fill="#FFBF00"
              className="w-full h-full"
            >
              <title>Pause_1</title>
              <rect x="6" y="5" width="8" height="22" rx="4" ry="4" />
              <rect x="18" y="5" width="8" height="22" rx="4" ry="4" />
            </svg>{" "}
          </div>
        ) : (
          <div
            className="w-6 h-6"
            onClick={() => handleQrcoderesume(detail.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="-5.0 -10.0 110.0 135.0"
              fill="#FFBF00"
            >
              <path d="m10 87.902v-75.805c0-5.3828 5.8203-8.75 10.488-6.0703l65.953 37.902c4.6797 2.6914 4.6797 9.4492 0 12.141l-65.953 37.902c-4.668 2.6836-10.488-0.6875-10.488-6.0703z" />
            </svg>{" "}
          </div>
        )}

        <div onClick={() => handleDeleteQrcode(detail.id)} className="w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 100 125"
            x="0px"
            y="0px"
            fill="#FFBF00"
          >
            <title>Artboard 391</title>
            <path d="M6,34a8,8,0,0,0,8,8V82A16,16,0,0,0,30,98H70A16,16,0,0,0,86,82V42a8,8,0,0,0,8-8V26a8,8,0,0,0-8-8H70V10a8,8,0,0,0-8-8H38a8,8,0,0,0-8,8v8H14a8,8,0,0,0-8,8ZM78,82a8,8,0,0,1-8,8H30a8,8,0,0,1-8-8V42H78ZM38,10H62v8H38ZM14,26H86v8H14Z" />
            <path d="M34,82a4,4,0,0,0,4-4V54a4,4,0,0,0-8,0V78A4,4,0,0,0,34,82Z" />
            <path d="M50,82a4,4,0,0,0,4-4V54a4,4,0,0,0-8,0V78A4,4,0,0,0,50,82Z" />
            <path d="M66,82a4,4,0,0,0,4-4V54a4,4,0,0,0-8,0V78A4,4,0,0,0,66,82Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
