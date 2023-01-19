import React from "react";
import { motion } from "framer-motion";
import { ServiceCard } from "../components";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../client";

export default function About({ about }) {
  return (
    <>
      <section className="min-h-screen  md:px-4 w-full overflow-x-hidden max-w-7xl mx-auto justify-center"  id="about">
        <div className="w-full lg:mt-2 md:mt-2">
          <h1 className="font-inter md:text-4xl text-2xl px-6 font-bold text-gray-800">
            About{" "}
            <Link href="/">
              <span className="text-[#0BBEF2] ">Code</span>Index
            </Link>
          </h1>
          <div className="lg: grid lg:grid-cols-2 flex-row px-7 gap-16">
            <div className="">
              <p className="text-justify lg:mt-12 md:mt-6 font-inter font-medium text-gray-800 tracking-wide text-lg">
                {about[0].description}
              </p>
              <h3 className="mt-3 mb-2 text-xl font-inter font-semibold text-gray-800">
                Our Services
              </h3>
              {about[0].services.map((service) => (
                <ServiceCard
                key={service._key}
                image={service.icon}
                title={service.title}
                description={service.description}
              />
              ))}
            </div>
            <div  >
              <img className="w-full " src={urlFor(about[0].image)}  />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
