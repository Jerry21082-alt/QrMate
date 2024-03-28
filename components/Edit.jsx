import Image from "next/image";
import { exportContext } from "./useStateContext/StateContext";

export default function Edit({ customizePage }) {
  const { styles, setSelectStyle, selectStyle, showSpinner } = exportContext();

  const handleSelectStyle = (style) => {
    setSelectStyle(style);
  };

  return (
    <div
      className={`flex items-center justify-center space-x-4 overflow-x-auto w-full h-full mt-5 ${
        !customizePage || showSpinner ? "hidden" : null
      }`}
    >
      {styles.map((style, i) => (
        <div
          key={i}
          onClick={() => handleSelectStyle(style.style)}
          className={`flex justify-center items-center w-[50px] h-[50px] overflow-hidden p-3 rounded-full shadow-md transition-all ease-linear`}
        >
          <Image src={style.icon} alt="menu icon" />
        </div>
      ))}
    </div>
  );
}
