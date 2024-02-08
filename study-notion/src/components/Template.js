import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import frameImage from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="template-page">
      <div className="template-heading">
        <h1>{title}</h1>
        <p>
          <span className="span1">{desc1}</span>
          <br></br>
          <span className="span2">{desc2}</span>
        </p>
        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className="template-hr">
          <div className="template-line"></div>
          <p>OR</p>
          <div className="template-line"></div>
        </div>
        <button className="google-button">
          <p className="google-button-icon">
            <FcGoogle></FcGoogle>
          </p>
          <p className="google-button-text">Sign in with Google</p>
        </button>
      </div>

      <div className="template-image">
        <img
          className="template-img1"
          src={frameImage}
          alt="Pattern"
          width={420}
          height={390}
          loading="lazy"
        ></img>
        <img
          className="template-img2"
          src={image}
          alt="Students"
          width={420}
          height={380}
          loading="lazy"
        ></img>
      </div>
    </div>
  );
};

export default Template;
