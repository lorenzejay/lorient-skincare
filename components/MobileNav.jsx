import Link from "next/link";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { handleOpenCalendly } from "../functions";
const MobileNav = ({ toggle, isOpen }) => {
  return (
    <div
      className={`fixed w-screen h-screen z-50 bg-black grid justify-center top-0 left-0 transition-all ease-in-out duration-500 ${
        isOpen ? "opacity-100" : "opacity-0"
      } ${isOpen ? "top-0" : "-top-full"} `}
      onClick={toggle}
    >
      <div className="absolute top-10 right-8 bg-transparent text-4xl cursor-pointer focus:outline-none outline-none text-white">
        <FaTimes />
      </div>

      <ul className="text-white text-3xl list flex flex-col justify-center items-center list-none">
        <li className="my-1">
          <Link href="/">HOME</Link>
        </li>
        <li className="my-1">
          <Link href="/services">SERVICES</Link>
        </li>
        <li className="my-1">
          <Link href="/pricing">PRICING</Link>
        </li>
        <li className="my-1">
          <button onClick={handleOpenCalendly}>BOOK NOW</button>
        </li>
        {/* <li>
            <Link href="/blog">Blog</Link>
          </li> */}
      </ul>
    </div>
  );
};

export default MobileNav;
