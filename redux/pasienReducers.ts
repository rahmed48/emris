import { createSlice } from "@reduxjs/toolkit";

const initialState: PasienSliceState = {
  kd_pasien: "",
  no_pengenal: "",
  nama: "",
  tgl_lahir: "",
};

export const pasienSlice = createSlice({
  name: "pasien",
  initialState,
  reducers: {
    setPasien: (state, action) => {
      const { kd_pasien, no_pengenal, nama, tgl_lahir } = action.payload;
      state.kd_pasien = kd_pasien;
      state.no_pengenal = no_pengenal;
      state.nama = nama;
      state.tgl_lahir = tgl_lahir;
    },
  },
});

export interface PasienSliceState {
  kd_pasien: string;
  no_pengenal: string;
  nama: string;
  tgl_lahir: string;
}
