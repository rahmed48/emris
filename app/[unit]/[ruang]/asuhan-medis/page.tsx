"use client";
import Asesmen from "@/components/AsuhanMedis/Asesmen";
import Careplan from "@/components/AsuhanMedis/Careplan";
import Cppt from "@/components/AsuhanMedis/Cppt";
import Konsultasi from "@/components/AsuhanMedis/Konsultasi";
import Labor from "@/components/AsuhanMedis/Labor";
import Profil from "@/components/AsuhanMedis/Profil";
import Radiologi from "@/components/AsuhanMedis/Radiologi";
import Resep from "@/components/AsuhanMedis/Resep";
import Resume from "@/components/AsuhanMedis/Resume";
import Tindakan from "@/components/AsuhanMedis/Tindakan";
import React from "react";

const AsuhanMedis = () => {
  const [childName, setChildName] = React.useState<string>("asesmen");
  const [children, setChildren] = React.useState<React.ReactNode>(<Asesmen />);

  return (
    <section>
      <div className="flex flex-row gap-2 overflow-x-auto p-2 no-scrollbar">
        <button
          onClick={() => {
            setChildName("asesmen");
            setChildren(<Asesmen />);
          }}
          className={`text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30 text-nowrap ${
            childName == "asesmen" && "bg-accent text-accent-content"
          }`}
        >
          Asesmen
        </button>
        <button
          onClick={() => {
            setChildName("cppt");
            setChildren(<Cppt />);
          }}
          className={`text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30 text-nowrap ${
            childName == "cppt" && "bg-accent text-accent-content"
          }`}
        >
          CPPT
        </button>
        <button
          onClick={() => {
            setChildName("konsultasi");
            setChildren(<Konsultasi />);
          }}
          className={`text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30 text-nowrap ${
            childName == "konsultasi" && "bg-accent text-accent-content"
          }`}
        >
          Konsultasi
        </button>
        <button
          onClick={() => {
            setChildName("labor");
            setChildren(<Labor />);
          }}
          className={`text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30 text-nowrap ${
            childName == "labor" && "bg-accent text-accent-content"
          }`}
        >
          Labor
        </button>
        <button
          onClick={() => {
            setChildName("radiologi");
            setChildren(<Radiologi />);
          }}
          className={`text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30 text-nowrap ${
            childName == "radiologi" && "bg-accent text-accent-content"
          }`}
        >
          Radiologi
        </button>
        <button
          onClick={() => {
            setChildName("resep");
            setChildren(<Resep />);
          }}
          className={`text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30 text-nowrap ${
            childName == "resep" && "bg-accent text-accent-content"
          }`}
        >
          E-Resep
        </button>
        <button
          onClick={() => {
            setChildName("tindakan");
            setChildren(<Tindakan />);
          }}
          className={`text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30 text-nowrap ${
            childName == "tindakan" && "bg-accent text-accent-content"
          }`}
        >
          Tindakan
        </button>
        <button
          onClick={() => {
            setChildName("careplan");
            setChildren(<Careplan />);
          }}
          className={`text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30 text-nowrap ${
            childName == "careplan" && "bg-accent text-accent-content"
          }`}
        >
          Care Plan
        </button>
        <button
          onClick={() => {
            setChildName("resume");
            setChildren(<Resume />);
          }}
          className={`text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30 text-nowrap ${
            childName == "resume" && "bg-accent text-accent-content"
          }`}
        >
          Resume
        </button>
        <button
          onClick={() => {
            setChildName("profil");
            setChildren(<Profil />);
          }}
          className={`text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30 text-nowrap ${
            childName == "profil" && "bg-accent text-accent-content"
          }`}
        >
          Profil
        </button>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
};

export default AsuhanMedis;
