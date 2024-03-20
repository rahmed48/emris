"use client";

import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ReactNode } from "react";
import Breadcumbs from "@/components/Items/Breadcumbs";
import { useDispatch, useSelector } from "react-redux";
import { PasienType } from "@/redux/pasienReducers";
import { storeType } from "@/redux/store";

const AsuhanLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { unit, ruang }: { unit: string; ruang: string } = useParams();
  const statePasien = useSelector((state: storeType) => state.pasien);
  // console.log("redux", statePasien);
  // console.log("params", pathname, unit, ruang);

  useEffect(() => {
    if (statePasien.pasien.kd_pasien === "") {
      router.push(`/home/pelayanan/${unit}/${ruang}`);
    }
  }, [statePasien.pasien.kd_pasien]);

  return (
    <div className="flex gap-4 mt-4">
      <div className="w-1/4">
        <div className="bg-neutral-content p-4 rounded-2xl shadow-md">
          <div className="flex flex-row justify-center">
            <div className="avatar">
              <div className="w-28 rounded-full">
                <Image
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  width={300}
                  height={300}
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
          <h1 className="text-neutral font-semibold text-xl text-center">
            {statePasien.pasien.nama_lengkap}
          </h1>
          <h1 className="text-neutral text-center font-semibold">
            {statePasien.pasien.jenis_kelamin} /{" "}
            {statePasien.pasien.usia.usia_formatted}
          </h1>
          <h1 className="text-neutral text-center text-sm font-semibold">
            RM : {statePasien.pasien.kd_pasien}
          </h1>
          <h1 className="text-neutral text-center text-sm">
            NIK : {statePasien.pasien.nik}
          </h1>
          <h1 className="text-neutral text-center text-sm">
            Kode Booking: {statePasien.antrian.kode_booking_bpjs}
          </h1>
        </div>
        <div className="rounded-2xl shadow-md mt-4 bg-neutral-content">
          <div className="bg-neutral p-2 px-4 rounded-2xl text-neutral-content">
            Task
          </div>
          <div className="flex flex-row">
            <div className="w-3/4">
              <ul className="timeline timeline-vertical text-neutral">
                <li>
                  <div className="timeline-middle">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      size="lg"
                      className="text-success"
                    />
                  </div>
                  <div className="ml-4 timeline-end text-neutral/70">
                    Asesmen Awal Medis
                  </div>
                  <hr className="bg-neutral" />
                </li>
                <li>
                  <hr className="bg-neutral" />
                  <div className="timeline-middle">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      size="lg"
                      className="text-success"
                    />
                  </div>
                  <div className="ml-4 timeline-end text-neutral/70">
                    Asesmen Awal Keperawatan
                  </div>
                  <hr className="bg-neutral" />
                </li>
                <li>
                  <hr className="bg-neutral" />
                  <div className="timeline-middle">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      size="lg"
                      className="text-success"
                    />
                  </div>
                  <div className="ml-4 timeline-end text-neutral/70">
                    Order Laboratorium
                  </div>
                  <hr className="bg-neutral" />
                </li>
                <li>
                  <hr className="bg-neutral" />
                  <div className="timeline-middle">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      size="lg"
                      className="text-neutral/35"
                    />
                  </div>
                  <div className="ml-4 timeline-end text-neutral">
                    Resume Medis - (belum final)
                  </div>
                  <hr className="bg-neutral" />
                </li>
                <li>
                  <hr className="bg-neutral" />
                  <div className="timeline-middle">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      size="lg"
                      className="text-neutral/35"
                    />
                  </div>
                  <div className="ml-4 timeline-end text-neutral">
                    Perintah Rawat Inap
                  </div>
                  <hr className="bg-neutral" />
                </li>
                <li>
                  <hr className="bg-neutral" />
                  <div className="timeline-middle">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      size="lg"
                      className="text-neutral/35"
                    />
                  </div>
                  <div className="ml-4 timeline-end text-neutral">Selesai</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 h-full">{children}</div>
    </div>
  );
};

export default AsuhanLayout;
