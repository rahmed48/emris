"use client";
import Image from "next/image";
import Calendar from "@/components/Calendar";
import { ReactNode, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBedPulse,
  faCircleExclamation,
  faDroplet,
  faFingerprint,
  faLandMineOn,
  faMinus,
  faPersonCane,
  faPlus,
  faSkull,
  faWheelchair,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Breadcumbs from "@/components/Items/Breadcumbs";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import { usePathname } from "next/navigation";
import { UserType } from "@/components/Navbar";

export type UnitPelayanan = {
  kd_bagian: number;
  bagian: string;
  total_pasien: number;
  icon: IconProp;
};

export default function Profile() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [unitPelayanan, setUnitPelayanan] = useState<UnitPelayanan[]>([]);
  const pathname = usePathname();
  const [user, setUser] = useState<UserType>({
    kd_karyawan: "",
    kd_dokter: "",
    nama: "",
    nama_lengkap: "",
    email: "",
    no_hp: "",
    detail: "",
  });

  useEffect(() => {
    axios.get(`${process.env.BASE_URL}/bagian`).then((res) => {
      setUnitPelayanan(res.data.data);
    });
    const user = localStorage.getItem("user");
    // const user = sessionStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);
  return (
    <>
      <Breadcumbs
        customPath={{
          renderPath: "/home/profile",
          linkPath: "/home/profile",
        }}
      />
      <main className="mt-3">
        <div className="flex flex-row gap-4">
          <ProfileDokter user={user} />
          <div className="basis-1/2 flex flex-row gap-4">
            <div className="basis-1/2 bg-neutral-content shadow-md rounded-2xl justify-center items-center">
              <Calendar />
            </div>
            <div className="basis-1/2 bg-neutral-content shadow-md rounded-2xl justify-center items-center p-4">
              <h1 className="text-neutral font-semibold text-xl">Informasi</h1>
            </div>
          </div>
        </div>
        <div className="h-6" />
        <div className="flex flex-row gap-4">
          <div className="basis-1/2 bg-neutral-content shadow-md rounded-2xl p-4">
            <h1 className="text-neutral font-semibold text-xl">
              Unit Pelayanan Pasien
            </h1>

            <div className="grid grid-cols-2 gap-6 mt-4">
              {unitPelayanan.map((val: UnitPelayanan, index) => {
                return (
                  <UnitPelayanan
                    key={index}
                    bagian={val.bagian}
                    icon={val.icon}
                    total_pasien={val.total_pasien}
                    kd_bagian={val.kd_bagian}
                  />
                );
              })}
            </div>
          </div>
          <div className="basis-1/2 bg-neutral-content shadow-md rounded-2xl flex flex-row p-4">
            <h1 className="text-neutral font-semibold text-xl">Informasi</h1>
          </div>
        </div>
      </main>
    </>
  );
}

const ProfileDokter = ({ user }: { user: UserType }) => {
  return (
    <div className="flex flex-row p-4 gap-6 items-center basis-1/2 bg-neutral-content shadow-md rounded-2xl">
      <div className="basis-1/3">
        <div className="avatar">
          <div className="w-30 rounded-full">
            <Image
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              width={300}
              height={300}
              alt="Avatar"
            />
          </div>
        </div>
      </div>
      <div className="basis-2/3">
        <h1 className="text-neutral font-semibold text-xl">
          {user.nama_lengkap}
        </h1>
        <h1 className="text-neutral mt-5 font-semibold">
          {user.detail}
        </h1>
        <h1 className="text-neutral font-light mt-2">{user.no_hp}</h1>
        <h1 className="text-neutral font-light mt-2">{user.email}</h1>
      </div>
    </div>
  );
};

const UnitPelayanan = ({
  bagian,
  icon,
  total_pasien,
  kd_bagian,
}: UnitPelayanan) => {
  const isActive = usePathname().endsWith(`/pelayanan/${kd_bagian}`);
  return (
    <Link
      href={`/home/pelayanan/${kd_bagian}`}
      className={`shadow-md rounded-2xl p-4 cursor-pointer ${
        isActive ? "scale-110 bg-accent/70" : "hover:scale-105 bg-primary/65"
      }`}
    >
      <div className="flex flex-row items-center gap-6">
        <h1
          className={`${
            isActive ? "text-accent-content" : "text-primary-content"
          }`}
        >
          {/* <FontAwesomeIcon icon={icon} size="2x" /> */}
          <FontAwesomeIcon icon={icon} size="2x" />
          {/* {icon} */}
        </h1>
        <div className="gap-4">
          <h1
            className={`font-semibold ${
              isActive ? "text-accent-content" : "text-primary-content"
            }`}
          >
            {bagian}
          </h1>
          <h1
            className={`text-sm ${
              isActive ? "text-accent-content" : "text-primary-content"
            }`}
          >
            Pasien :{" "}
            <span
              className={`text-sm  font-semibold  ${
                isActive ? "text-accent-content" : "text-primary-content"
              }`}
            >
              {total_pasien}
            </span>
          </h1>
        </div>
      </div>
    </Link>
  );
};
