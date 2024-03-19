import { configureStore } from "@reduxjs/toolkit";
import { pasienSlice } from "./pasienReducers";
import { dirtyFormSlice } from "./dirtyFormReducers";
import cartReducers from "./cartReducers";

export const store = configureStore({
  reducer: {
    pasien: pasienSlice.reducer,
    // tabelPasien: tabelPasienSlice.reducer,
    dirtyFormSlice: dirtyFormSlice.reducer,
    cart: cartReducers,
  },
});

// import {configureStore} from '@reduxjs/toolkit';
// import cartReducers from './cartReducers';
// // import todosReducer from '../features/todos/todosSlice';
// // import filtersReducer from '../features/filters/filtersSlice';

// export const store = configureStore({
//   reducer: {
//     cart: cartReducers,
//   },
// });
