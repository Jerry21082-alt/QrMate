"use client";

import Wrapper from "@/components/Wrapper";
import EditModal from "@/components/EditModal";
import { exportContext } from "@/components/useStateContext/StateContext";
import { useState } from "react";

export default function page({ params }) {
  const { qrcodes } = exportContext();
  const { id } = params;

  const qrcode_details = qrcodes.find((item) => item.id === id[0]);

  const [toggleEdit, setToggleEdit] = useState(false);

  return (
    <Wrapper>
      <h1 className="mt-14 text-white text-center">Qrcode Details</h1>
      <div className="flex justify-center w-full mt-8 border-grey border-b">
        <div className="w-3/4 overflow-hidden flex items-center jusitfy-center rounded-xl mb-4">
          <img
            src={qrcode_details.src}
            alt="qrcode"
            className="w-full h-full"
          />
        </div>
      </div>

      <section className="mt-12 p-2">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <h4 className="text-slate-400">NAME:</h4>
            <span className="text-white">{qrcode_details.name}</span>
          </div>

          <div className="flex items-center space-x-2">
            <h4 className="text-slate-400">TYPE:</h4>
            <span className="text-white">{qrcode_details.type}</span>
          </div>

          <div className="flex items-center space-x-2">
            <h4 className="text-slate-400">URL:</h4>
            <span className="text-white">{qrcode_details.url}</span>
          </div>

          <div className="flex items-center space-x-2">
            <h4 className="text-slate-400">DATE:</h4>
            <span className="text-grey">{qrcode_details.date}</span>
          </div>
        </div>

        <button
          className="w-full p-2 bg-red rounded-xl text-white mt-11"
          onClick={() => setToggleEdit(true)}
        >
          Edit
        </button>

        <EditModal
          name={qrcode_details.name}
          url={qrcode_details.url}
          type={qrcode_details.type}
          id={qrcode_details.id}
          toggleEdit={toggleEdit}
          setToggleEdit={setToggleEdit}
        />
      </section>
    </Wrapper>
  );
}
