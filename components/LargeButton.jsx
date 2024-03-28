import React from "react";

export default function LargeButton({ text, backgroundStyle, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`w-full md:w-11 rounded-2xl p-4 text-sm outline-none border-none ${backgroundStyle} mt-4 shadow-md flex items-center justify-center`}
    >
      {text}
    </button>
  );
}
