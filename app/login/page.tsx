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

export default function Login() {
  const router = useRouter();
  const [passwordShown, setPasswordShown] = useState(false);

  const toggleEye = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const onLogin = () => {
    router.push("/home");
  };

  return (
    <div className="flex h-screen bg-white text-slate-900">
      <div className="items-center grid-cols-3 m-auto shadow-2xl lg:grid rounded-3xl">
        <div className="m-auto flex items-center justify-center lg:h-[650px] w-96 lg:bg-[url('/images/bg1.png')] bg-cover bg-center rounded-ss-3xl rounded-es-3xl">
          <div className="hidden font-bold lg:block p-6">
            <h1 className="text-3xl font-bold my-4">Selamat Datang</h1>
            <h1 className="text-xl font-bold my-2">
              Rekam Medis Elektronik
            </h1>
            <h1 className="text-sm font-bold">
              Rumah Sakit Umum Daerah Langsa
            </h1>
            <h1 className="text-sm font-bold">
              Ini Auto Update Dari Github
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
            <label className="font-medium">Username</label>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="username"
              name="username"
              id="username"
              className="w-full p-2 border-b focus:border-b-2 outline-0"
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
