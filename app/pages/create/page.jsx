"use client";

import Wrapper from "@/components/Wrapper";
import { pdf, share, ticket, website } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { exportContext } from "@/components/useStateContext/StateContext";

const selectQrcode = [
  { icon: website, type: "website" },
  { icon: share, type: "social media" },
  { icon: ticket, type: "coupon" },
  { icon: pdf, type: "PDF" },
];

export default function CreatePage() {
  const [selectFormat, setSelectFormat] = useState(0);
  const { regenerateQrcode, type, setType } = exportContext();

  const handleSelectFormat = (id, type) => {
    setSelectFormat(id);
    setType(type);
  };

  const router = useRouter();

  const handleCreateCancel = () => {
    router.push("/pages/home");
    regenerateQrcode();
  };

  return (
    <Wrapper>
      {/* <div className="flex justify-between items-center mt-14">
        
       
      </div> */}

      <h1 className="text-center text-xl font-semibold text-white mt-14">
        Create QRcode
      </h1>

      <div className="flex items-center justify-between mt-8 space-x-3 bg-lightCulture p-2 rounded-md border border-culture">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="-5.0 -10.0 110.0 135.0"
          width={35}
          fill="#fff"
        >
          <g>
            <path d="m47.398 78.398c-8.3008 0-16.102-3.1992-21.898-9.1016-5.8984-5.8008-9.1016-13.602-9.1016-21.898 0-8.3008 3.1992-16.102 9.1016-21.898 5.8984-5.8008 13.602-9.1016 21.898-9.1016 8.3008 0 16.102 3.1992 21.898 9.1016 5.8984 5.8984 9.1016 13.602 9.1016 21.898 0 8.3008-3.1992 16.102-9.1016 21.898-5.7969 5.9023-13.598 9.1016-21.898 9.1016zm0-56.797c-6.8984 0-13.398 2.6992-18.301 7.6016-4.8984 4.8984-7.6016 11.398-7.6016 18.301 0 6.8984 2.6992 13.398 7.6016 18.301 4.8984 4.8984 11.398 7.6016 18.301 7.6016 6.8984 0 13.398-2.6992 18.301-7.6016 4.8984-4.8984 7.6016-11.398 7.6016-18.301s-2.6992-13.504-7.5-18.402c-4.9023-4.8008-11.402-7.5-18.402-7.5z" />
            <path d="m65.746 69.336 3.6055-3.6055 14.141 14.141-3.6055 3.6055z" />
          </g>
        </svg>{" "}
        <input
          placeholder="Search QR code type"
          className="w-full bg-transparent outline-none border-none text-white"
        />
      </div>

      <h2 className="text-center text-lg mt-5 text-white">
        Select your QR code type
      </h2>

      <div className="flex justify-center items-center flex-wrap mt-8 w-full">
        {selectQrcode.map((select, i) => (
          <div
            onClick={() => handleSelectFormat(i, select.type)}
            key={i}
            className={`${
              selectFormat === i ? "bg-red" : "bg-grey"
            } w-36 rounded-md flex flex-col items-center justify-center py-4 m-2 border`}
          >
            <div className="flex justify-center items-center w-[30px]">
              <Image src={select.icon} alt="qrcode format icons" />
            </div>
            <p
              className={`${
                selectFormat === i ? "text-white" : "text-black"
              } mt-4`}
            >
              {select.type}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full fixed left-0 p-2 bottom-10">
        <Link
          href={{
            query: { type: type },
            pathname: `/pages/previewQrcode/${type}`,
          }}
          className="rounded-md bg-red p-4 flex justify-center items items-center w-full text-white"
        >Next</Link>
      </div>
    </Wrapper>
  );
}
