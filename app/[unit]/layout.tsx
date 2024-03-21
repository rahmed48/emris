"use client";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import DetailSidebar from "@/components/DetailSidebar";
// import "../globals.css";

export default function UnitLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const pathName = usePathname();

  return (
    <div className="flex h-screen relative bg-white">
      <DetailSidebar />
      <main className="grow bg-base-100/70 overflow-auto">
        <Navbar />
        <main className="p-4">{children}</main>
      </main>
    </div>
  );
}
