"use client";

import { useState } from "react";
import { exportContext } from "./useStateContext/StateContext";

export default function EditModal({
  name,
  type,
  url,
  id,
  toggleEdit,
  setToggleEdit,
}) {
  const [editName, setEditName] = useState(name);
  const [editType, setEditType] = useState(type);
  const [editUrl, setEditUrl] = useState(url);

  const { qrcodes, setQrcodes } = exportContext();

  const updateEdit = (id) => {
    const updatedItem = qrcodes.map((item) => {
      if (item.id === id) {
        return { ...item, type: editType, url: editUrl, name: editName };
      }

      return item;
    });

    setQrcodes(updatedItem);
    setToggleEdit(false);
  };

  return (
    <div
      className={`fixed bg-oxfordBlue left-0 bottom-0 right-0 p-2 md:px-96 ${
        toggleEdit ? "open-edit" : "close-edit"
      }`}
    >
      <h2 className="text-white text-center mt-5">Edit Details</h2>

      <div className="mt-10 flex flex-col gap-5">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-grey">
            Name
          </label>
          <input
            id="name"
            value={editName}
            onChange={(ev) => setEditName(ev.target.value)}
            className="w-full text-white shadow-sm rounded-md p-4 bg-lightCulture border-2 outline-none bg-transparent"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="type" className="text-grey">
            Type
          </label>
          <input
            id="type"
            value={editType}
            onChange={(ev) => setEditType(ev.target.value)}
            className="w-full text-white shadow-sm rounded-md p-4 bg-lightCulture border-2 outline-none bg-transparent"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="url" className="text-grey">
            Url
          </label>
          <input
            id="url"
            value={editUrl}
            onChange={(ev) => setEditUrl(ev.target.value)}
            className="w-full text-white shadow-sm rounded-md p-4 bg-lightCulture border-2 outline-none bg-transparent"
          />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button
          className="bg-tuftsBlue text-white py-4 rounded-md mt-11 w-full"
          onClick={() => updateEdit(id)}
        >
          Save
        </button>
      </div>
    </div>
  );
}
