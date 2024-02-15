"use client";
import { faBars, faBell, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../app/globals.css";
import Time from "./Items/Time";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
      <div className="flex-1"></div>
      <div className="flex-none gap-2">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faCalendar}
            size="lg"
            className="text-base-content"
          />
          <Time
            isMonthsShort
            className="text-base-content ml-2"
            type="dateTime"
          />
          <div className="text-base-content ml-1">WIB</div>
        </div>
        <Notif count={2} />
        <Profile
          name="Rahmad Alfian Syahputra"
          image="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        />
        <ThemeChanger />
      </div>
    </div>
  );
}

const ThemeChanger = () => {
  const theme = [
    "dark",
    "cupcake",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="dropdown dropdown-end max-h-60">
      <div tabIndex={0} role="button" className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[99] p-2 mt-3 shadow-2xl bg-base-100 rounded-box w-52 max-h-60 overflow-y-auto text-base-content"
      >
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Default"
            value="default"
          />
        </li>
        {theme.map((val, index) => {
          return (
            <li key={index}>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label={capitalizeFirstLetter(val)}
                value={val}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Profile = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="dropdown dropdown-end max-h-60">
      <div tabIndex={0} role="button" className="btn m-1">
        <div className="bg-primary rounded-full">
          <div className="p-1 avatar w-9">
            <div className="w-9 rounded-full">
              <Image
                alt="Tailwind CSS Navbar component"
                src={image}
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <h1 className="ml-3 text-lg font-semibold text-base-content">{name}</h1>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between text-base-content">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a className="text-base-content">Settings</a>
        </li>
        <li>
          {/* <a className="text-base-content">Logout</a> */}
          <Link href="/login" className="text-base-content">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Notif = ({ count }: { count: number }) => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <FontAwesomeIcon
            icon={faBell}
            size="xl"
            className="text-base-content"
          />
          <span className="badge badge-sm indicator-item text-base-content">
            {count}
          </span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
