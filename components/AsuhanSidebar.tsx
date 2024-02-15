"use client";
import {
  faChevronLeft,
  faChevronRight,
  faStethoscope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

// function CustomSidebar() {
const AsuhanSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebarcollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const menu = [
    {
      name: "Asuhan Medis",
      icon: <FontAwesomeIcon icon={faUser} size="lg" />,
      url: "/asuhan/medis",
    },
    {
      name: "Asuhan Keperawatan",
      icon: <FontAwesomeIcon icon={faStethoscope} size="lg" />,
      url: "/asuhan/rawatan",
    },
  ];
  return (
    <div className="relative">
      <button
        className="absolute right-1/2 bottom-4 border-none bg-neutral-content rounded-2xl justify-center items-center cursor-pointer translate-x-1/2 py-2 px-4 text-neutral inline-block"
        onClick={toggleSidebarcollapse}
      >
        {isCollapsed ? (
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        )}
      </button>
      <aside
        className={`h-screen bg-base-100/70 p-4 transition-all overflow-hidden bg-neutral ${
          isCollapsed ? "w-24" : "w-64"
        }`}
      >
        <Link
          href={"/home"}
          className={`w-full flex items-center gap-4 ${
            isCollapsed && "justify-center"
          }`}
        >
          <Image
            width={50}
            height={50}
            src="/images/logo.png"
            alt="logo"
            className="object-contain rounded-full"
          />
          <div className={`${isCollapsed && "hidden"}`}>
            <p className={`text-neutral-content text-2xl font-semibold`}>
              Emris
            </p>
            <p className={`text-neutral-content text-xs font-light`}>
              Electronic Medical Record
            </p>
          </div>
        </Link>
        <div className="divider divider-accent"></div>
        <ul className="list-none">
          {menu.map(({ name, url, icon }) => {
            return (
              <li className="items-center justify-center" key={name}>
                <Link
                  className={`text-neutral-content py-3 px-5 flex mb-2 rounded-2xl gap-4 items-center ${
                    isCollapsed && "justify-center"
                  } ${
                    pathname.startsWith(url)
                      ? "bg-accent/50 text-accent-content"
                      : "bg-neutral hover:bg-accent/30"
                  }`}
                  href={url}
                >
                  <span className="inline-block text-lg">{icon}</span>
                  <span
                    className={`inline-block text-lg delay-1000 ${
                      isCollapsed && "hidden"
                    }`}
                  >
                    {name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default AsuhanSidebar;
