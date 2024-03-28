"use client";

import Nav from "@/components/Nav";
import Wrapper from "@/components/Wrapper";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useRouter } from "next/navigation";
import { RotatingLines } from "react-loader-spinner";
import { exportContext } from "@/components/useStateContext/StateContext";
import { BsDownload } from "react-icons/bs";
import { MdOutlineIosShare, MdOutlinePrint } from "react-icons/md";

export default function page() {
  const {
    src,
    url,
    type,
    showSpinner,
    qrcodeName,
    saveToHistory,
    qrcodeHistory,
  } = exportContext();

  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  const handleQrcodeDownload = () => {
    const fileUrl = src;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = `${qrcodeName} QRcode`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const qrcodeOptions = [
    {
      icon: BsDownload,
      label: "Download",
      onClick: () => handleQrcodeDownload(),
    },
    { icon: MdOutlineIosShare, label: "Share", onClick: () => null },
    {
      icon: MdOutlinePrint,
      label: "Print",
      onClick: () => console.log("clicked"),
    },
  ];

  return (
    <Wrapper>
      <Nav />

      <div className="flex justify-between items-center mt-14 w-full">
        <button
          onClick={goBack}
          className="w-[120px] h-[40px] rounded-md bg-white py-1 px-4 flex justify-center items-center space-x-2"
        >
          <MdNavigateBefore size={25} /> <p className="text-sm">Back</p>
        </button>

        <button
          onClick={() => saveToHistory(url, type, src, qrcodeName)}
          className="w-[120px] h-[40px] rounded-md bg-red py-1 px-4 flex justify-center items-center space-x-2"
        >
          <p className="text-white text-sm">Finish</p>
          <MdNavigateNext size={25} color="#fff" />
        </button>
      </div>

      <h1 className="text-center text-white text-xl font-semibold mt-5">
        Congratulations!
      </h1>
      <h3 className="text-white font-semibold text-center mt-5">
        You've created a QRcode!
      </h3>

      <div className="flex justify-center items-center mt-10">
        {showSpinner && <RotatingLines strokeColor="grey" />}
      </div>

      <div className="flex justify-center w-full">
        <div
          className={`flex flex-col justify-center items-center bg-lightCulture p-5 rounded-xl shadow-md`}
        >
          <img src={src} alt="qrcode image" />
        </div>
      </div>

      <div className="flex justify-center items-center w-full gap-2 mt-10">
        {qrcodeOptions.map((option) => (
          <div
            onClick={option.onClick}
            key={option.label}
            className="w-1/3 flex flex-col items-center py-2 px-4 bg-red rounded-md"
          >
            <option.icon color="#fff" />
            <h4 className="text-xs mt-2 text-white">{option.label}</h4>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
