import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../client";

import { AiOutlineGithub, AiOutlineEye } from "react-icons/ai";

export default function ProjectCard({
  image,

  title,
  description,
  techs,
  github,
  preview,
}) {
  return (
    <div className= "w-full  bg-white rounded-xl  mb-2 border-2 shadow-custom shadow-gray-100">
      <img
        src={urlFor(image)}
        width={300}
        height={300}
        className="w-full h-[15rem] object-fill rounded-xl shadow-md"
      />
      <h1 className="pt-5 text-2xl font-semibold font-inter text-gray-700 mx-5">
        {title}
      </h1>
      <p className="my-2 px-5 text-md text-justify font-inter">{description}</p>
      <div className="flex flex-wrap pt-3 mb-2 px-2 justify-center">
        {techs.map((tech) => (
          <span
            key={tech}
            className=" border-2 rounded-lg px-2  py-1 text-sm font-semibold font-inter bg-gray-100 text-gray-800 tracking-wide"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-evenly px-2 pt-4 pb-3">
        <Link
          href={github}
          className="flex items-center font-inter text-lg font-medium px-6 py-2 border-2 rounded-md"
        >
          Github
          <AiOutlineGithub className="w-6 h-6 ml-1" />
        </Link>
        <Link
          href={preview}
          className="flex items-center font-inter text-lg font-medium px-6 py-2 border-2 rounded-md"
        >
          Preview
          <AiOutlineEye className="w-6 h-6 ml-1" />
        </Link>
      </div>
    </div>
  );
}
