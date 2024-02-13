import React from "react";
import Tag from "./components/Tag";
import Random from "./components/Random";

function App() {
  return (
    <div className="container">
      <h1 className="container-heading">RANDOM GIFS</h1>
      <div>
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App; 
