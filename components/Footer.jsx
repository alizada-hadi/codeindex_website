import React from "react";
import Link from "next/link";

import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div className=" bg-[#121127] pt-10">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 pt-5 py-10 px-4">
          <div className="text-gray-300 flex flex-col space-y-5">
            <img src="images/logo20.png" width={200} alt="" />
            <p>We Craft Beautiful App and User Interface</p>
            <div className="flex text-2xl space-x-6 ">
              <Link href={""}>
                <BsFacebook />
              </Link>
              <Link href={""}>
                <BsTwitter />
              </Link>
              <Link href={""}>
                <BsGithub />
              </Link>
              <Link href={""}>
                <BsLinkedin />
              </Link>
            </div>
          </div>

          <div className="">
            <p className="text-footer text-md py-5">CONTACT US</p>
            <ul className="text-white">
              <li>
                <Link href={"#"}>About</Link>
              </li>
              <li>
                <Link href={"#"}>Team</Link>
              </li>
              <li>
                <Link href={"#"}>Blog</Link>
              </li>
              <li>
                <Link href={"#"}>Projects</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-footer py-5 text-md">CAMPANY</p>
            <ul className="text-white">
              <li>
                <Link href={"#"}>info@codeindex.io</Link>
              </li>
              <li>
                <Link href={"#"}>0093 747 516 246</Link>
              </li>
              <li>
                <Link href={"#"}>13th dustrict, kabul, Afghanistan</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-footer py-5 text-md">
              SUBSCRIBE TO OUR NEWSLETTER
            </p>
            <div className="relative">
              <input
                type="text"
                className="bg-white h-10 w-full px-4 rounded-lg focus:outline-none hover:cursor-pointer"
                name=""
                placeholder="Your Email"
              />
              <span className="absolute top-4 right-5  pl-4 py-10">
                <img
                  src="images/Vector.png"
                  className="h-4 w-14 absolute -top-1 -right-2 cursor-pointer"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl border-t border-gray-500 mx-auto">
        <p className="text-center py-10 text-footer">
          © 2023 codingRah, Inc. All right reserved
        </p>
      </div>
    </div>
  );
}
