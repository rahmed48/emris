"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export type RuanganType = {
  unit: string;
  kd_unit: string;
  nama_unit: string;
  total_pasien: number;
  onClick: () => void;
};

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const { unit }: { unit: string } = useParams();

  const [dataRuangan, setDataRuangan] = useState<RuanganType[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    axios.get(`${process.env.BASE_URL}/unit/${unit}`).then((res) => {
      setDataRuangan(res.data.data);
      setTitle(res.data.bagian);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w-full">
      <h1 className="text-neutral font-semibold text-xl">{title}</h1>
      <h1 className="text-neutral font-light mt-2">
        Pilih Ruang / Klinik Pelayanan Pasien
      </h1>
      <div className="grid grid-cols-3 gap-6 mt-4 px-4">
        {dataRuangan.map((val, index) => {
          return (
            <DataRuangan
              key={index}
              unit={unit}
              kd_unit={val.kd_unit}
              nama_unit={val.nama_unit}
              total_pasien={val.total_pasien}
              onClick={() => {
                router.push(`/home/pelayanan/${unit}/${val.kd_unit}`);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

const DataRuangan = ({
  nama_unit,
  total_pasien,
  onClick,
}: RuanganType) => {
  return (
    <div onClick={onClick}>
      <div className="shadow-md rounded-2xl p-4 w-auto hover:scale-105 cursor-pointer border-accent border-4 bg-primary/65">
        <div className="gap-4">
          <h1 className="font-semibold text-accent-content">{nama_unit}</h1>
          <h1 className="text-sm text-accent-content">
            Pasien :{" "}
            <span className="text-sm text-accent-content">{total_pasien}</span>
          </h1>
        </div>
      </div>
    </div>
    // </Link>
  );
};
