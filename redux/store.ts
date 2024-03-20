import { configureStore } from "@reduxjs/toolkit";
import { pasienSlice, PasienType } from "./pasienReducers";
import { dirtyFormSlice, dirtyFormType } from "./dirtyFormReducers";
import cartReducers from "./cartReducers";

export const store = configureStore({
  reducer: {
    pasien: pasienSlice.reducer,
    dirtyFormSlice: dirtyFormSlice.reducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;

export type storeType = {
  pasien: PasienType;
  dirtyForm: dirtyFormType;
};
