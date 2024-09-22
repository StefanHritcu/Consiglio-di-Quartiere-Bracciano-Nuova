import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./slices/mainSlice";

const store = configureStore({
  reducer: {
    forDev: mainSlice,
  },
});
export default store;
