import React from "react";
import { useState } from "react";

function App() {
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");

  // function changeFirstNameHandler(event) {
  // console.log("Printing first name...");
  // console.log(event.target.value);
  //   console.log(fname);
  //   setFname(event.target.value);
  // }

  // function changeLastNameHandler(event) {
  // console.log("Printing last name...");
  // console.log(event.target.value);
  //   console.log(lname);
  //   setLname(event.target.value);
  // }
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });
  // console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally....printing the entire form ka data...");
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label name="fname">Enter First Name</label>
        <input
          type="text"
          placeholder="first name"
          name="fname"
          value={formData.fname}
          onChange={changeHandler}
        ></input>
        <br></br>
        <br></br>
        <label name="lname">Enter Last Name</label>
        <input
          type="text"
          placeholder="last name"
          name="lname"
          value={formData.lname}
          onChange={changeHandler}
        ></input>
        <br></br>
        <br></br>
        <label name="email">Enter Email</label>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        ></input>
        <br></br>
        <br></br>
        <label name="comments">Enter Email</label>
        <textarea
          type="text"
          placeholder="Enter you comments here.."
          rows={10}
          cols={30}
          name="comments"
          value={formData.comments}
          onChange={changeHandler}
        ></textarea>
        <br></br>
        <br></br>

        <label htmlFor="isVisible">Am i Visible?</label>
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        ></input>

        <br></br>
        <br></br>
        <fieldset>
          <legend>Mode</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            id="Online-mode"
            value="Online-mode"
            checked={formData.mode === "Online-mode"}
          ></input>
          <label htmlFor="Online-mode">Online-mode</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            id="Offline-mode"
            value="Offline-mode"
            checked={formData.mode === "Offline-mode"}
          ></input>
          <label htmlFor="Offline-mode">Offline-mode</label>
        </fieldset>
        <br></br>
        <br></br>
        <label htmlFor="favCar"></label>
        <select
          value={formData.favCar}
          name="favCar"
          onChange={changeHandler}
          id="favCar"
        >
          <option value="select">Select</option>
          <option value="Baleno">Baleno</option>
          <option value="BMW">BMW</option>
          <option value="Swift">Swift</option>
          <option value="Ford">Ford</option>
          <option value="Fortuner"> Fortuner</option>
        </select>
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
