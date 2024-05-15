"use client";

import Nav from "@/components/Nav";
import Wrapper from "@/components/Wrapper";
import { useRouter } from "next/navigation";
import { RotatingLines } from "react-loader-spinner";
import { exportContext } from "@/components/useStateContext/StateContext";

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
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" id="download"><path fill="#000" d="M12 4a1 1 0 0 0-1 1v9.529l-4.218-4.223a1.043 1.043 0 0 0-1.476 0 1.046 1.046 0 0 0 0 1.478l5.904 5.91c.217.217.506.319.79.305.284.014.573-.088.79-.305l5.904-5.91a1.046 1.046 0 0 0 0-1.478 1.043 1.043 0 0 0-1.476 0L13 14.529V5a1 1 0 0 0-1-1zM5 21a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z"></path></svg>`,
      label: "Download",
      onClick: () => handleQrcodeDownload(),
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="share"><path fill="#222" d="M6.54 55.08a1.91 1.91 0 0 1-.62-.1 2 2 0 0 1-1.38-2c0-.3 2.06-29.34 31.18-31.62V10.92a2 2 0 0 1 3.43-1.4l19.74 20.16a2 2 0 0 1 0 2.8L39.15 52.64a2 2 0 0 1-3.43-1.4V41c-19.44.74-27.41 13-27.49 13.15a2 2 0 0 1-1.69.93Zm33.18-39.26v7.41a2 2 0 0 1-1.93 2c-18.84.69-25.58 13.24-28 21.31 5-4.32 13.91-9.6 27.81-9.6h.09a2 2 0 0 1 2 2v7.41l15-15.26Z"></path></svg>`,
      label: "Share",
      onClick: () => null,
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24" id="print"><path d="M17.5,2.978c-0,-0.828 -0.672,-1.5 -1.5,-1.5l-8,0c-0.828,0 -1.5,0.672 -1.5,1.5l0,3.5c0,0.276 0.224,0.5 0.5,0.5l10,0c0.276,0 0.5,-0.224 0.5,-0.5l0,-3.5Zm-1,0l0,3c-0,0 -9,0 -9,0c0,0 0,-3 0,-3c0,-0.276 0.224,-0.5 0.5,-0.5c0,0 8,0 8,0c0.276,0 0.5,0.224 0.5,0.5Z"></path><path d="M17,16.978l3,0c0.828,0 1.5,-0.671 1.5,-1.5l0,-8c-0,-0.828 -0.672,-1.5 -1.5,-1.5c-3.151,0 -12.849,0 -16,0c-0.828,0 -1.5,0.672 -1.5,1.5l0,8c0,0.829 0.672,1.5 1.5,1.5c0.714,0 1.765,0 3,0c0.276,0 0.5,-0.224 0.5,-0.5c0,-0.276 -0.224,-0.5 -0.5,-0.5l-3,0c-0.276,0 -0.5,-0.224 -0.5,-0.5c-0,0 0,-8 0,-8c0,-0.276 0.224,-0.5 0.5,-0.5l16,0c0.276,0 0.5,0.224 0.5,0.5c0,0 0,8 0,8c-0,0.276 -0.224,0.5 -0.5,0.5l-3,0c-0.276,0 -0.5,0.224 -0.5,0.5c0,0.276 0.224,0.5 0.5,0.5Z"></path><path d="M17.5,12.978c0,-0.276 -0.224,-0.5 -0.5,-0.5l-10,0c-0.276,0 -0.5,0.224 -0.5,0.5l0,9c0,0.276 0.224,0.5 0.5,0.5l10,0c0.276,0 0.5,-0.224 0.5,-0.5l0,-9Zm-1,0.5l0,8c-0,0 -9,0 -9,0c0,0 0,-8 0,-8l9,0Z"></path><path d="M18 12.478l-12 0c-.276 0-.5.224-.5.5 0 .276.224.5.5.5l12 0c.276 0 .5-.224.5-.5 0-.276-.224-.5-.5-.5zM14 15.478l-4 0c-.276 0-.5.224-.5.5 0 .276.224.5.5.5l4 0c.276 0 .5-.224.5-.5 0-.276-.224-.5-.5-.5zM14 18.478l-4 0c-.276 0-.5.224-.5.5 0 .276.224.5.5.5l4 0c.276 0 .5-.224.5-.5 0-.276-.224-.5-.5-.5zM18 8.978l-2 0c-.276 0-.5.224-.5.5 0 .276.224.5.5.5l2 0c.276 0 .5-.224.5-.5 0-.276-.224-.5-.5-.5z"></path></svg>`,
      label: "Print",
      onClick: () => console.log("clicked"),
    },
  ];

  return (
    <Wrapper>
      <div className="flex justify-between items-center mt-14 w-full">
        <button
          onClick={goBack}
          className="w-[120px] h-[40px] rounded-md bg-white py-1 px-4 flex justify-center items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 16 16"
            id="chevron-left"
          >
            <path
              fill="#212121"
              d="M10.0103,3.57541 C10.3139,3.85726 10.3314,4.33181 10.0496,4.63534 L7.27348,7.625 L10.0496,10.6147 C10.3314,10.9182 10.3139,11.3927 10.0103,11.6746 C9.7068,11.9565 9.23226,11.9389 8.9504,11.6353 L5.7004,8.13534 C5.4332,7.84758 5.4332,7.40243 5.7004,7.11466 L8.9504,3.61466 C9.23226,3.31113 9.70681,3.29356 10.0103,3.57541 Z"
            ></path>
          </svg>{" "}
          <p className="text-sm">Back</p>
        </button>

        <button
          onClick={() => saveToHistory(url, type, src, qrcodeName)}
          className="w-[120px] h-[40px] rounded-md bg-red py-1 px-4 flex justify-center items-center space-x-2"
        >
          <p className="text-white text-sm">Finish</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="chevron-right"
            width={35}
            height={35}
            fill="#FFFFFF"
          >
            <path d="M10,17a1,1,0,0,1-.71-1.71L12.59,12,9.29,8.71a1,1,0,0,1,1.41-1.41l4,4a1,1,0,0,1,0,1.41l-4,4A1,1,0,0,1,10,17Z"></path>
          </svg>
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
            <div className="w-5 h-5">
              <div dangerouslySetInnerHTML={{ __html: option.icon }} />
            </div>
            <h4 className="text-xs mt-2 text-white">{option.label}</h4>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
