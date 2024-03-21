"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEye,
  faEyeLowVision,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Alert from "@/components/Items/Alert";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Input,
  InputLoginPassword,
  InputLoginUsername,
} from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const resepType = [
  {
    namaResep: "Resep 1",
    listObat: [
      {
        namaObat: "Paracetamol",
        jumlah: 2,
        satuan: "tablet",
      },
      {
        namaObat: "Amoxilin",
        jumlah: 1,
        satuan: "tablet",
      },
    ],
  },
  {
    namaResep: "Resep 1",
    listObat: [
      {
        namaObat: "Paracetamol",
        jumlah: 2,
        satuan: "tablet",
      },
      {
        namaObat: "Amoxilin",
        jumlah: 1,
        satuan: "tablet",
      },
    ],
  },
];

const formLoginSchema = z.object({
  kd_karyawan: z.string().min(6, {
    message: "Kode Karyawan tidak boleh kurang dari 6 karakter",
  }),
  password: z
    .string()
    .min(1, { message: "Password tidak boleh kurang dari 5 karakter" }),
});

export type FormLoginType = z.infer<typeof formLoginSchema>;

export default function Login() {
  const router = useRouter();
  const form = useForm<FormLoginType>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      kd_karyawan: "",
      password: "",
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      router.push("/home");
    }
  }, []);

  const handleSubmit = async (values: {
    kd_karyawan: string;
    password: string;
  }) => {
    try {
      const res = axios.post(`${process.env.BASE_URL}/auth/login`, values);
      const token = (await res).data.token;
      const user = (await res).data.data.user;
      const data = (await res).data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/home");
      Alert({ message: "Login Berhasil", type: "success" });
    } catch (error) {
      console.log(error);
      Alert({ message: "Kode Karyawan atau Password Salah", type: "error" });
    }
  };

  return (
    <div className="flex h-screen bg-white text-slate-900">
      <div className="items-center grid-cols-3 m-auto shadow-2xl lg:grid rounded-3xl">
        <div className="m-auto flex items-center justify-center lg:h-[650px] w-96 lg:bg-[url('/images/bg1.png')] bg-cover bg-center rounded-ss-3xl rounded-es-3xl">
          <div className="hidden font-bold lg:block p-6">
            <h1 className="text-3xl font-bold my-4">Welcome</h1>
            <h1 className="text-2xl font-bold my-2">EMRIS</h1>
            <h1 className="text-xl font-bold my-2">
              Electronic Medical Record Information System
            </h1>
            <h1 className="text-sm font-bold">
              Rumah Sakit Umum Daerah Langsa
            </h1>
          </div>
        </div>
        <div className="w-full max-w-sm col-start-2 col-end-4 mx-auto p-6">
          <div className="flex items-center justify-center">
            <Image
              src="/images/EMRIS.png"
              alt="Login"
              width={100}
              height={100}
            />
          </div>
          <div className="p-5 text-3xl font-semibold text-center ">Login</div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="kd_karyawan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kode Karyawan</FormLabel>
                    <FormControl>
                      <InputLoginUsername
                        placeholder="kode karyawan"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <InputLoginPassword type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="justify-between flex">
                <button
                  type="submit"
                  className="w-full p-3 font-medium text-white transition-all duration-300 bg-black border-2 rounded-3xl hover:border-2 hover:border-black hover:bg-white hover:text-black"
                >
                  Login
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
