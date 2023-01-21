import React, { useContext } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import SocialIcon from "./SocialIcon";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const navigations = ["home", "about", "team", "projects", "blog", "contact"];
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`w-full justify-center dark:bg-gray-800 bg-white mx-auto ${
        navbar ? "h-screen" : ""
      }`}
    >
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="font-inter text-xl font-bold">
              {" "}
              <Link href="/">
                <span className="text-[#0BBEF2]">Code</span>Index
              </Link>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <AiOutlineClose className="text-2xl font-bold dark:text-slate-200" />
                ) : (
                  <HiOutlineMenuAlt1 className="text-2xl font-bold dark:text-slate-200 rotate-180 cursor-pointer" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul
              className={`items-center justify-center space-y-8 w-full md:flex md:space-x-6 md:space-y-0`}
            >
              {navigations.map((navigation) => (
                <li key={navigation} className="w-full">
                  <Link
                    onClick={() => setNavbar(false)}
                    href={`#${navigation}`}
                    className="font-inter dark:text-slate-200 capitalize text-md tracking-wide font-medium hover:border-b-[2.5px] border-cyan-900 transition duration-500 ease-in-out"
                  >
                    {navigation}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 mb-4 space-y-2 md:hidden sm:inline-block">
              <SocialIcon />
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 lg:inline-block">
          <SocialIcon />
        </div>
      </div>
    </motion.nav>
  );
}
