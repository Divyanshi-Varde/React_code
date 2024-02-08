import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";


const LoginForm = ({ setIsLoggedIn }) => {
  const [FormData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }
  return (
    <form onSubmit={submitHandler}>
      <label>
        <p className="email-text">
          Email Address<sup className="required-icon">*</sup>
        </p>
        <input
          className="text-field"
          required
          onChange={changeHandler}
          placeholder="Enter email address"
          type="email"
          id="email"
          name="email"
          value={FormData.email}
        ></input>
      </label>
      <label>
        <p className="password-text">
          Password<sup className="required-icon">*</sup>
        </p>
        <input
          className="text-field"
          required
          onChange={changeHandler}
          placeholder="Enter password"
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={FormData.password}
        ></input>
        <span
          className="show-icon"
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>

        <Link className="forgot-pass-text" to="#">
          <p>Forgot Password</p>
        </Link>
      </label>

      <button className="sign-in-button">Sign In</button>
    </form>
  );
};

export default LoginForm;
