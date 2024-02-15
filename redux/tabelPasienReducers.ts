import { createSlice } from "@reduxjs/toolkit";

const initialState: TabelPasienSliceState[] = [];

export const tabelPasienSlice = createSlice({
  name: "pasien",
  initialState,
  reducers: {
    setTabelPasien: (state, action) => {
      state.push(action.payload);
    },
  },
});

export interface TabelPasienSliceState {
  kd_pasien: string;
  no_pengenal: string;
  nama: string;
  tgl_lahir: string;
}
