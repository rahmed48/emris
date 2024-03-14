import { configureStore } from "@reduxjs/toolkit";
import { pasienSlice } from "./pasienReducers";
import { tabelPasienSlice } from "./tabelPasienReducers";
import { dirtyFormSlice } from "./dirtyFormReducers";

export const store = configureStore({
  reducer: {
    pasien: pasienSlice.reducer,
    tabelPasien: tabelPasienSlice.reducer,
    dirtyFormSlice: dirtyFormSlice.reducer,
  },
});
