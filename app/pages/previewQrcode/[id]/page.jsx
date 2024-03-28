"use client";

import Nav from "@/components/Nav";
import Wrapper from "@/components/Wrapper";
import { LiaTimesSolid } from "react-icons/lia";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useRouter } from "next/navigation";
import InputForm from "@/components/InputForm";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { exportContext } from "@/components/useStateContext/StateContext";
import { useSearchParams } from "next/navigation";
import Edit from "@/components/Edit";

export default function page() {
  const {
    customizeQrcode,
    setCustomizeQrcode,
    url,
    src,
    setUrl,
    selectStyle,
    styles,
    generateQrcode,
    showQrcode,
    qrcodeName,
    setQrcodeName,
    showSpinner,
  } = exportContext();

  const [customizePage, setCustomizePage] = useState(false);
  const [finishPage, setFinishPage] = useState(false);

  const handleCustomizeChanged = (bgColor, color, vol) => {
    setCustomizeQrcode({
      ...customizeQrcode,
      backgroundColor: bgColor,
      color: color,
    });

    generateQrcode(bgColor, color, vol);
  };

  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  const search = useSearchParams();
  const qrCodeType = search.get("type");

  const handleNextPage = () => {
    setCustomizePage(true);
    setFinishPage(true);
  };

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

        {finishPage ? (
          <button
            onClick={() => router.push("/pages/final_page")}
            className="w-[120px] h-[40px] rounded-md bg-red py-1 px-4 flex justify-center items-center space-x-2"
          >
            <p className="text-white text-sm">Next</p>
            <MdNavigateNext size={25} color="#fff" />
          </button>
        ) : (
          <button
            onClick={handleNextPage}
            disabled={!qrcodeName || !url ? true : false}
            className="w-[120px] h-[40px] rounded-md bg-red py-1 px-4 flex justify-center items-center space-x-2"
          >
            <p className="text-white text-sm">Next</p>
            <MdNavigateNext size={25} color="#fff" />
          </button>
        )}
      </div>

      <h1 className="text-center text-xl text-white mt-5">Create Qrcode</h1>
      <h3 className="text-white font-semibold text-center mt-5">
        {showQrcode ? "Customize your QRcode" : null}
      </h3>

      <InputForm
        url={url}
        setUrl={setUrl}
        qrcodeName={qrcodeName}
        setQrcodeName={setQrcodeName}
        qrCodeType={qrCodeType}
        customizePage={customizePage}
      />

      <div
        className={`${
          showSpinner || showQrcode ? "hidden" : null
        } flex justify-center w-full mt-10`}
      >
        <button
          className="w-1/2 bg-red rounded-md py-2 px-4 text-white outline-none"
          onClick={() => generateQrcode("#e9ecef", "#000")}
        >
          Create QRcode
        </button>
      </div>

      <div className="flex justify-center items-center mt-10">
        {showSpinner && <RotatingLines strokeColor="grey" />}
      </div>

      <div className="flex justify-center w-full">
        {showQrcode && (
          <div
            className={`flex flex-col justify-center items-center bg-lightCulture p-5 rounded-xl shadow-md`}
          >
            <h3 className="text-white text-lg font-semibold">Preview</h3>
            <img src={src} alt="qrcode image" />
          </div>
        )}
      </div>

      <p
        className={`${
          !customizePage || showSpinner ? "hidden" : null
        } text-sm text-center mt-2 text-white`}
      >
        {selectStyle}
      </p>

      <Edit customizePage={customizePage} />

      <div
        className={`${
          selectStyle !== styles[0].style || !customizePage || showSpinner
            ? "hidden"
            : null
        } flex justify-center space-x-5 mt-5`}
      >
        <div
          onClick={() => handleCustomizeChanged("#fff", "#000")}
          className="flex justify-center items-center w-[40px] h-[40px]
         rounded-full overflow-hidden"
        >
          <div className={`bg-charcoal w-full h-full`} />
          <div className={`bg-white w-full h-full`} />
        </div>

        <div
          onClick={() => handleCustomizeChanged("#fff", "#2563eb")}
          className="flex justify-center items-center w-[40px] h-[40px]
         rounded-full overflow-hidden"
        >
          <div className={`bg-darkBlue w-full h-full`} />
          <div className={`bg-white w-full h-full`} />
        </div>
        <div
          onClick={() => handleCustomizeChanged("#fff", "#4c1d95")}
          className="flex justify-center items-center w-[40px] h-[40px]
         rounded-full overflow-hidden"
        >
          <div className={`bg-white w-full h-full`} />
          <div className={`bg-violet w-full h-full`} />
        </div>
        <div
          onClick={() => handleCustomizeChanged("#fff", "#c026d3")}
          className="flex justify-center items-center w-[40px] h-[40px]
         rounded-full overflow-hidden"
        >
          <div className={`bg-white w-full h-full`} />
          <div className={`bg-fuchsia h-full w-full`} />
        </div>
      </div>
    </Wrapper>
  );
}
