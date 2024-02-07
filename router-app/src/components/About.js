import React from "react";
import { useNavigate } from "react-router-dom";

const About = (props) => {
  const navigate = useNavigate();
  function changeHandler() {
    //move to labs page
    navigate("/labs");
  }
  function backHandler() {
    navigate(-1);
  }
  return (
    <div>
      <div>
        <h1>This is About Page</h1>
        <button onClick={changeHandler}>Move to labs page</button>
        <button onClick={backHandler}>Go back</button>
      </div>
    </div>
  );
};

export default About;
