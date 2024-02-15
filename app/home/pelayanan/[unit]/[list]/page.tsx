"use client";

import TabelPasien from "@/components/TabelPasien";
import { tabelPasienSlice } from "@/redux/tabelPasienReducers";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { unit, list }: { unit: string; list: string } = useParams();
  // const { unit }: { unit: string } = useParams();
  // const dataPasien = useSelector((state: any) => state.pasien);
  // console.log(dataPasien);

  // const count = useSelector(selectCount);
  const [isHover, setIsHover] = useState<string>();
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const [pasien, setPasien] = useState([
  //   {
  //     id: 1,
  //     nama: "Andi Nurdiansyah Sitepu",
  //     jenisKelamin: "Laki-Laki",
  //     umur: 20,
  //     noIdentitas: "1174030204870001",
  //     alamat: "Seulalah, Langsa Lama",
  //     noRM: "0-23-45-45",
  //     noReg: "1-02042024-00001",
  //     asuransi: "BPJS Kesehatan",
  //     penjamin: "PBI APBD",
  //     noSEP: "0105R00103042400001",
  //     statusPelayanan: [
  //       {
  //         id: 1,
  //         name: "Pemeriksaan Dokter",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 2,
  //         name: "Laboratorium",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 3,
  //         name: "Obat",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 4,
  //         name: "Radiologi",
  //         status: "Belum Selesai",
  //         kodeStatus: 0,
  //       },
  //     ],
  //     keterangan:
  //       "Order Tindakan dari: dr Gunardi, Sp.PD Selesai Order Tindakan dari: dr Gunardi, Sp.PD Selesai Order Tindakan dari: dr Gunardi, Sp.PD Selesai",
  //     statusSelesai: "Selesai",
  //   },
  //   {
  //     id: 2,
  //     nama: "Nora Gamisa",
  //     jenisKelamin: "Perempuan",
  //     umur: 43,
  //     noIdentitas: "1174030204870002",
  //     alamat: "TM Bahrum, Langsa Barat",
  //     noRM: "0-23-35-12",
  //     noReg: "1-02042024-00001",
  //     asuransi: "BPJS Tenaga Kerja",
  //     penjamin: "-",
  //     noSEP: "0105R00103042400001",
  //     statusPelayanan: [
  //       {
  //         id: 1,
  //         name: "Pemeriksaan Dokter",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 2,
  //         name: "Laboratorium",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //     ],
  //     keterangan: "",
  //     statusSelesai: "Rujuk Keluar",
  //   },
  //   {
  //     id: 3,
  //     nama: "Adam Yordan",
  //     jenisKelamin: "Laki-Laki",
  //     umur: 26,
  //     noIdentitas: "1174030204870003",
  //     alamat: "Kampung jawa baru, Langsa Kota",
  //     noRM: "0-13-65-73",
  //     noReg: "1-02042024-00001",
  //     asuransi: "Umum",
  //     penjamin: "-",
  //     noSEP: "-",
  //     statusPelayanan: [
  //       {
  //         id: 1,
  //         name: "Pemeriksaan Dokter",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 2,
  //         name: "Laboratorium",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 4,
  //         name: "Radiologi",
  //         status: "Belum Selesai",
  //         kodeStatus: 0,
  //       },
  //     ],
  //     keterangan: "Konsul Intern dari: dr Gunardi, Sp.PD",
  //     statusSelesai: "Selesai",
  //   },
  //   {
  //     id: 1,
  //     nama: "Andi Nurdiansyah Sitepu",
  //     jenisKelamin: "Laki-Laki",
  //     umur: 20,
  //     noIdentitas: "1174030204870001",
  //     alamat: "Seulalah, Langsa Lama",
  //     noRM: "0-23-45-45",
  //     noReg: "1-02042024-00001",
  //     asuransi: "BPJS Kesehatan",
  //     penjamin: "PBI APBD",
  //     noSEP: "0105R00103042400001",
  //     statusPelayanan: [
  //       {
  //         id: 1,
  //         name: "Pemeriksaan Dokter",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 2,
  //         name: "Laboratorium",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 3,
  //         name: "Obat",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 4,
  //         name: "Radiologi",
  //         status: "Belum Selesai",
  //         kodeStatus: 0,
  //       },
  //     ],
  //     keterangan:
  //       "Order Tindakan dari: dr Gunardi, Sp.PD Selesai Order Tindakan dari: dr Gunardi, Sp.PD Selesai Order Tindakan dari: dr Gunardi, Sp.PD Selesai",
  //     statusSelesai: "Selesai",
  //   },
  //   {
  //     id: 2,
  //     nama: "Nora Gamisa",
  //     jenisKelamin: "Perempuan",
  //     umur: 43,
  //     noIdentitas: "1174030204870002",
  //     alamat: "TM Bahrum, Langsa Barat",
  //     noRM: "0-23-35-12",
  //     noReg: "1-02042024-00001",
  //     asuransi: "BPJS Tenaga Kerja",
  //     penjamin: "-",
  //     noSEP: "0105R00103042400001",
  //     statusPelayanan: [
  //       {
  //         id: 1,
  //         name: "Pemeriksaan Dokter",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 2,
  //         name: "Laboratorium",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //     ],
  //     keterangan: "",
  //     statusSelesai: "Rujuk Keluar",
  //   },
  //   {
  //     id: 3,
  //     nama: "Adam Yordan",
  //     jenisKelamin: "Laki-Laki",
  //     umur: 26,
  //     noIdentitas: "1174030204870003",
  //     alamat: "Kampung jawa baru, Langsa Kota",
  //     noRM: "0-13-65-73",
  //     noReg: "1-02042024-00001",
  //     asuransi: "Umum",
  //     penjamin: "-",
  //     noSEP: "-",
  //     statusPelayanan: [
  //       {
  //         id: 1,
  //         name: "Pemeriksaan Dokter",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 2,
  //         name: "Laboratorium",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 4,
  //         name: "Radiologi",
  //         status: "Belum Selesai",
  //         kodeStatus: 0,
  //       },
  //     ],
  //     keterangan: "Konsul Intern dari: dr Gunardi, Sp.PD",
  //     statusSelesai: "Selesai",
  //   },
  //   {
  //     id: 1,
  //     nama: "Andi Nurdiansyah Sitepu",
  //     jenisKelamin: "Laki-Laki",
  //     umur: 20,
  //     noIdentitas: "1174030204870001",
  //     alamat: "Seulalah, Langsa Lama",
  //     noRM: "0-23-45-45",
  //     noReg: "1-02042024-00001",
  //     asuransi: "BPJS Kesehatan",
  //     penjamin: "PBI APBD",
  //     noSEP: "0105R00103042400001",
  //     statusPelayanan: [
  //       {
  //         id: 1,
  //         name: "Pemeriksaan Dokter",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 2,
  //         name: "Laboratorium",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 3,
  //         name: "Obat",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 4,
  //         name: "Radiologi",
  //         status: "Belum Selesai",
  //         kodeStatus: 0,
  //       },
  //     ],
  //     keterangan:
  //       "Order Tindakan dari: dr Gunardi, Sp.PD Selesai Order Tindakan dari: dr Gunardi, Sp.PD Selesai Order Tindakan dari: dr Gunardi, Sp.PD Selesai",
  //     statusSelesai: "Selesai",
  //   },
  //   {
  //     id: 2,
  //     nama: "Nora Gamisa",
  //     jenisKelamin: "Perempuan",
  //     umur: 43,
  //     noIdentitas: "1174030204870002",
  //     alamat: "TM Bahrum, Langsa Barat",
  //     noRM: "0-23-35-12",
  //     noReg: "1-02042024-00001",
  //     asuransi: "BPJS Tenaga Kerja",
  //     penjamin: "-",
  //     noSEP: "0105R00103042400001",
  //     statusPelayanan: [
  //       {
  //         id: 1,
  //         name: "Pemeriksaan Dokter",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 2,
  //         name: "Laboratorium",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //     ],
  //     keterangan: "",
  //     statusSelesai: "Rujuk Keluar",
  //   },
  //   {
  //     id: 3,
  //     nama: "Adam Yordan",
  //     jenisKelamin: "Laki-Laki",
  //     umur: 26,
  //     noIdentitas: "1174030204870003",
  //     alamat: "Kampung jawa baru, Langsa Kota",
  //     noRM: "0-13-65-73",
  //     noReg: "1-02042024-00001",
  //     asuransi: "Umum",
  //     penjamin: "-",
  //     noSEP: "-",
  //     statusPelayanan: [
  //       {
  //         id: 1,
  //         name: "Pemeriksaan Dokter",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 2,
  //         name: "Laboratorium",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 4,
  //         name: "Radiologi",
  //         status: "Belum Selesai",
  //         kodeStatus: 0,
  //       },
  //     ],
  //     keterangan: "Konsul Intern dari: dr Gunardi, Sp.PD",
  //     statusSelesai: "Selesai",
  //   },
  //   {
  //     id: 1,
  //     nama: "Andi Nurdiansyah Sitepu",
  //     jenisKelamin: "Laki-Laki",
  //     umur: 20,
  //     noIdentitas: "1174030204870001",
  //     alamat: "Seulalah, Langsa Lama",
  //     noRM: "0-23-45-45",
  //     noReg: "1-02042024-00001",
  //     asuransi: "BPJS Kesehatan",
  //     penjamin: "PBI APBD",
  //     noSEP: "0105R00103042400001",
  //     statusPelayanan: [
  //       {
  //         id: 1,
  //         name: "Pemeriksaan Dokter",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 2,
  //         name: "Laboratorium",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 3,
  //         name: "Obat",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 4,
  //         name: "Radiologi",
  //         status: "Belum Selesai",
  //         kodeStatus: 0,
  //       },
  //     ],
  //     keterangan:
  //       "Order Tindakan dari: dr Gunardi, Sp.PD Selesai Order Tindakan dari: dr Gunardi, Sp.PD Selesai Order Tindakan dari: dr Gunardi, Sp.PD Selesai",
  //     statusSelesai: "Selesai",
  //   },
  //   {
  //     id: 2,
  //     nama: "Nora Gamisa",
  //     jenisKelamin: "Perempuan",
  //     umur: 43,
  //     noIdentitas: "1174030204870002",
  //     alamat: "TM Bahrum, Langsa Barat",
  //     noRM: "0-23-35-12",
  //     noReg: "1-02042024-00001",
  //     asuransi: "BPJS Tenaga Kerja",
  //     penjamin: "-",
  //     noSEP: "0105R00103042400001",
  //     statusPelayanan: [
  //       {
  //         id: 1,
  //         name: "Pemeriksaan Dokter",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 2,
  //         name: "Laboratorium",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //     ],
  //     keterangan: "",
  //     statusSelesai: "Rujuk Keluar",
  //   },
  //   {
  //     id: 3,
  //     nama: "Adam Yordan",
  //     jenisKelamin: "Laki-Laki",
  //     umur: 26,
  //     noIdentitas: "1174030204870003",
  //     alamat: "Kampung jawa baru, Langsa Kota",
  //     noRM: "0-13-65-73",
  //     noReg: "1-02042024-00001",
  //     asuransi: "Umum",
  //     penjamin: "-",
  //     noSEP: "-",
  //     statusPelayanan: [
  //       {
  //         id: 1,
  //         name: "Pemeriksaan Dokter",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 2,
  //         name: "Laboratorium",
  //         status: "Selesai",
  //         kodeStatus: 1,
  //       },
  //       {
  //         id: 4,
  //         name: "Radiologi",
  //         status: "Belum Selesai",
  //         kodeStatus: 0,
  //       },
  //     ],
  //     keterangan: "Konsul Intern dari: dr Gunardi, Sp.PD",
  //     statusSelesai: "Selesai",
  //   },
  // ]);

  const [pasien, setPasien] = useState<any>([]);
  const columns = [
    {
      name: "No. RM",
      selector: (row: any) => row.kd_pasien,
      sortable: true,
    },
    {
      name: "No. Pengenal",
      selector: (row: any) => row.no_pengenal,
      sortable: true,
    },
    {
      name: "Nama",
      selector: (row: any) => row.nama,
      sortable: true,
    },
    {
      name: "Tanggal Lahir",
      selector: (row: any) => row.tgl_lahir,
      sortable: true,
    },
  ];

  useEffect(() => {
    const getDataPasien = async () => {
      try {
        const data = await axios.get(
          `https://e-rsud.langsakota.go.id/api-satu-sehat/api/patients`
        );
        dispatch(tabelPasienSlice.actions.setTabelPasien(data.data.data));
        setPasien(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataPasien();
  }, []);

  const detailPasien = (pasien: any) => {
    console.log(pasien);
    router.push(`/home/pelayanan/${unit}/${list}/asuhan`);

    // dispatch(setDataPasien(val));
    // router.push("/asuhan/perawatan");
    // router.push("/home/asuhan/medis");
  };

  return (
    <div className="bg-neutral-content shadow-md rounded-2xl flex flex-row p-4">
      <div className="w-full">
        <h1 className="text-neutral font-semibold text-xl">Daftar Pasien</h1>
        <TabelPasien pasien={pasien} onPressDetail={detailPasien} />
      </div>
    </div>
  );
};

export default Page;
