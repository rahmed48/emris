"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const { unit }: { unit: string } = useParams();

  const [dataRuangan, setDataRuangan] = useState([
    {
      title: "Umum",
      total: 20,
      isCanVIew: false,
      url: `/home/pelayanan/${unit}/umum`,
    },
    {
      title: "Gigi",
      total: 2,
      isCanVIew: false,
      url: `/home/pelayanan/${unit}/gigi`,
    },
    {
      title: "KIA",
      total: 18,
      isCanVIew: false,
      url: `/home/pelayanan/${unit}/kia`,
    },
    {
      title: "Anak",
      total: 0,
      isCanVIew: false,
      url: `/home/pelayanan/${unit}/anak`,
    },
    {
      title: "Jantung",
      total: 12,
      isCanVIew: false,
      url: `/home/pelayanan/${unit}/jantung`,
    },
    {
      title: "Internis Pria",
      total: 48,
      isCanVIew: true,
      url: `/home/pelayanan/${unit}/internis-pria`,
    },
    {
      title: "Internis Wanita",
      total: 84,
      isCanVIew: true,
      url: `/home/pelayanan/${unit}/internis-wanita`,
    },
  ]);

  return (
    <div className="w-full">
      <h1 className="text-neutral font-semibold text-xl">
        {unit.toUpperCase().replace(/-/g, " ")}
      </h1>
      <h1 className="text-neutral font-light mt-2">
        Pilih Ruang / Klinik Pelayanan Pasien
      </h1>
      <div className="grid grid-cols-4 gap-6 mt-4 px-4">
        {dataRuangan.map((val, index) => {
          return (
            <div
              onClick={() => {
                if (val.isCanVIew) {
                  router.push(val.url);
                }
              }}
              key={index}
              className={`shadow-md rounded-2xl p-4 w-auto ${
                val.isCanVIew
                  ? "hover:scale-105 cursor-pointer border-accent border-4 bg-primary/65"
                  : "bg-primary/40 select-none"
              }`}
            >
              <div className="gap-4">
                <h1 className="font-semibold text-accent-content">
                  {val.title}
                </h1>
                <h1 className="text-sm text-accent-content">
                  Pasien :{" "}
                  <span className="text-sm text-accent-content">
                    {val.total}
                  </span>
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
