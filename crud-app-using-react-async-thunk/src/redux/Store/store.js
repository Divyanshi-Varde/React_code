import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Features/userSlice";

const store = configureStore({
  reducer: {
    crud: userSlice,
  },
});

export default store;
