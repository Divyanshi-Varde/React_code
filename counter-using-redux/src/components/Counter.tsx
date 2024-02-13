import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/slices/counterSlice";

const Counter = () => {
  const count = useSelector(
    (state: { counter: { value: number } }) => state.counter.value
  );

  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="text">Increment && Decrement</div>
      <div className="Bg-Box">
        <button className=" Increment" onClick={() => dispatch(increment())}>
          +
        </button>
        <div className="variableCount">{count}</div>

        <button className="Decrement" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>

      <button className="Reset" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
