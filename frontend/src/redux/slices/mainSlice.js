import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isLogged: false,
  //ARTICLES SELECTED
  articlesSelected: 0,
};

const mainSlice = createSlice({
  name: "forDev",
  initialState,

  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
    setArticlesSelected: (state, action) => {
      state.articlesSelected = action.payload;
    },
  },
});

export const { setIsOpen, setIsLogged, setArticlesSelected } =
  mainSlice.actions;

export default mainSlice.reducer;
