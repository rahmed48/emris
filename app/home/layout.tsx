"use client";
import CustomSidebar from "@/components/CustomSidebar";
import Breadcumbs from "@/components/Items/Breadcumbs";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
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
          <Breadcumbs />
          {children}
        </main>
      </main>
    </div>
  );
}
