import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function decrementHandler() {
    setCount(count - 1);
  }
  function incrementHandler() {
    setCount(count + 1);
  }
  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="App">
      <div className="text">Increment & Decrement</div>
      <div className="Bg-Box">
        <button className="Decrement" onClick={decrementHandler}>
          -
        </button>
        <div className="variableCount">{count}</div>
        <button className="Increment" onClick={incrementHandler}>
          +
        </button>
      </div>

      <button className="Reset" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
}

export default App;
