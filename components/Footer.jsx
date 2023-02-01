import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-[#3C4862] dark:bg-black pt-4 md:px-14 lg:px-18 py-10 px-2  mx-auto  ">
      <div className="justify-center ">
        <div className="flex flex-col justify-between w-[21rem] -mt-4 ">
          <div className="pt-6 md:pt-0">
            <div className="font-inter pt-10 text-xl font-bold ">
              {" "}
              <Link href="/">
                <span className="text-[#0BBEF2]">Coding</span>Rah
              </Link>
            </div>

            <p className="text-slate-200 font-inter mt-2">
              We Craft Beautiful App and User Interface{" "}
            </p>
          </div>
        </div>
        <section className="grid lg:grid-cols-4  grid-cols-2 md:pt-2 lg:pt-0  pt-2  ">
          <div className="">
            <h1 className="md:text-xl text-lg font-bold font-inter text-slate-100 tracking-wide">
              Company
            </h1>
            <Link
              href="#about"
              className="text-slate-100 md:text-md text-md font-normal mt-6 font-inter"
            >
              About
            </Link>
            <br />
            <Link
              href="#team"
              className="text-slate-100 md:text-md text-md font-normal mt-2 font-inter"
            >
              Team
            </Link>
            <br />
            <Link
              href="#blog"
              className="text-slate-100 md:text-md text-md font-normal mt-2 font-inter"
            >
              Blog
            </Link>
            <br />
            <Link
              href="#projects"
              className="text-slate-100 text-md font-normal mt-2 font-inter"
            >
              Projects
            </Link>
          </div>

          <div className="">
            <h1 className="md:text-xl text-lg  font-bold font-inter text-slate-100 tracking-wide">
              Contact Us
            </h1>
            <Link
              href=""
              className="text-slate-100 md:text-md text-md  font-normal font-inter"
            >
              info@codeindex.io
            </Link>
            <br />

            <Link
              href=""
              className="text-slate-100 md:text-md text-md  font-normal font-inter"
            >
              0093 747 516 246
            </Link>
            <p className="text-slate-100 md:text-md text-md  font-normal font-inter">
              13th district Kabul, Afghanistan
            </p>
          </div>

          <div className=" lg:mx-2 lg:pt-0 pt-4">
            <h1 className="md:text-xl text-lg font-bold font-inter text-slate-100 tracking-wide lg:pb-2">
              Stay up to date
            </h1>
            <form action="" className="">
              <label className=" md:text-md text-md font-inter text-slate-200 w-full">
                Subscribe to our newsletter
              </label>
              <input
                type="email"
                placeholder="Email"
                className="bg-slate-500 md:py-2 py-1 w-44 md:w-72 lg:w-60 mt-1 rounded-md  md:pl-3 pl-1 text-lg text-slate-200 font-semibold"
              />
              <BsArrowRight className="relative md:left-60  left-36 lg:left-52 bottom-8 text-slate-200 text-2xl " />
            </form>
          </div>

          <div className="lg:pt-0 pt-4  ">
            <h1 className="md:text-xl text-lg font-bold font-inter text-slate-100 tracking-wide md:pb-2">
              Stay in touch
            </h1>
            <div className="flex items-center space-x-4 mx-auto">
              {[
                { icon: <AiOutlineInstagram />, link: "" },
                { icon: <AiOutlineLinkedin />, link: "" },
                { icon: <AiOutlineFacebook />, link: "" },
                { icon: <AiOutlineGithub />, link: "" },
              ].map((item) => {
                const { icon, link, index } = item;
                return (
                  <Link
                    key={index}
                    className="text-white lg:text-4xl md:text-4xl text-3xl text-justify"
                    href={`${link}`}
                  >
                    {icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
