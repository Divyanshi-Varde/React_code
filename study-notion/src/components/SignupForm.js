import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords doesn't match!");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account created!");
    const accountData = { ...formData };
    console.log("Printing acoount data.....");
    console.log(formData);
    navigate("/dashboard");
  }
  return (
    <div>
      {/* student-instructor tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              placeholder="Enter first name"
              name="fname"
              id="fname"
              value={formData.fname}
              onChange={changeHandler}
            ></input>
          </label>
          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              placeholder="Enter last name"
              name="lname"
              value={formData.lname}
              onChange={changeHandler}
            ></input>
          </label>
        </div>

        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            onChange={changeHandler}
            placeholder="Enter email address"
            type="email"
            name="email"
            value={FormData.email}
          ></input>
        </label>

        <label>
          <p>
            Create Password<sup>*</sup>
          </p>
          <input
            required
            onChange={changeHandler}
            placeholder="Enter password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
          ></input>
          <span
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>
        <label>
          <p>
            Confirm Password<sup>*</sup>
          </p>
          <input
            required
            onChange={changeHandler}
            placeholder="Confirm password"
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
          ></input>
          <span
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
