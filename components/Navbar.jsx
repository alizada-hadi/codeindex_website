import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const navigations = ["Home", "About", "Team", "Projects", "Blog", "Contact"];
  return (
    <motion.nav
      initial="hidden"
      whileInView="show"
      className={`flex justify-between md:justify-start md:space-x-10 py-[33px] text-gray ${showNav}? "h-screen":""`}
    >
      <div className="absolute md:relative top-0 left-0 md:flex ">
        <img src="images/logo20.png" width={200} alt="" />
      </div>
      {showNav === false ? (
        <ul className="absolute max-w-7xl transition-all ease-in-out duration-1000 left-0 top-20 md:top-0 pb-44 md:pb-0 md:relative bg-gradient md:bg-none pb-[20rem ] text-center  z-50  w-full  md:flex  justify-center md:space-x-11 mx-auto md:items-center font-poppins">
          {navigations.map((navigation) => (
            <li key={navigation} className="nav-li md:rounded-lg">
              <Link
                onClick={() => setShowNav(!showNav)}
                href={`#${navigation}`}
              >
                {navigation}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="hidden max-w-7xl transition-all ease-in-out duration-1000 left-0 top-20 md:top-0 pb-44 md:pb-0 md:relative bg-gradient md:bg-none pb-[20rem ] text-center  z-50  w-full  md:flex  justify-center md:space-x-11 mx-auto md:items-center font-poppins">
          {navigations.map((navigation) => (
            <li key={navigation}>
              <Link href={`#${navigation}`}>{navigation}</Link>
            </li>
          ))}
        </ul>
      )}
      <span className="block absolute top-0 right-0 md:relative md:hidden pt-10 px-5">
        {showNav === true ? (
          <GiHamburgerMenu
            className="text-2xl text-gray-800"
            onClick={() => setShowNav(!showNav)}
          />
        ) : (
          <AiOutlineClose
            className="text-2xl text-gray-800"
            onClick={() => setShowNav(!showNav)}
          />
        )}
      </span>
    </motion.nav>
  );
}
