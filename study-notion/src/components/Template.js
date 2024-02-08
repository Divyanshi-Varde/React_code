import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import frameImage from "../assets/frame.png";

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
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <button>Sign in with Google</button>
      </div>

      <div>
        <img
          src={frameImage}
          alt="Pattern"
          width={420}
          height={400}
          loading="lazy"
        ></img>
        <img
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
