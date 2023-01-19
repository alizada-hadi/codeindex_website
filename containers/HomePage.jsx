import React from "react";
import { Navbar, TypingText } from "../components";
import { shape, robot } from "../assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowDownShort } from "react-icons/bs";
import { slideIn, textContainer } from "../utils/motion";

export default function HomePage() {
  return (
    <div className="lg:h-screen md:h-[59vh] sm:h-[83vh] ">
      <Navbar />
      <div className="2xl:px-60 xl:px-8 lg:px-4 md:px-0 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto">
        <div className="lg:col-span-2 mx-auto">
          <section className="">
            <div className="lg:pt-[12rem] md:pt-[8rem] pt-16 mt z-50">
              <motion.h1
                whileInView={{ x: [-100, 0] }}
                transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
                className="font-inter xl:text-7xl z-50 lg:text-6xl md:text-4xl sm: text-3xl sm:text-center px-4   font-[900] text-gray-800"
              >
                We Code Delightful <br />
                <p className="pb-2 pt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#2E3192] to-[#1BFFFF]">
                  Digital Experiences
                </p>
              </motion.h1>
               
                <div className="text-justify ">
              <p className="lg:text-xl text-lg text-gray-700 font-medium font-inter  lg:mt-10 lg:pl-14 px-8 lg: xl:w-[40rem]">
                We strive to make your work easier by working hard to deliver
                high-quality solutions
              </p>

              <button
                whileInView={{ x: [-100, 0] }}
                transition={{ duration: 0.5 }}
                className="flex items-center mt-8  py-3 px-8 tracking-wide border-2 rounded-lg text-gray-700 mx-14 bg-white font-inter text-xl font-semibold hover:shadow-sm hover:border-cyan-400 transition duration-200 ease-linear"
              >
                Get Started{" "}
                <BsArrowDownShort className="text-3xl ml-2 animate-bounce" />
              </button>
            </div>
            </div>
          </section>
        </div>
        <div className=" pb-10">

        <motion.div className="mt-0 lg:absolute xl:right-30 md:pt-[8rem] lg:right-26 -z-10">
          <motion.img
            whileInView={{ y: [-100, 0] }}
            transition={{
              duration: 0.75,
              delay: 0,
              type: "spring",
              stiffness: 90,
            }}
            
            src="/images/hero/2.jpg"
            className="xl:w-[46rem] xl:px-6 lg:mt-[8rem] lg:w-[30rem] md:w-[44rem] sm: w-[30rem] object-cover "
            />
        </motion.div>
            </div>
            <div></div>
      </div>
    </div>
  );
}
