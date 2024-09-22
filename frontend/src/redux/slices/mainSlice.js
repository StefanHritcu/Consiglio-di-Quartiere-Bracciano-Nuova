import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const mainSlice = createSlice({
  name: "forDev",
  initialState,

  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = mainSlice.actions;

export default mainSlice.reducer;
