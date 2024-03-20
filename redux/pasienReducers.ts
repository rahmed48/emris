import { createSlice } from "@reduxjs/toolkit";
// import { PasienType } from "@/app/home/pelayanan/[unit]/[list]/page";

const initialState: PasienType = {
  status: {
    kd_status: "",
    deskripsi: "",
  },
  antrian: {
    no_antrian: "",
    kode_booking_bpjs: "",
  },
  pasien: {
    kd_pasien: "",
    jenis_kelamin: "",
    nik: "",
    nama: "",
    gelar_depan: "",
    gelar_belakang: "",
    nama_lengkap: "",
    alamat: "",
    usia: {
      tahun: 0,
      tanggal_lahir: "",
      usia_formatted: "",
    },
  },
  asuransi: {
    asuransi: "",
    penjamin: "",
    no_sep: "",
  },
  status_pelayanan: [],
};

export const pasienSlice = createSlice({
  name: "pasien",
  initialState,
  reducers: {
    setPasien: (state, action) => {
      return action.payload;
      // const { kd_pasien, no_pengenal, nama, tgl_lahir } = action.payload;
      // state.kd_pasien = kd_pasien;
      // state.no_pengenal = no_pengenal;
      // state.nama = nama;
      // state.tgl_lahir = tgl_lahir;
    },
  },
});
export type StatusPelayananType = {
  id: number;
  name: string;
  status: string;
  kode_status: number;
};

export type PasienType = {
  status: {
    kd_status: string;
    deskripsi: string;
  };
  antrian: {
    no_antrian: string;
    kode_booking_bpjs: string;
  };
  
  pasien: {
    kd_pasien: string;
    jenis_kelamin: string;
    nik: string;
    nama: string;
    gelar_depan: string;
    gelar_belakang: string;
    nama_lengkap: string;
    alamat: string;
    usia: {
      tahun: number;
      tanggal_lahir: string;
      usia_formatted: string;
    };
  };
  asuransi: {
    asuransi: string;
    penjamin: string;
    no_sep: string;
  };
  status_pelayanan: StatusPelayananType[];
};
