"use client";

import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ReactNode } from "react";
import Breadcumbs from "@/components/Items/Breadcumbs";

const AsuhanLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      {/* <Breadcumbs customPath="/" /> */}
      <div>
        <div className="bg-neutral-content shadow-md rounded-2xl flex flex-row p-4 gap-4">
          <button
            // onClick={() => router.push("/home/pelayanan")}
            className="bg-accent/65 text-accent-content font-semibold px-4 py-2 rounded-md"
          >
            Asuhan Medis
          </button>
          <button
            // onClick={() => router.push("/home/pelayanan")}
            className="bg-accent/65 text-accent-content font-semibold px-4 py-2 rounded-md"
          >
            Asuhan Keperawatan
          </button>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="basis-1/4">
            <div className="bg-neutral-content p-4 rounded-2xl shadow-md">
              <div className="flex flex-row justify-center">
                <div className="avatar">
                  <div className="w-28 rounded-full">
                    <Image
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      width={300}
                      height={300}
                      alt="Avatar"
                    />
                  </div>
                </div>
              </div>
              <h1 className="text-neutral font-semibold text-xl text-center">
                Andi nurdiansyah Sitepu
              </h1>
              <h1 className="text-neutral text-center font-semibold">
                Laki-laki / 34 Tahun
              </h1>
              <h1 className="text-neutral text-center text-sm font-semibold">
                RM : 0-00-00-00
              </h1>
              <h1 className="text-neutral text-center text-sm">
                NIK : 117403040203850001
              </h1>
              <h1 className="text-neutral text-center text-sm">
                Reg: 10204202400001
              </h1>
            </div>
            <div className="rounded-2xl shadow-md mt-4 bg-neutral-content">
              <div className="bg-neutral p-2 px-4 rounded-2xl text-neutral-content">
                Task
              </div>
              <div className="flex flex-row">
                <div className="w-3/4">
                  <ul className="timeline timeline-vertical text-neutral">
                    <li>
                      <div className="timeline-middle">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          size="lg"
                          className="text-success"
                        />
                      </div>
                      <div className="ml-4 timeline-end text-neutral/70">
                        Asesmen Awal Medis
                      </div>
                      <hr className="bg-neutral" />
                    </li>
                    <li>
                      <hr className="bg-neutral" />
                      <div className="timeline-middle">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          size="lg"
                          className="text-success"
                        />
                      </div>
                      <div className="ml-4 timeline-end text-neutral/70">
                        Asesmen Awal Keperawatan
                      </div>
                      <hr className="bg-neutral" />
                    </li>
                    <li>
                      <hr className="bg-neutral" />
                      <div className="timeline-middle">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          size="lg"
                          className="text-success"
                        />
                      </div>
                      <div className="ml-4 timeline-end text-neutral/70">
                        Order Laboratorium
                      </div>
                      <hr className="bg-neutral" />
                    </li>
                    <li>
                      <hr className="bg-neutral" />
                      <div className="timeline-middle">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          size="lg"
                          className="text-neutral/35"
                        />
                      </div>
                      <div className="ml-4 timeline-end text-neutral">
                        Resume Medis - (belum final)
                      </div>
                      <hr className="bg-neutral" />
                    </li>
                    <li>
                      <hr className="bg-neutral" />
                      <div className="timeline-middle">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          size="lg"
                          className="text-neutral/35"
                        />
                      </div>
                      <div className="ml-4 timeline-end text-neutral">
                        Perintah Rawat Inap
                      </div>
                      <hr className="bg-neutral" />
                    </li>
                    <li>
                      <hr className="bg-neutral" />
                      <div className="timeline-middle">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          size="lg"
                          className="text-neutral/35"
                        />
                      </div>
                      <div className="ml-4 timeline-end text-neutral">
                        Selesai
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-3/4 h-full">
            <div className="rounded-2xl flex flex-row gap-2">
              <button
                // onClick={() => router.push("/home/pelayanan")}
                className="text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30"
              >
                Asesmen
              </button>
              <button
                // onClick={() => router.push("/home/pelayanan")}
                className="text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30"
              >
                CPPT
              </button>
              <button
                // onClick={() => router.push("/home/pelayanan")}
                className="text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30"
              >
                Tindakan
              </button>
              <button
                // onClick={() => router.push("/home/pelayanan")}
                className="text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30"
              >
                Care Plan
              </button>
              <button
                // onClick={() => router.push("/home/pelayanan")}
                className="text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30"
              >
                Resume
              </button>
              <button
                // onClick={() => router.push("/home/pelayanan")}
                className="text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30"
              >
                Profil
              </button>
            </div>
            <div className="mt-4">
              <div className="bg-neutral-content p-4 rounded-2xl shadow-md">
                {children}
                {/* <h1 className="text-neutral font-semibold text-xl">
                Asesmen Keperawatan
              </h1> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsuhanLayout;
