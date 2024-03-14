"use client";
import Breadcumbs from "@/components/Items/Breadcumbs";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBedPulse,
  faDroplet,
  faFingerprint,
  faLandMineOn,
  faPersonCane,
  faSkull,
  faWheelchair,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import type { UnitPelayanan } from "../profile/page";

export default function PelayananLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const { unit }: { unit: string } = useParams();
  const [unitPelayanan, setUnitPelayanan] = useState<UnitPelayanan[]>([]);

  useEffect(() => {
    axios.get(`${process.env.BASE_URL}/bagian`).then((res) => {
      setUnitPelayanan(res.data.data);
    });
  }, []);

  const isPathnameEndsWith = (pathname: string, kd_bagian: number) => {
    return pathname.endsWith(`/pelayanan/${kd_bagian}`);
  };

  const isPathnameEndsWithAny = (
    pathname: string,
    unitPelayanan: UnitPelayanan[]
  ) => {
    return unitPelayanan.some((data) =>
      isPathnameEndsWith(pathname, data.kd_bagian)
    );
  };

  const customPath = () => {
    if (isPathnameEndsWithAny(pathname, unitPelayanan)) {
      return {
        renderPath: `/home/pelayanan/${
          unitPelayanan.find((val) =>
            isPathnameEndsWith(pathname, val.kd_bagian)
          )?.bagian
        }`,
        linkPath: `/home/pelayanan/${unit}`,
      };
    } else {
      return {
        renderPath: `/home/pelayanan/`,
        linkPath: `/home/pelayanan/`,
      };
    }
  };

  if (
    isPathnameEndsWithAny(pathname, unitPelayanan) ||
    pathname.endsWith("/pelayanan")
  ) {
    return (
      <>
        <Breadcumbs customPath={customPath()} />
        <main className="mt-3">
          <div className="flex flex-row gap-4">
            <div className="basis-1/4 bg-neutral-content shadow-md rounded-2xl p-4">
              <h1 className="text-neutral font-semibold text-xl">
                Unit Pelayanan Pasien
              </h1>

              <div className="grid grid-cols-1 gap-6 mt-4 px-4">
                {unitPelayanan.map((val: UnitPelayanan, index) => {
                  return (
                    <UnitPelayanan
                      key={index}
                      bagian={val.bagian}
                      total_pasien={val.total_pasien}
                      icon={val.icon}
                      kd_bagian={val.kd_bagian}
                    />
                  );
                })}
              </div>
            </div>
            <div className="basis-3/4 bg-neutral-content shadow-md rounded-2xl flex flex-row p-4">
              {children}
            </div>
          </div>
        </main>
      </>
    );
  } else {
    return children;
  }
}

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
          <FontAwesomeIcon icon={icon} size="2x" />
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
