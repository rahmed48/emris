"use client";
import Breadcumbs from "@/components/Items/Breadcumbs";
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
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

type UnitPelayanan = {
  title: string;
  urlId: string;
  total: number;
  icon: ReactNode;
  isActive?: boolean;
};

export default function PelayananLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const unitPelayanan: UnitPelayanan[] = [
    {
      title: "Rawat Jalan",
      urlId: "rawat-jalan",
      total: 56,
      icon: <FontAwesomeIcon icon={faPersonCane} size="2x" />,
      isActive: pathname === "/home/pelayanan/rawat-jalan" ? true : false,
    },
    {
      title: "Rawat Inap",
      urlId: "rawat-inap",
      total: 38,
      icon: <FontAwesomeIcon icon={faBedPulse} size="2x" />,
      isActive: pathname === "/home/pelayanan/rawat-inap" ? true : false,
    },
    {
      title: "Rehab Medis",
      urlId: "rehab-medis",
      total: 56,
      icon: <FontAwesomeIcon icon={faWheelchair} size="2x" />,
      isActive: pathname === "/home/pelayanan/rehab-medis" ? true : false,
    },
    {
      title: "Hemodialisis",
      urlId: "hemodialisis",
      total: 56,
      icon: <FontAwesomeIcon icon={faDroplet} size="2x" />,
      isActive: pathname === "/home/pelayanan/hemodialisis" ? true : false,
    },
    {
      title: "Forensik",
      urlId: "forensik",
      total: 56,
      icon: <FontAwesomeIcon icon={faFingerprint} size="2x" />,
      isActive: pathname === "/home/pelayanan/forensik" ? true : false,
    },
    {
      title: "Gawat Darurat",
      urlId: "igd",
      total: 56,
      icon: <FontAwesomeIcon icon={faLandMineOn} size="2x" />,
      isActive: pathname === "/home/pelayanan/igd" ? true : false,
    },
  ];

  // if (!pathname.endsWith("/home/pelayanan")) {
  //   return <>{children}</>;
  // }

  if (
    pathname.endsWith("/pelayanan/rawat-jalan") ||
    pathname.endsWith("/pelayanan/rawat-inap") ||
    pathname.endsWith("/pelayanan/rehab-medis") ||
    pathname.endsWith("/pelayanan/hemodialisis") ||
    pathname.endsWith("/pelayanan/forensik") ||
    pathname.endsWith("/pelayanan")
  ) {
    return (
      <>
        {/* <Breadcumbs /> */}
        <main className="mt-3">
          <div className="flex flex-row gap-4">
            <div className="basis-1/4 bg-neutral-content shadow-md rounded-2xl p-4">
              <h1 className="text-neutral font-semibold text-xl">
                Unit Pelayanan Pasien
              </h1>

              <div className="grid grid-cols-1 gap-6 mt-4 px-4">
                {unitPelayanan.map((val: any, index: any) => {
                  return (
                    <UnitPelayanan
                      key={index}
                      title={val.title}
                      total={val.total}
                      isActive={val.isActive}
                      url={val.urlId}
                      icon={val.icon}
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
    return (
      <>
        {/* <Breadcumbs /> */}
        {children}
      </>
    );
  }
}

const UnitPelayanan = ({
  title,
  total,
  icon,
  isActive,
  url,
}: {
  title: string;
  total: number;
  icon: ReactNode;
  isActive: boolean;
  url: string;
}) => {
  return (
    <Link
      href={`/home/pelayanan/${url}`}
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
          {icon}
        </h1>
        <div className="gap-4">
          <h1
            className={`font-semibold ${
              isActive ? "text-accent-content" : "text-primary-content"
            }`}
          >
            {title}
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
              {total}
            </span>
          </h1>
        </div>
      </div>
    </Link>
  );
};
