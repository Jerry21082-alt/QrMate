"use client";

import Nav from "@/components/Nav";
import Wrapper from "@/components/Wrapper";
import { pdf, share, ticket, website } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";
import { MdNavigateNext } from "react-icons/md";
import { exportContext } from "@/components/useStateContext/StateContext";

const selectQrcode = [
  { icon: website, type: "website" },
  { icon: share, type: "social media" },
  { icon: ticket, type: "coupon" },
  { icon: pdf, type: "PDF" },
];

export default function CreatePage() {
  const [selectFormat, setSelectFormat] = useState(0);
  const { regenerateQrcode, headingTxt, type, setType } = exportContext();

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
      <Nav />
      <div className="flex justify-between items-center mt-14">
        <button
          onClick={handleCreateCancel}
          className="w-[120px] h-[40px] rounded-md bg-white py-1 px-4 flex justify-center items-center space-x-2"
        >
          <LiaTimesSolid size={20} /> <p className="text-sm">Cancel</p>
        </button>

        <Link
          href={{
            query: { type: type },
            pathname: `/pages/previewQrcode/${type}`,
          }}
          className="rounded-md bg-red py-1 px-4 flex justify-center items-center space-x-2 w-[120px] h-[40px]"
        >
          <p className="text-white text-sm">Next</p>

          <MdNavigateNext size={25} color="#fff" />
        </Link>
      </div>

      <h1 className="text-center text-xl font-semibold mt-5 text-white">
        Create QRcode
      </h1>

      <div className="flex items-center justify-between mt-8 space-x-3 bg-lightCulture p-4 rounded-md border border-culture">
        <FiSearch size={30} color="#fff" />
        <input
          placeholder="Search QR code type"
          className="w-full bg-transparent outline-none border-none text-white"
        />
      </div>

      <h2 className="text-center text-lg mt-5 text-white">
        Select your QR code type
      </h2>

      <div className="flex justify-center items-center gap-5 flex-wrap mt-8">
        {selectQrcode.map((select, i) => (
          <div
            onClick={() => handleSelectFormat(i, select.type)}
            key={i}
            className={`${
              selectFormat === i ? "bg-red" : "bg-grey"
            } w-[150px] rounded-md flex flex-col items-center justify-center py-5 border`}
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
    </Wrapper>
  );
}
