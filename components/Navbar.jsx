import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { openPopupWidget } from "react-calendly";
const Navbar = ({ toggle, isHome }) => {
  const handleOpenCalendly = () => {
    openPopupWidget({ url: "https://calendly.com/lorientskincare" });
  };
  return (
    <nav
      className="flex w-full justify-between items-center px-5 pt-10 md:px-10 lg:pt-16 lg:px-28 2xl:px-32 bg-none absolute z-10"
      style={{ background: "", height: "10vh" }}
    >
      <ul className="hidden md:flex items-center text-lg">
        <li className="mr-4">
          <Link href="/services">Services</Link>
        </li>
        <li className="mr-4">
          <Link href="/pricing">Pricing</Link>
        </li>
      </ul>
      <Link href="/">
        <a
          className={`${
            isHome ? "text-white" : "text-black"
          }  lg:text-black md:flex-grow text-center md:pr-24 text-4xl font-semibold uppercase `}
        >
          L&apos;orient
        </a>
      </Link>
      <button
        className={`${isHome ? "text-white" : "text-black"} md:hidden`}
        onClick={toggle}
      >
        <GiHamburgerMenu className="text-3xl" />
      </button>
      <button
        className={`hidden md:block text-lg rounded-md p-2 `}
        style={{ background: "#EBA47A" }}
        onClick={handleOpenCalendly}
      >
        Book Now
      </button>
    </nav>
  );
};

export default Navbar;
