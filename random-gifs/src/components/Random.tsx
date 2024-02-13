import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, getData } = useGif("");

  function clickHandler() {
    getData("");
  }

  return (
    <div className="random-container">
      <h1 className="random-heading"> Some Random Gif</h1>
      {loading ? (
        <Spinner />
      ) : (
        <img
          className="random-image"
          src={gif}
          width={300}
          height={200}
          alt="image1"
        ></img> 
      )}

      <button className="random-button" onClick={clickHandler}>
        Generate
      </button>
    </div>
  );
};

export default Random;
