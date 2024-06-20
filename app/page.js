import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { logo } from "@/public";
import Link from "next/link";
import LargeButton from "@/components/LargeButton";

const page = () => {
  return (
    <div className="fixed top-0 h-screen bg-white p-2 md:px-56 w-screen flex items-center justify-center">
      <div className=" h-[60vh] flex flex-col justify-center items-center w-full rounded-b-[30%]">
        <div className="w-1/2">
          <Image src={logo} alt="company logo" />
        </div>
        <h1 className="font-bold text-3xl mt-5 text-oxfordBlue">ScanMate QR</h1>
      </div>

      <div className="flex flex-col justify-center items-center mt-10 w-full">
        <Link href="/pages/signup_page" className="w-full">
          <LargeButton
            text="Sign up"
            backgroundStyle={`bg-tuftsBlue text-white`}
          />
        </Link>
        <Link href="/pages/login_page" className="w-full">
          <LargeButton
            text="Log in"
            backgroundStyle={`bg-white text-tuftsBlue`}
          />
        </Link>
        <Link href="/pages/home_screen" className="text-tuftsBlue mt-5">
          Skip for now
        </Link>
      </div>
    </div>
  );
};

export default page;
