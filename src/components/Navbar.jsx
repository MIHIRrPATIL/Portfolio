// import { Button } from 'bootstrap';
import React from "react";
import CTA from "./CTA";
import { useTheme } from "../themeContext";
import Switch from "./Switch";
import RollOver from "./RolloverButton";

function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className="text-xl">
      <div
        className={`container rounded-b-3xl flex mx-auto items-center shadow-2xl justify-between transition-colors duration-500 p-4 ${
          darkMode ? "bg-white/50 text-black" : "bg-black/65 text-amber-50"
        }`}
      >
        <p className="p-2">Mihir Patil</p>
        <div className="">
          <ul className="flex items-center gap-1.5">
          <button className="p-2 hover:text-amber-50 hover:txt-black duration-300 rounded-xl dark:hover:text-gray-500">
             Home
            </button>
            <button className="p-2 hover:text-amber-50 hover:txt-black duration-300 rounded-xl dark:hover:text-gray-500">
              About Me
            </button>
            <button className="p-2 hover:text-amber-50 hover:txt-black duration-300 rounded-xl dark:hover:text-gray-500">
              Projects
            </button>
            <button className="p-2 hover:text-amber-50 hover:txt-black duration-300 rounded-xl dark:hover:text-gray-500">
              Resume
            </button>
            <button className="p-2 hover:text-amber-50 hover:txt-black duration-300 rounded-xl dark:hover:text-gray-500">
              Contact Me
            </button>
          </ul>
        </div>
        <Switch />
      </div>
    </div>
  );
}

export default Navbar;
