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
        <p>
          Email Address<sup>*</sup>
        </p>
        <input
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
        <p>
          Password<sup>*</sup>
        </p>
        <input
          required
          onChange={changeHandler}
          placeholder="Enter password"
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={FormData.password}
        ></input>
        <span
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>

        <Link to="#">
          <p>Forgot Password</p>
        </Link>
      </label>

      <button>Sign In</button>
    </form>
  );
};

export default LoginForm;
