import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="flex justify-between md:justify-start md:space-x-10 py-[33px] text-gray items-center relative">
      <span className="flex font-poppins items-start pr-5 text-2xl color-blue font-bold">
        Logo
      </span>
      <ul
        ul
        className="bg-gradient md:bg-none pb-[20rem  text-center  z-50  w-full  md:flex  justify-center md:space-x-11 mx-auto items-center font-poppins"
      >
        <li className="nav-li">
          <Link href={""}>Home</Link>
        </li>
        <li className="nav-li">
          <Link href={""}>About</Link>
        </li>
        <li className="nav-li">
          <Link href={""}>Team</Link>
        </li>
        <li className="nav-li">
          <Link href={""}>Projects</Link>
        </li>
        <li className="nav-li">
          <Link href={""}>Blog</Link>
        </li>
        <li className="nav-li">
          <Link href={""}>Contact</Link>
        </li>
      </ul>
      <span className="block md:hidden">
        {showNav === false ? (
          <GiHamburgerMenu
            className="text-2xl text-gray-800"
            onClick={() => setShowNav(false)}
          />
        ) : (
          <AiOutlineClose onClick={() => setShowNav(true)} />
        )}
      </span>
    </nav>
  );
}
