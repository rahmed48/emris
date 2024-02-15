"use client";
import Image from "next/image";
import Calendar from "@/components/Calendar";
import { ReactNode, useState } from "react";
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

export default function Profile() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      {/* <Breadcumbs /> */}
      <main className="mt-3">
        <div className="flex flex-row gap-4">
          <ProfileDokter />
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
              <UnitPelayanan
                title="Rawat Jalan"
                url="/home/pelayanan/rawat-jalan"
                total={56}
                icon={
                  <FontAwesomeIcon
                    icon={faPersonCane}
                    size="2x"
                    className="text-primary-content"
                  />
                }
              />
              <UnitPelayanan
                title="Rawat Inap"
                url="/home/pelayanan/rawat-inap"
                total={38}
                icon={
                  <FontAwesomeIcon
                    icon={faBedPulse}
                    size="2x"
                    className="text-primary-content"
                  />
                }
              />
              <UnitPelayanan
                title="Rehab Medis"
                url="/home/pelayanan/rehab-medis"
                total={56}
                icon={
                  <FontAwesomeIcon
                    icon={faWheelchair}
                    size="2x"
                    className="text-primary-content"
                  />
                }
              />
              <UnitPelayanan
                title="Hemodialisis"
                url="/home/pelayanan/hemodialisis"
                total={56}
                icon={
                  <FontAwesomeIcon
                    icon={faDroplet}
                    size="2x"
                    className="text-primary-content"
                  />
                }
              />
              <UnitPelayanan
                title="Forensik"
                url="/home/pelayanan/forensik"
                total={56}
                icon={
                  <FontAwesomeIcon
                    icon={faFingerprint}
                    size="2x"
                    className="text-primary-content"
                  />
                }
              />
              <UnitPelayanan
                title="Gawat Darurat"
                url="/home/pelayanan/igd"
                total={56}
                icon={
                  <FontAwesomeIcon
                    icon={faLandMineOn}
                    size="2x"
                    className="text-primary-content"
                  />
                }
              />
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

const ProfileDokter = () => {
  return (
    <div className="flex flex-row p-4 gap-6 items-center basis-1/2 bg-neutral-content shadow-md rounded-2xl">
      <div className="basis-1/3">
        <div className="avatar">
          <div className="w-30 rounded-full">
            {/* <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
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
          dr. Aleysa, Sp.PD
        </h1>
        <h1 className="text-neutral font-light mt-5">
          Spesialis Penyakit Dalam
        </h1>
        <h1 className="text-neutral font-light mt-2">085277678789</h1>
        <h1 className="text-neutral font-light mt-2">aleysa@gmail.com</h1>
      </div>
    </div>
  );
};

const UnitPelayanan = ({
  title,
  total,
  icon,
  url,
}: {
  title: string;
  total: number;
  icon: ReactNode;
  url: string;
}) => {
  return (
    <Link
      className="bg-primary/65 shadow-md rounded-2xl p-4 px-8 selec cursor-pointer hover:scale-105"
      href={url}
    >
      <div className="flex flex-row items-center gap-6">
        {icon}
        <div className="gap-4">
          <h1 className="text-primary-content font-semibold text-xl">
            {title}
          </h1>
          <h1 className="text-primary-content text-lg">
            Pasien :{" "}
            <span className="text-primary-content font-semibold">{total}</span>
          </h1>
        </div>
      </div>
    </Link>
  );
};
