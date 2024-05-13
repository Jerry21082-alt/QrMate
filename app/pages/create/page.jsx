// "use client";

// import Nav from "@/components/Nav";
// import Wrapper from "@/components/Wrapper";
// import { pdf, share, ticket, website } from "@/public";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { exportContext } from "@/components/useStateContext/StateContext";

// const selectQrcode = [
//   { icon: website, type: "website" },
//   { icon: share, type: "social media" },
//   { icon: ticket, type: "coupon" },
//   { icon: pdf, type: "PDF" },
// ];

// export default function CreatePage() {
//   const [selectFormat, setSelectFormat] = useState(0);
//   const { regenerateQrcode, headingTxt, type, setType } = exportContext();

//   const handleSelectFormat = (id, type) => {
//     setSelectFormat(id);
//     setType(type);
//   };

//   const router = useRouter();

//   const handleCreateCancel = () => {
//     router.push("/pages/home");
//     regenerateQrcode();
//   };

//   return (
//     <Wrapper>
//       <Nav />
//       <div className="flex justify-between items-center mt-14">
//         <button
//           onClick={handleCreateCancel}
//           className="w-[120px] h-[40px] rounded-md bg-white py-1 px-4 flex justify-center items-center space-x-2"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 30 30"
//             width="20px"
//             height="20px"
//           >
//             {" "}
//             <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
//           </svg>{" "}
//           <p className="text-sm">Cancel</p>
//         </button>

//         <Link
//           href={{
//             query: { type: type },
//             pathname: `/pages/previewQrcode/${type}`,
//           }}
//           className="rounded-md bg-red py-1 px-4 flex justify-center items-center space-x-2 w-[120px] h-[40px]"
//         >
//           <p className="text-white text-sm">Next</p>

//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             id="chevron"
//             width={35}
//             height={35}
//             fill="#FFFFFF"
//           >
//             <path d="M11 10L7.859 6.58a.695.695 0 0 1 0-.978.68.68 0 0 1 .969 0l3.83 3.908a.697.697 0 0 1 0 .979l-3.83 3.908a.68.68 0 0 1-.969 0 .695.695 0 0 1 0-.978L11 10z"></path>
//           </svg>
//         </Link>
//       </div>

//       <h1 className="text-center text-xl font-semibold mt-5 text-white">
//         Create QRcode
//       </h1>

//       <div className="flex items-center justify-between mt-8 space-x-3 bg-lightCulture p-4 rounded-md border border-culture">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           version="1.1"
//           viewBox="-5.0 -10.0 110.0 135.0"
//           width={35}
//           fill="#fff"
//         >
//           <g>
//             <path d="m47.398 78.398c-8.3008 0-16.102-3.1992-21.898-9.1016-5.8984-5.8008-9.1016-13.602-9.1016-21.898 0-8.3008 3.1992-16.102 9.1016-21.898 5.8984-5.8008 13.602-9.1016 21.898-9.1016 8.3008 0 16.102 3.1992 21.898 9.1016 5.8984 5.8984 9.1016 13.602 9.1016 21.898 0 8.3008-3.1992 16.102-9.1016 21.898-5.7969 5.9023-13.598 9.1016-21.898 9.1016zm0-56.797c-6.8984 0-13.398 2.6992-18.301 7.6016-4.8984 4.8984-7.6016 11.398-7.6016 18.301 0 6.8984 2.6992 13.398 7.6016 18.301 4.8984 4.8984 11.398 7.6016 18.301 7.6016 6.8984 0 13.398-2.6992 18.301-7.6016 4.8984-4.8984 7.6016-11.398 7.6016-18.301s-2.6992-13.504-7.5-18.402c-4.9023-4.8008-11.402-7.5-18.402-7.5z" />
//             <path d="m65.746 69.336 3.6055-3.6055 14.141 14.141-3.6055 3.6055z" />
//           </g>
//         </svg>{" "}
//         <input
//           placeholder="Search QR code type"
//           className="w-full bg-transparent outline-none border-none text-white"
//         />
//       </div>

//       <h2 className="text-center text-lg mt-5 text-white">
//         Select your QR code type
//       </h2>

//       <div className="flex justify-center items-center gap-5 flex-wrap mt-8">
//         {selectQrcode.map((select, i) => (
//           <div
//             onClick={() => handleSelectFormat(i, select.type)}
//             key={i}
//             className={`${
//               selectFormat === i ? "bg-red" : "bg-grey"
//             } w-[150px] rounded-md flex flex-col items-center justify-center py-5 border`}
//           >
//             <div className="flex justify-center items-center w-[30px]">
//               <Image src={select.icon} alt="qrcode format icons" />
//             </div>
//             <p
//               className={`${
//                 selectFormat === i ? "text-white" : "text-black"
//               } mt-4`}
//             >
//               {select.type}
//             </p>
//           </div>
//         ))}
//       </div>
//     </Wrapper>
//   );
// }
