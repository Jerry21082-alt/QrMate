"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { edit } from "@/public";
import QRcode from "qrcode";
import { generateRandomId } from "@/helper";
import LocalStorage from "@/hooks/LocalStorage";

const Context = createContext();

export default function StateContext({ children }) {
  const [generalMsg, setGeneralMsg] = useState(null);
  const [showMsg, setShowMsg] = useState(false);
  const [toggleBar, setToggleBar] = useState(false);
  const [selectStyle, setSelectStyle] = useState("Background & colors");
  const [resize, setResize] = useState(false);
  const [url, setUrl] = useState("");
  const [src, setSrc] = useState("");
  const [isSelected, setIsSelected] = useState(0);
  const [type, setType] = useState("website");
  const [qrcodeName, setQrcodeName] = useState("");
  const [showQrcode, setShowQrcode] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [qrcodes, setQrcodes] = LocalStorage("codes", []);

  const [customizeQrcode, setCustomizeQrcode] = useState({
    color: "",
    backgroundColor: "#000",
    size: "100",
  });

  const styles = [{ style: "Background & colors", icon: edit }];

  const router = useRouter();

  const spin = () => {
    setShowSpinner(true);
    setShowQrcode(false);
    setTimeout(() => {
      setShowSpinner(false);
      setShowQrcode(true);
    }, 1000);
  };

  const generateQrcode = (bg, col, vol) => {
    if (!qrcodeName || !url) {
      setGeneralMsg("Check the form and make sure all fields are filled");
      setShowMsg(true);

      return;
    }

    QRcode.toDataURL(url, {
      color: {
        light: '#FFFFFF',
        dark: col,
      },

      width: vol,
    }).then((val) => setSrc(val));

    spin();
  };

  const regenerateQrcode = () => {
    setQrcodeName("");
    setUrl("");
    setShowQrcode(false);
  };

  const saveToHistory = (url, type, src, name) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    if (url && type && src) {
      const newHistory = [...qrcodes];
      newHistory.push({
        url,
        type,
        name,
        src,
        id: generateRandomId(5),
        status: "Active",
        date: formattedDate,
      });

      setQrcodes(newHistory);
      setQrcodeName("");
      setUrl("");
      setShowQrcode(false);
      router.push("/pages/home");
    }

    return;
  };

  return (
    <Context.Provider
      value={{
        generalMsg,
        qrcodes,
        saveToHistory,
        setGeneralMsg,
        showMsg,
        setShowMsg,
        toggleBar,
        setToggleBar,
        generateQrcode,
        regenerateQrcode,
        customizeQrcode,
        setCustomizeQrcode,
        url,
        setUrl,
        src,
        setSrc,
        styles,
        selectStyle,
        setSelectStyle,
        qrcodeName,
        setQrcodeName,
        showQrcode,
        setShowQrcode,
        showSpinner,
        resize,
        setResize,
        type,
        setType,
        isSelected,
        setIsSelected,
        setQrcodes,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const exportContext = () => useContext(Context);
