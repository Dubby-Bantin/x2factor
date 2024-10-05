import React from "react";
import { useState } from "react";
import "../../src/styles/authpage.css";
import {
  ClosedEyes,
  OpenEyes,
  SvgCustomerServiceComponent,
  SvgEmailComponent,
  SvgPasswordComponent,
  SvgPhoneComponent,
} from "../home/components/svgcomponents";
import TopNavigation from "../home/components/top_navigation";
import PhoneInput from "./phoneInput";
import EmailInput from "./emailinputComp";

function AuthPage() {
  const [selectedLoginMethod, setSelectedLoginMethod] = useState("phone");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="container">
      <div className="topOfAuthPage">
        <TopNavigation />
        <div className="littleMargin"></div>
        <span className="bolden">Log In</span>
        <p className="loginText">
          please log in with your phone number or email <br />
          if you forget your password, please contact customer service
        </p>
      </div>
      <div className="mainContainer">
        <div className="typesOfLogin">
          <div
            className={`phoneLogin loginmethod ${
              selectedLoginMethod === "phone" ? "chosenLoginMethod" : ""
            }`}
            onClick={() => setSelectedLoginMethod("phone")}
          >
            <SvgPhoneComponent
              fill={selectedLoginMethod === "phone" && "#508c9b"}
            />
            <p>Login with Phone</p>
          </div>
          <div
            className={`emailLogin loginmethod ${
              selectedLoginMethod === "email" ? "chosenLoginMethod" : ""
            }`}
            onClick={() => setSelectedLoginMethod("email")}
          >
            <SvgEmailComponent
              fill={selectedLoginMethod === "email" && "#508c9b"}
            />
            <p>Login with Email</p>
          </div>
        </div>
        <div className="currentLoginMethod">
          <div
            className="line"
            style={{
              backgroundColor: selectedLoginMethod === "phone" && "#508c9b",
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundColor: selectedLoginMethod === "email" && "#508c9b",
            }}
          ></div>
        </div>
        <div className="littleMargin"></div>
        {selectedLoginMethod === "phone" ? <PhoneInput /> : <EmailInput />}
        <div className="littleMargin"></div>
        <div>
          <SvgPasswordComponent fill={"#508c9b"} /> <span>Password</span>
        </div>
        <div className="littleMargin"></div>
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "inline-block",
          }}
        >
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="please enter your password"
            // style={{ paddingRight: "30px", width: "100%" }}
          />
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          >
            {isPasswordVisible ? <OpenEyes /> : <ClosedEyes />}
            {/* <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} /> */}
          </span>
        </div>
        <div className="littleMargin"></div>
        <div className="littleMargin"></div>

        <div>
          <button className="authButton loginButton">Log In</button>
          <button className="authButton registerButton">Register</button>
        </div>

        <div className="helpButtons">
          <div className="helpButton">
            <SvgPasswordComponent fill={"#508c9b"} />
            <p>Forgot password</p>
          </div>
          <div className="helpButton">
            <SvgCustomerServiceComponent fill={"#508c9b"} />
            <p>Customer Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
