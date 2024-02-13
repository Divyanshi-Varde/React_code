import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./redux/slices/counterSlice";

const store = configureStore({
  reducer: { counter: CounterSlice },
});

export default store;
