import React from "react";
import { motion } from "framer-motion";
import { ServiceCard } from "../components";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../client";

export default function About({ about }) {
  return (
    <div className="lg:pb-60  max-w-7xl mx-auto" id="About">
      <motion.div
        whileInView={{ x: [-100, 0] }}
        transition={{ duration: 0.6 }}
        className="px-4"
      >
        {" "}
        <h1 className="pt-[120px] text-[32px] text-[#121127] pb-[18px] font-bold font-poppins">
          About CodingRah
        </h1>
        <p className="max-w-3xl py-5 text-[18px] text-gray font-poppins">
          {about[0].description}
        </p>
      </motion.div>
      <div className="pt-[70px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {about[0].services.map((service) => (
            <motion.div
              whileInView={{ y: [-100, 0] }}
              transition={{ duration: 0.75 }}
              className="mx-2"
              key={service._key}
            >
              <div className="px-5 h-96 rounded-lg  xl:mx-0 box-shadow mx-auto">
                <div className="py-16">
                  <img src="images/Polygon 1.png" className="-mb-10" alt="" />
                  <img
                    className="py-5 w-16"
                    src={urlFor(service.icon)}
                    alt="image"
                  />
                  <h5 className="py-3 font-poppins font-bold text-[16px]">
                    {service.title}
                  </h5>
                  <p className="font-poppins flex justify-center text-gray">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
