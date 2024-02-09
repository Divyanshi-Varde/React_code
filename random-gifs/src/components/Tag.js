import React from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("");
  const { gif, loading, getData } = useGif(tag);

  function clickHandler() {
    getData(tag);
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="tag-container">
      <h1 className="tag-heading">Random {tag} Gif</h1>

      {loading ? (
        <Spinner />
      ) : (
        <img
          className="tag-image"
          src={gif}
          width={300}
          height={200}
          alt="image1"
        ></img>
      )}

      <input
        className="tag-input-field"
        type="text"
        placeholder="Enter anything..."
        value={tag}
        onChange={changeHandler}
      ></input>
      <button className="tag-button" onClick={clickHandler}>
        Generate
      </button>
    </div>
  );
};

export default Tag;
