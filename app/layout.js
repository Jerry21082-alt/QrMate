"use client";

import "../styles/global.css";
import "../styles/typography.css";

import StateContext from "@/components/useStateContext/StateContext";
import GeneralMsg from "@/components/GeneralMsg";

export const metaData = {
  title: "scanMate",
  description: "create your create code without hastle!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <StateContext>
        <body className="relative h-full antialiased">
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
