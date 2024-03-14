"use client";
import AsuhanSidebar from "@/components/AsuhanSidebar";
import CustomSidebar from "@/components/CustomSidebar";
import Breadcumbs from "@/components/Items/Breadcumbs";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
// import "../globals.css";

export default function UnitLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const pathName = usePathname();

  return (
    <div className="flex h-screen relative bg-white">
      {/* <CustomSidebar /> */}
      <AsuhanSidebar />
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
