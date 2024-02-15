import { configureStore } from "@reduxjs/toolkit";
import { pasienSlice } from "./pasienReducers";
import { tabelPasienSlice } from "./tabelPasienReducers";

export const store = configureStore({
  reducer: {
    pasien: pasienSlice.reducer,
    tabelPasien: tabelPasienSlice.reducer,
  },
});
