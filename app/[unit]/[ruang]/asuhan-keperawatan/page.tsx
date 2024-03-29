"use client";
import Asesmen from "@/components/AsuhanKeperawatan/Asesmen";
import Careplan from "@/components/AsuhanKeperawatan/Careplan";
import Cppt from "@/components/AsuhanKeperawatan/Cppt";
import Profil from "@/components/AsuhanKeperawatan/Profil";
import Resume from "@/components/AsuhanKeperawatan/Resume";
import Tindakan from "@/components/AsuhanKeperawatan/Tindakan";
import Breadcumbs from "@/components/Items/Breadcumbs";
import React from "react";

const AsuhanKeperawatan = () => {
  const [childName, setChildName] = React.useState<string>("asesmen");
  const [children, setChildren] = React.useState<React.ReactNode>(<Asesmen />);

  return (
    <section>
      <div className="rounded-2xl flex flex-row gap-2 overflow-x-auto p-2 text-nowrap">
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
      <div className="mt-4">{children}</div>
    </section>
  );
};

export default AsuhanKeperawatan;
