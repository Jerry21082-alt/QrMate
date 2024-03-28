"use client";

import '../styles/global.css';

import StateContext from "@/components/useStateContext/StateContext";
import GeneralMsg from "@/components/GeneralMsg";

export const metaData = {
  title: "IQcode",
  description: "create and save qrcodes like never before!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <StateContext>
        <body className="relative h-full antialiased bg-black">
          <main className="relative flex flex-col min-h-screen">
            <div>
              <GeneralMsg />
            </div>
            <div className="flex-grow flex-1">{children}</div>
          </main>
        </body>
      </StateContext>
    </html>
  );
};

export default RootLayout;
