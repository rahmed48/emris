"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEye,
  faEyeLowVision,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Alert from "@/components/Items/Alert";
import { z } from "zod";

const FormLoginSchema = z
  .object({
    kd_karyawan: z.string().min(6, {
      message: "Kode Karyawan tidak boleh kurang dari 6 karakter",
    }),
    password: z
      .string()
      .min(6, { message: "Password tidak boleh kurang dari 6 karakter" })
      .max(20, { message: "Password tidak boleh lebih dari 20 karakter" })
      .regex(/[a-zA-Z0-9]/, {
        message: "Password hanya boleh huruf dan angka",
      })
      .regex(/[A-Z]/, { message: "Password harus memiliki huruf besar" })
      .regex(/[a-z]/, { message: "Password harus memiliki huruf kecil" })
      .regex(/[0-9]/, { message: "Password harus memiliki angka" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Password harus memiliki karakter spesial",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });

export type FormLoginType = z.infer<typeof FormLoginSchema>;

export default function Login() {
  const router = useRouter();
  const [passwordShown, setPasswordShown] = useState(false);
  const [formLogin, setFormLogin] = useState<FormLoginType>({
    kd_karyawan: "",
    password: "",
    confirmPassword: "",
  });

  const toggleEye = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const onLogin = () => {
    axios
      .post(`${process.env.BASE_URL}/auth/login`, formLogin)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        // sessionStorage.setItem("token", res.data.token);
        // sessionStorage.setItem("user", JSON.stringify(res.data.data.user));
        router.push("/home");
        Alert({ message: "Login Berhasil", type: "success" });
      })
      .catch((err) => {
        console.log(err);
        Alert({ message: "Kode Karyawan atau Password Salah", type: "error" });
      });
  };

  return (
    <div className="flex h-screen bg-white text-slate-900">
      <div className="items-center grid-cols-3 m-auto shadow-2xl lg:grid rounded-3xl">
        <div className="m-auto flex items-center justify-center lg:h-[650px] w-96 lg:bg-[url('/images/bg1.png')] bg-cover bg-center rounded-ss-3xl rounded-es-3xl">
          <div className="hidden font-bold lg:block p-6">
            <h1 className="text-3xl font-bold my-4">Selamat Datang</h1>
            <h1 className="text-xl font-bold my-2">Rekam Medis Elektronik</h1>
            <h1 className="text-sm font-bold">
              Rumah Sakit Umum Daerah Langsa
            </h1>
          </div>
        </div>
        <div className="w-full max-w-sm col-start-2 col-end-4 mx-auto p-6">
          <div className="flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Login"
              width={100}
              height={100}
            />
          </div>
          <div className="p-5 text-3xl font-semibold text-center ">Login</div>
          <div className="pt-4">
            <label className="font-medium">Kode Karyawan</label>
          </div>
          <div className="relative">
            <input
              type="number"
              placeholder="username"
              name="username"
              id="username"
              className="w-full p-2 border-b focus:border-b-2 outline-0"
              value={formLogin.kd_karyawan}
              onChange={(e) =>
                setFormLogin({ ...formLogin, kd_karyawan: e.target.value })
              }
            />
            <div className="absolute cursor-pointer top-2 right-3 ">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
          <div className="pt-4">
            <label className="font-medium">Password</label>
          </div>
          <div className="relative">
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              id="password"
              placeholder={passwordShown ? "password" : "********"}
              className="w-full p-2 pr-3 border-b focus:border-b-2 outline-0"
              value={formLogin.password}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  onLogin();
                }
              }}
              onChange={(e) =>
                setFormLogin({ ...formLogin, password: e.target.value })
              }
            />
            <div
              className="absolute cursor-pointer top-2 right-3"
              id="toggle-password"
              onClick={toggleEye}
            >
              <FontAwesomeIcon
                icon={passwordShown ? faEye : faEyeLowVision}
                color="black"
              />
            </div>
          </div>
          <div className="mt-14">
            <button
              onClick={onLogin}
              className="w-full p-3 font-medium text-white transition-all duration-300 bg-black border-2 rounded-3xl hover:border-2 hover:border-black hover:bg-white hover:text-black"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
