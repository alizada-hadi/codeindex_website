import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="pb-72 bg-gradient " id="Home">
      <div className="w-full md:max-w-7xl mx-auto px-5 ">
        <Navbar />
        <div className="relative pt-[90px] sm:pt-[70px] md:pt-[100px] xl:pt-[190px] mx-auto ">
          <motion.h1
            whileInView={{ x: [-100, 0] }}
            transition={{ duration: 0.5 }}
            className="text-[34px] pr-10 md:pr-0 lg:leading-[75px] font-poppins md:text-[40px]  lg:text-[56px] md:w-[495px] text-[#070E25] font-bold"
          >
            We Code Delightful Digital Experiences
          </motion.h1>
          <motion.p
            whileInView={{ x: [-100, 0] }}
            transition={{ duration: 0.75 }}
            className="text-gray pt-[12px] font-poppins text-[20px] w-full md:w-[456px]"
          >
            We strive to make your work easier by working hard to deliver
            high-quality solutions.
          </motion.p>
          <motion.div
            whileInView={{ x: [-100, 0] }}
            transition={{ duration: 1 }}
            className="pt-12 flex justify-between  md:justify-start space-x-3 md:space-x-6"
          >
            <button className="bg-blue font-poppins hover:bg-indigo-500 py-3 px-10 text-white rounded-md transition-all ease-in-out duration-200 ">
              Get Started
            </button>
            <button className="shadow-sm mx-10 font-poppins text-gray-900 py-3 border border-gray-400 hover:bg-indigo-600 hover:text-white transition-all ease-in-out duration-500 rounded-md px-7">
              Learn more
            </button>
          </motion.div>
        </div>
        <motion.img
          whileInView={{ x: [-100, 0] }}
          transition={{ duration: 1 }}
          className="absolute hidden md:block md:right-[30px] lg:right-[69px]  top-[270px] xl:right-48"
          src="images/Image.png"
          alt=""
        />

        <motion.div
          whileInView={{ y: [-100, 0] }}
          transition={{ duration: 0.4 }}
          className="absolute md:top-[133px] xl:top-[166px] hidden md:block md:right-[26px] lg:right-[69px]  xl:right-[289px]"
        >
          <img
            className="md:h-[440px] lg:h-full"
            src="images/Phone Front 1.png"
            alt=""
          />
        </motion.div>
        <motion.img
          whileInView={{ x: [-100, 0] }}
          transition={{ duration: 0.6 }}
          className="absolute md:top-[400px] xl:top-[570px]  hidden md:block md:right-[130px] lg:right-[269px] xl:right-[500px]"
          src="images/Image (1).png"
          alt=""
        />
      </div>
    </div>
  );
}
