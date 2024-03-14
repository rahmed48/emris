"use client";
import Asesmen from "@/components/AsuhanMedis/Asesmen";
import Careplan from "@/components/AsuhanMedis/Careplan";
import Cppt from "@/components/AsuhanMedis/Cppt";
import Profil from "@/components/AsuhanMedis/Profil";
import Resume from "@/components/AsuhanMedis/Resume";
import Tindakan from "@/components/AsuhanMedis/Tindakan";
import React from "react";

const AsuhanMedis = () => {
  const [childName, setChildName] = React.useState<string>("asesmen");
  const [children, setChildren] = React.useState<React.ReactNode>(<Asesmen />);

  return (
    <section>
      <div className="rounded-2xl flex flex-row gap-2">
        <button
          onClick={() => {
            setChildName("asesmen");
            setChildren(<Asesmen />);
          }}
          className={`text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30 ${
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
          className={`text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30 ${
            childName == "cppt" && "bg-accent text-accent-content"
          }`}
        >
          CPPT
        </button>
        <button
          onClick={() => {
            setChildName("tindakan");
            setChildren(<Tindakan />);
          }}
          className={`text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30 ${
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
          className={`text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30 ${
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
          className={`text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30 ${
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
          className={`text-accent font-semibold px-4 py-2 rounded-md shadow-md outline outline-2 outline-accent/30 ${
            childName == "profil" && "bg-accent text-accent-content"
          }`}
        >
          Profil
        </button>
      </div>
      <div className="mt-4">
        <div className="bg-neutral-content p-4 rounded-2xl shadow-md">
          {children}
        </div>
      </div>
    </section>
  );
};

export default AsuhanMedis;
