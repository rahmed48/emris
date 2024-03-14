"use client";
import CustomSidebar from "@/components/CustomSidebar";
import Breadcumbs from "@/components/Items/Breadcumbs";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBedPulse,
  faDroplet,
  faFingerprint,
  faLandMineOn,
  faPersonCane,
  faSkull,
  faUser,
  faWheelchair,
} from "@fortawesome/free-solid-svg-icons";
// import { all } from '@awesome.me/kit-KIT_CODE/icons'

library.add(
  faBedPulse,
  faDroplet,
  faFingerprint,
  faLandMineOn,
  faPersonCane,
  faSkull,
  faWheelchair,
  faUser
);
// import "../globals.css";

export default function HomeLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const pathName = usePathname();

  return (
    <div className="flex h-screen relative bg-white">
      <CustomSidebar />
      <main className="grow bg-base-100/70 overflow-auto">
        <Navbar />
        <main className="p-4">
          {/* <Breadcumbs /> */}
          {children}
        </main>
      </main>
    </div>
  );
}
