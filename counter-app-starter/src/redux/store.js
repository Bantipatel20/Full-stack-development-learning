import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/CounterSlice"; // ✅ default export

export const store = configureStore({
  reducer: {
    counter: counterReducer, // ✅ key must match your state access in useSelector
  },
});
