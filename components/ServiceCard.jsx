import React from "react";
import Image from "next/image";
import { urlFor } from "../client";

export default function ServiceCard({ image, title, description }) {
  return (
    <section className="flex flex-row  items-start md:space-x-3 lg:space-x-5 sm:ml-0 max-w-7xl   mt-6">
      <img
        src={urlFor(image)}
        width={60}
        height={60}
        className="w-14 h-14 px-2 dark:bg-slate-200 dark:rounded-lg dark:p-2"
      />
      <div className="">
        <h3 className=" text-lg font-semibold font-inter dark:text-slate-200 text-gray-700">
          {title}
        </h3>
        <p className=" mt-2 text-justify font-inter font-medium ">
          {description}
        </p>
      </div>
    </section>
  );
}
