import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  //se l'utente scolla fino al footer cambio questo stato in true
  //e rimpiciollisco il header per avere maggior spazio e
  //dare uno stile piu bello.
  utenteHaScollatoFinoAInizioFooter: false,
  isContattaProgrammatoreClicked: false,
};

const mainSlice = createSlice({
  name: "forDev",
  initialState,

  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setUtenteHaScollatoFinoAInizioFooter: (state, action) => {
      state.utenteHaScollatoFinoAInizioFooter = action.payload;
    },
    setIstContattaProgrammatoreClicked: (state, action) => {
      state.isContattaProgrammatoreClicked = action.payload;
    },
  },
});

export const {
  setIsOpen,
  setUtenteHaScollatoFinoAInizioFooter,
  setIstContattaProgrammatoreClicked,
} = mainSlice.actions;

export default mainSlice.reducer;
