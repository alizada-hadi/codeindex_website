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
    <div className=" mt-12 bg-[#3C4862] dark:bg-black px-16">
      <section className="grid lg:grid-cols-5   md:grid-cols-3 mx-auto pt-16 gap-8 pb-5">
        <div className="flex flex-col justify-between">
          <div>
            <div className="font-inter text-xl font-bold">
              {" "}
              <Link href="/">
                <span className="text-[#0BBEF2]">Code</span>Index
              </Link>
            </div>

            <p className="text-slate-200 font-inter mt-4">
              We Craft Beautiful App and User Interface{" "}
            </p>
          </div>
        </div>
       
         
            <div className="flex flex-col">
              <h1 className="text-xl font-bold font-inter text-slate-100 tracking-wide">
                Company
              </h1>
              <Link
                href="#about"
                className="text-slate-100 text-lg font-normal mt-6 font-inter"
              >
                About
              </Link>
              <Link
                href="#team"
                className="text-slate-100 text-lg font-normal mt-2 font-inter"
              >
                Team
              </Link>
              <Link
                href="#blog"
                className="text-slate-100 text-lg font-normal mt-2 font-inter"
              >
                Blog
              </Link>
              <Link
                href="#projects"
                className="text-slate-100 text-lg font-normal mt-2 font-inter"
              >
                Projects
              </Link>
            </div>
            <div>
              <h1 className="text-xl mb-6 font-bold font-inter text-slate-100 tracking-wide">
                Contact Us
              </h1>
              <Link
                href=""
                className="text-slate-100 text-lg font-normal font-inter"
              >
                info@codeindex.io
              </Link>
              <br />

              <Link
                href=""
                className="text-slate-100 text-lg mt-6 font-normal font-inter"
              >
                0093 747 516 246
              </Link>
              <p className="text-slate-100 text-lg mt-6 font-normal font-inter">
                13th district Kabul, Afghanistan
              </p>
            </div>
            <div className=" md:mx-auto">
              <h1 className="text-xl mb-6 font-bold font-inter text-slate-100 tracking-wide">
                Stay up to date
              </h1>
              <form action="" className="">
                <label
                  htmlFor=""
                  className="ml-3 text-xl font-inter text-slate-200"
                >
                  Subscribe to our newsletter
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-slate-500 py-3 w-64 mt-3 rounded-md ml-3 pl-3 text-lg text-slate-200 font-semibold"
                />
                <BsArrowRight className="relative left-56 bottom-10 text-slate-200 text-2xl " />
              </form>
            </div>
      
  
        <div className="md:col-span-2 md:mx-auto pb-4 lg:col-span-1 xl:col-span-1 ">
          <h1 className="text-xl font-bold font-inter text-slate-100 tracking-wide">
            Stay in touch
          </h1>
          <div className="flex items-center mt-6 mx-auto">
            {[
              { icon: <AiOutlineInstagram />, link: "" },
              { icon: <AiOutlineLinkedin />, link: "" },
              { icon: <AiOutlineFacebook />, link: "" },
              { icon: <AiOutlineGithub />, link: "" },
            ].map((item) => {
              const { icon, link } = item;
              return (
                <Link className="text-white text-5xl text-justify" href={`${link}`}>
                  {icon}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}