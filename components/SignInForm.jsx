import { useState, useEffect, useRef } from "react";
import InputMsg from "./InputMsg";
import LargeButton from "./LargeButton";
import { useRouter } from "next/navigation";

const USER_NAME_REGEX = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
const USER_MAIL_REGEX = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
const USER_PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;


import { exportContext } from "./useStateContext/StateContext";

export default function SignInForm() {
  const { setGeneralMsg, setShowMsg } = exportContext();

  const [isSignup, setIsSignup] = useState(false);

  const [passwordMatched, setPasswordMatched] = useState(true);

  const fullNameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const router = useRouter()

  const [signInInputs, setSignInInputs] = useState({
    fullName: "",
    mail: "",
    password: "",
    confirmPassword: "",
  });

  const [signInValid, setSignInValid] = useState({
    fullName: false,
    mail: false,
    password: false,
  });

  const [signInFocus, setSignInFocus] = useState({
    fullName: false,
    mail: false,
    password: false,
    confirmPassword: false,
  });

  const handleFullName = (e) => {
    setSignInInputs({
      ...signInInputs,
      fullName: e.target.value,
    });
  };

  const handleMail = (e) => {
    setSignInInputs({
      ...signInInputs,
      mail: e.target.value,
    });
  };

  const handlePassword = (e) => {
    setSignInInputs({
      ...signInInputs,
      password: e.target.value,
    });
  };

  const handleConfirmPwd = (e) => {
    setSignInInputs({
      ...signInInputs,
      confirmPassword: e.target.value,
    });
  };

  const handleFullNameFocus = () => {
    setSignInFocus({
      ...signInFocus,
      fullName: true,
    });
  };

  const handleMailFocus = () => {
    setSignInFocus({
      ...signInFocus,
      mail: true,
    });
  };

  const handlePasswordFocus = () => {
    setSignInFocus({
      ...signInFocus,
      password: true,
    });
  };

  const handleConfirmPwdFocus = () => {
    setSignInFocus({
      ...signInFocus,
      confirmPassword: true,
    });
  };

  const handleFullNameBlur = () => {
    setSignInFocus({
      ...signInFocus,
      fullName: false,
    });
  };

  const handleMailBlur = () => {
    setSignInFocus({
      ...signInFocus,
      mail: false,
    });
  };

  const handlePasswordBlur = () => {
    setSignInFocus({
      ...signInFocus,
      password: false,
    });
  };

  const handleConfirmPwdBlur = () => {
    setSignInFocus({
      ...signInFocus,
      confirmPassword: false,
    });
  };

  useEffect(() => {
    const correctSignInName = USER_NAME_REGEX.test(signInInputs.fullName);
    const correctSignInMail = USER_MAIL_REGEX.test(signInInputs.mail);
    const correctPassword = USER_PASSWORD_REGEX.test(signInInputs.password);

    setSignInValid({
      fullName: correctSignInName,
      mail: correctSignInMail,
      password: correctPassword,
    });
  }, [signInInputs.fullName, signInInputs.mail, signInInputs.password]);

  const handleSignInSubmit = async (e) => {
    e.preventDefault();

    if (
      !signInInputs.fullName ||
      !signInInputs.mail ||
      !signInInputs.password ||
      signInInputs.password !== signInInputs.confirmPassword
    ) {
      setGeneralMsg("Check the form and make sure you meet all requirments.");
      setShowMsg(true);
      setIsSignup(false);

      return;
    }

    setSignInInputs({
      fullName: "",
      mail: "",
      password: "",
      confirmPassword: "",
    });
    setPasswordMatched(true);
    setShowMsg(false);
    setIsSignup(true);
    router.push('/pages/home')
  };

  return (
    <form className="mt-5 w-full" onSubmit={handleSignInSubmit}>
      <div
        className={`w-full shadow-sm rounded-2xl overflow-hidden ${
          signInFocus.fullName ? "border-oxfordBlue" : null
        } border-2`}
      >
        <input
          className="w-full h-full outline-none border-none p-4 bg-lightCulture"
          type="text"
          placeholder="Full Name"
          value={signInInputs.fullName}
          onChange={handleFullName}
          onFocus={handleFullNameFocus}
          onBlur={handleFullNameBlur}
          ref={fullNameRef}
        />
      </div>

      {!signInFocus.fullName &&
      signInInputs.fullName &&
      !signInValid.fullName ? (
        <InputMsg msg="Must include first and last names and must all be letters" />
      ) : null}

      <div
        className={`w-full shadow-sm rounded-2xl overflow-hidden ${
          signInFocus.mail ? "border-oxfordBlue" : null
        } border-2 my-4`}
      >
        <input
          className="w-full h-full outline-none border-none p-4 bg-lightCulture"
          type="text"
          placeholder="Email"
          value={signInInputs.mail}
          onChange={handleMail}
          onFocus={handleMailFocus}
          onBlur={handleMailBlur}
          ref={emailRef}
        />
      </div>

      {!signInFocus.mail && signInInputs.mail && !signInValid.mail ? (
        <InputMsg msg="Wrong email address! please check the address and make sure it includes '@' symbol" />
      ) : null}

      <div
        className={`w-full shadow-sm rounded-2xl overflow-hidden ${
          signInFocus.password ? "border-oxfordBlue" : null
        } border-2`}
      >
        <input
          className="w-full h-full outline-none border-none p-4 bg-lightCulture"
          type="password"
          placeholder="Password"
          value={signInInputs.password}
          onChange={handlePassword}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          ref={passwordRef}
        />
      </div>

      {!signInFocus.password &&
      signInInputs.password &&
      !signInValid.password ? (
        <InputMsg msg="Password must be at least 10 characters including symbols" />
      ) : null}

      <div
        className={`w-full shadow-sm rounded-2xl overflow-hidden ${
          signInFocus.confirmPassword ? "border-oxfordBlue" : null
        } border-2 mt-4`}
      >
        <input
          className="w-full h-full outline-none border-none p-4 bg-lightCulture"
          type="password"
          placeholder="Confirm password"
          value={signInInputs.confirmPassword}
          onChange={handleConfirmPwd}
          onFocus={handleConfirmPwdFocus}
          onBlur={handleConfirmPwdBlur}
        />
      </div>

      {!passwordMatched ? <InputMsg msg="Password mis-matched!" /> : null}

      <div className="mt-10">
        <LargeButton
          text={`Sign up`}
          routeText={`pages/signup_page`}
          backgroundStyle={`bg-tuftsBlue text-white`}
        />
      </div>
    </form>
  );
}
