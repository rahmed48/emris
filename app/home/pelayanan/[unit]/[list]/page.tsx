"use client";

import Breadcumbs from "@/components/Items/Breadcumbs";
import TabelPasien from "@/components/TabelPasien";
import { faLevelUpAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

const Page = () => {
  const router = useRouter();
  const { unit, list }: { unit: string; list: string } = useParams();

  const [isHover, setIsHover] = useState<string>();
  const [listPasien, setListPasien] = useState<PasienType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [bagian, setBagian] = useState<string>("");
  const [subBagian, setSubBagian] = useState<string>("");

  useEffect(() => {
    axios.get(`${process.env.BASE_URL}/pasien/${list}`).then((res) => {
      console.log(res.data);
      setListPasien(res.data.data);
      setBagian(res.data.bagian);
      setSubBagian(res.data.unit);
      setIsLoading(false);
    });
  }, []);

  const detailPasien = (pasien: any) => {
    router.push(`/${unit}/${list}/asuhan-medis`);
  };

  const customPath = () => {
    return {
      renderPath: `/home/pelayanan/${bagian}/${subBagian}`,
      linkPath: `/home/pelayanan/${unit}/${list}`,
    };
  };

  return (
    <>
      <Breadcumbs customPath={customPath()} />
      <div className="bg-neutral-content shadow-md rounded-2xl flex flex-row p-4">
        <div className="w-full">
          <h1 className="text-neutral font-semibold text-xl">
            Daftar Pasien - {bagian} - {subBagian}
          </h1>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <TabelPasien
              listPasien={listPasien}
              onPressDetail={detailPasien}
            ></TabelPasien>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
