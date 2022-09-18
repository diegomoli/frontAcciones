import { createSlice } from "@reduxjs/toolkit";

export const symbolSlice = createSlice({
  name: "symbol",
  initialState: {
    simbolo: {},
  },
  reducers: {
    addSymbol: (state, { payload }) => {
      state.simbolo = payload;
    },
  },
});

export const { addSymbol } = symbolSlice.actions;
