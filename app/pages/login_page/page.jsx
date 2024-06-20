import Form from "@/components/Form";
import Wrapper from "@/components/Wrapper";
import LargeButton from "@/components/LargeButton";
import { googleLogo, logo } from "@/public";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="top-0 left-0 h-screen w-screen flex flex-col justify-center items-center p-2 md:px-96 bg-white fixed">
      <div className="flex justify-center items-center flex-col px-10">
        <h2 className="text-oxfordBlue text-center font-semibold text-2xl">
          welcome to
        </h2>
        <div className="flex justify-center items-center space-x-2">
          <div className="w-11 flex items-center justify-center rounded-full overflow-hidden">
            <Image src={logo} alt="application logo" />
          </div>
          <Link href="/">
            <h2 className="font-bold text-oxfordBlue text-xl">QR Master</h2>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-2 mt-5 text-sm">
        <p className="text-oxfordBlue">No account yet?</p>
        <Link
          className="text-tuftsBlue border-b-2 border-tuftsBlue "
          href="/pages/signup_page"
        >
          sign up
        </Link>
      </div>

      <Form />

      <div className="relative mt-3 w-full flex flex-col justify-center items-center">
        <p className="text-tuftsBlue my-2">Forgot your password?</p>
        <p className="text-oxfordBlue">or</p>

        <button className="w-full rounded-2xl p-4 text-sm outline-none border-none mt-4 bg-white shadow-md flex items-center justify-start space-x-2">
          <div className="w-[25px] flex items-center justify-center">
            <Image src={googleLogo} alt="google logo" />
          </div>
          <p className="text-tuftsBlue font-semibold text-sm">
            Sign in with Google Account
          </p>
        </button>
      </div>
    </div>
  );
}
