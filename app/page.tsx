"use client"
import React, { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      redirect("/home");
    } else {
      redirect("/login");
    }
  }, []);
}
