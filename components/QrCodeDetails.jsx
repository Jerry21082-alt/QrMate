import { CiEdit } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";
import { FaRegCirclePause, FaRegCirclePlay } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { exportContext } from "./useStateContext/StateContext";

export default function QrCodeDetails({
  src,
  url,
  name,
  type,
  detail,
  handleQrcodepause,
  handleQrcoderesume,
  handleDeleteQrcode,
}) {
  const [openModal, setOpenModal] = useState(false);
  const modalContainer = useRef();

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

  const DetailsModal = ({ detail }) => (
    <div
      className={`bg-darkGray p-3 flex flex-col space-y-2 absolute top-8 right-12 rounded-s-lg rounded-br-lg w-24 z-20 shadow-md ${
        openModal ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
    >
      {detail.status === "Active" ? (
        <div
          className="flex items-center space-x-2"
          onClick={() => handleQrcodepause(detail.id)}
        >
          <FaRegCirclePause color="#9f9f9f" size={15} />
          <p className="text-grey text-xs font-semibold">Pause</p>
        </div>
      ) : (
        <div
          className="flex items-center space-x-2"
          onClick={() => handleQrcoderesume(detail.id)}
        >
          <FaRegCirclePlay color="#9f9f9f" size={15} />
          <p className="text-grey text-xs font-semibold">Resume</p>
        </div>
      )}

      <div
        onClick={() => handleDeleteQrcode(detail.id)}
        className="flex items-center space-x-2"
      >
        <MdDelete color="#CC2936" size={10} />
        <p className="text-xs font-semibold text-madderLake">Delete</p>
      </div>
    </div>
  );

  return (
    <div
      ref={modalContainer}
      className="w-full flex items-center space-x-2 relative overflow-hidden bg-charcoal rounded-xl p-4"
    >
      <div
        className={`w-3 h-full ${
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

        <div className="flex flex-col space-y-5">
          <div className="flex justify-end items-center space-x-3">
            <div className="w-[30px] h-[30px] rounded-md border border-gray-400 flex justify-center items-center p-1">
              <CiEdit color="#fff" />
            </div>
            <div className="w-[30px] h-[30px] rounded-md border border-gray-400 flex justify-center items-center p-1">
              <SlOptions
                onClick={() => setOpenModal((prev) => !prev)}
                color="#fff"
              />
            </div>
          </div>

          <button className="bg-red rounded-md text-white px-4 py-2 text-xs">
            Details
          </button>
        </div>
      </div>
      <DetailsModal detail={detail} />
    </div>
  );
}
