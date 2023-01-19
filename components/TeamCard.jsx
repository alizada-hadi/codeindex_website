import React from "react";
import Link from "next/link";
import { urlFor } from "../client";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function TeamCard({ image, name, position, socialAccounts }) {
  return (
    <div className="md:w-[35rem] w-[18rem] bg-gray-100 dark:bg-gray-900 md:h-[18rem] -px-16 h-[25rem] mx-auto rounded-2xl mt-10">
      <section className="flex md:flex-row flex-col items-start justify-center mr-10 space-x-16">
        <div>
          <div className="md:w-48 md:h-48 w-40 h-40 rounded-full lg:left-3 relative left-[40%] bg-white mt-8">
            <img src={urlFor(image)} className="w-full h-full rounded-full" />
          </div>
        </div>
        <div className="md:mt-12 mt-2 justify-center items-center flex w-full flex-col md:space-y-6">
          <h1 className="text-2xl text-center font-roboto font-bold w-full relative right-10 dark:text-slate-300 tracking-wider text-gray-800">
            {name}
          </h1>
          <h6 className="text-center px-3 py-1 bg-white dark:bg-gray-700 relative right-10 dark:text-slate-200 rounded-lg text-lg text-gray-600 mt-3 font-semibold font-inter tracking-wide">
            {position}
          </h6>
          <div className=" justify-evenly mt-5">
            {socialAccounts.map((item, index) => {
              const { facebook, instagram, linkedin, github } = item;
              return (
                <div className="flex relative right-10" key={index}>
                  {instagram ? (
                    <Link href={`${instagram}`}>
                      {" "}
                      <AiOutlineInstagram className="w-12 h-12 text-gray-800 p-2 mx-1 bg-white dark:bg-gray-700 dark:text-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition duration-200 ease-in-out" />
                    </Link>
                  ) : (
                    ""
                  )}
                  {facebook ? (
                    <Link href={`${facebook}`}>
                      {" "}
                      <AiOutlineFacebook className="w-12 h-12 text-gray-800 p-2 mx-1 bg-white dark:bg-gray-700 dark:text-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition duration-200 ease-in-out" />
                    </Link>
                  ) : (
                    ""
                  )}
                  {linkedin ? (
                    <Link href={`${linkedin}`}>
                      {" "}
                      <AiOutlineLinkedin className="w-12 h-12 text-gray-800 p-2 mx-1 bg-white dark:bg-gray-700 dark:text-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition duration-200 ease-in-out" />
                    </Link>
                  ) : (
                    ""
                  )}
                  {github ? (
                    <Link href={`${github}`}>
                      {" "}
                      <AiOutlineGithub className="w-12 h-12 text-gray-800 p-2 mx-1 bg-white dark:bg-gray-700 dark:text-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition duration-200 ease-in-out" />
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
