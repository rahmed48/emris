"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../app/globals.css";

export default function Sidebar({ menu, onClick, title }: any) {
  return (
    <div className="drawer-side z-50 shadow-lg">
      <label
        htmlFor="my-drawer-2"
        className=" drawer-overlay justify-between flex items-center"
        aria-label="close sidebar"
      >
        <span className="hidden lg:block bg-neutral w-full">
          <h1 className="p-5 text-center font-semibold text-xl text-neutral-content">
            {title}
          </h1>
        </span>
      </label>
      <ul className="menu p-4 w-80 min-h-full bg-neutral">
        {menu.map((val: any, index: any) => {
          return (
            <li
              onClick={onClick(val)}
              key={index}
              className={`mt-1 rounded-lg ${val.isActive ? "bg-neutral-600" : "hover:bg-neutral"}`}
            >
              <a className="text-neutral-content font-semibold gap-4 py-4">
                {val.icon}
                {val.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
