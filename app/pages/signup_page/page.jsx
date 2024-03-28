"use client";

import Wrapper from "@/components/Wrapper";
import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import SignInForm from "@/components/SignInForm";

export default function SignUpPage() {
  return (
    <Wrapper>
      <div className="relative flex flex-col justify-center items-center ">
        <div className="flex justify-center items-center flex-col px-10">
          <h2 className="text-oxfordBlue text-center font-semibold text-lg">
            welcome to
          </h2>
          <div className="flex justify-center items-center space-x-2">
            <div className="w-11 flex items-center justify-center rounded-full overflow-hidden">
              <Image src={logo} alt="application logo" />
            </div>
            <h2 className="font-bold text-oxfordBlue text-xl">QR Master</h2>
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-5 text-sm">
          <p className="text-oxfordBlue">Already have an account?</p>
          <Link
            className="text-tuftsBlue border-b-2 border-tuftsBlue "
            href="/pages/login_page"
          >
            Log in
          </Link>
        </div>

        <SignInForm />

        <div className="relative mt-6 w-full flex flex-col justify-center items-center"></div>
        <p className="text-center text-sm mt-5 text-oxfordBlue">
          By clicking 'Sign in' you agree to Dusk's{" "}
          <span className="font-semibold text-tuftsBlue">Privacy Policy</span>{" "}
          and{" "}
          <span className="font-semibold text-tuftsBlue">
            Terms of Services
          </span>
        </p>
      </div>
    </Wrapper>
  );
}
