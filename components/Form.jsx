"use client";

import { useState, useEffect, useRef } from "react";
import LargeButton from "./LargeButton";
import InputMsg from "./InputMsg";
import { exportContext } from "./useStateContext/StateContext";
import { useRouter } from "next/navigation";

const USER_MAIL_REGEX = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
const USER_PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

export default function Form() {
  const userMailRef = useRef();
  const userPasswordRef = useRef();

  const { generalMsg, setGeneralMsg, setShowMsg } = exportContext();

  const [isLogin, setIsLogin] = useState(false);

  const router = useRouter();

  const [loginInputs, setLoginInputs] = useState({
    userMail: "",
    userPassword: "",
  });

  const [validInputs, setValidInputs] = useState({
    userMail: false,
    userPassword: false,
  });

  const [userFocus, setUserFocus] = useState({
    userMail: false,
    userPassword: false,
  });

  const [toggleShowPassword, setToggleShowPassword] = useState(false);

  useEffect(() => {
    const correctMailInput = USER_MAIL_REGEX.test(loginInputs.userMail);
    const correctPwdInput = USER_PASSWORD_REGEX.test(loginInputs.userPassword);

    setValidInputs({
      userMail: correctMailInput,
      userPassword: correctPwdInput,
    });
  }, [loginInputs.userMail, loginInputs.userPassword]);

  const handleMail = (e) => {
    setLoginInputs({
      ...loginInputs,
      userMail: e.target.value,
    });
  };

  const handlePassword = (e) => {
    setLoginInputs({
      ...loginInputs,
      userPassword: e.target.value,
    });
  };

  const handlePasswordFocus = () => {
    setUserFocus({
      ...userFocus,
      userPassword: true,
    });
  };

  const handlePasswordBlur = () => {
    setUserFocus({
      ...userFocus,
      userPassword: false,
    });
  };

  const handleMailFocus = () => {
    setUserFocus({
      ...userFocus,
      userMail: true,
    });
  };

  const handleMailBlur = () => {
    setUserFocus({
      ...userFocus,
      userMail: false,
    });
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (!loginInputs.userMail || !loginInputs.userPassword) {
      setShowMsg(true);
      setGeneralMsg("Check the form and make sure you meet all requirments.");

      return;
    }

    setLoginInputs({
      userMail: "",
      userPassword: "",
    });

    setIsLogin(true);
    router.push("/pages/home");
  };

  return (
    <form className="mt-5 w-full" onSubmit={handleInputSubmit}>
      <div
        className={`w-full shadow-sm rounded-2xl overflow-hidden ${
          userFocus.userMail ? "border-oxfordBlue" : null
        } border-2`}
      >
        <input
          className="w-full h-full outline-none border-none p-4 bg-lightCulture"
          type="text"
          placeholder="Email"
          value={loginInputs.userMail}
          onChange={handleMail}
          onFocus={handleMailFocus}
          onBlur={handleMailBlur}
          ref={userMailRef}
        />
      </div>

      {!userFocus.userMail && loginInputs.userMail && !validInputs.userMail ? (
        <InputMsg msg="Wrong email address. Must include '@'" />
      ) : null}

      <div
        className={`w-full shadow-sm rounded-2xl overflow-hidden ${
          userFocus.userPassword ? "border-oxfordBlue" : null
        } border-2 mt-4 flex items-center justify-center space-x-2 p-4 bg-lightCulture`}
      >
        <input
          className="w-full h-full outline-none border-none bg-transparent"
          type={toggleShowPassword ? "text" : "password"}
          placeholder="Password"
          value={loginInputs.userPassword}
          onChange={handlePassword}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          ref={userPasswordRef}
        />
        <span
          onClick={() => setToggleShowPassword((prev) => !prev)}
          className="text-sm text-tuftsBlue cursor-pointer"
        >
          {toggleShowPassword ? "Hide" : "Show"}
        </span>
      </div>

      {!userFocus.userPassword &&
      loginInputs.userPassword &&
      !validInputs.userPassword ? (
        <InputMsg msg="Must be at least 10 characters including numbers and symbols" />
      ) : null}

      <div className="mt-10 w-full">
        <LargeButton
          text={`Log in`}
          //   routeText={`pages/home_screen`}
          backgroundStyle={`bg-tuftsBlue text-white`}
        />
      </div>
    </form>
  );
}
