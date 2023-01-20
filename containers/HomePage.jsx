import React from "react";
import { Navbar, TypingText } from "../components";
import { shape, robot } from "../assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowDownShort } from "react-icons/bs";
import { slideIn, textContainer } from "../utils/motion";

export default function HomePage() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="2xl:px-10 xl:px-8 lg:px-4 md:px-0 mb-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  max-w-7xl mx-auto">
        <div className="lg:col-span-2">
          <section className="mt-10">
            <div className="lg:pt-[12rem] md:pt-[8rem] pt-1 z-50">
              <motion.h1
                whileInView={{ x: [-100, 0] }}
                transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
                className=" dark:text-slate-200 font-inter xl:text-6xl z-50 lg:text-6xl md:text-4xl sm: text-3xl sm:text-start pt-4 px-3 font-[900] text-gray-800"
              >
                We Code Delightful <br />
                <p className="pb-2 pt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#2E3192] to-[#1BFFFF]">
                  Digital Experiences
                </p>
              </motion.h1>

              <div className="text-justify mt-5">
                <motion.p
                  whileInView={{ x: [-100, 0] }}
                  transition={{ delay: 0.75, type: "spring" }}
                  className="dark:text-slate-200 lg:text-xl text-lg text-gray-700 font-medium  font-inter lg:mt-10 px-4 text-start md:px-2 xl:w-[40rem]"
                >
                  We strive to make your work easier by working hard to deliver
                  high-quality solutions
                </motion.p>

                <motion.button
                  whileInView={{ x: [-100, 0] }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center mt-8  py-3 px-8 tracking-wide border-2 rounded-lg text-gray-700 mx-2 bg-white font-inter text-xl font-semibold hover:shadow-sm hover:border-cyan-400 transition duration-200 ease-linear"
                >
                  Get Started{" "}
                  <BsArrowDownShort className="text-3xl ml-2 animate-bounce" />
                </motion.button>
              </div>
            </div>
          </section>
        </div>
        <div className="lg:-mt-10 mt-10">
          <motion.div className="lg:absolute xl:right-30 md:pt-[4rem] lg:right-26 pt-10 -z-10">
            <motion.img
              whileInView={{ y: [-100, 0] }}
              transition={{
                duration: 0.75,
                delay: 0,
                type: "spring",
                stiffness: 90,
              }}
              src="/images/banner.png"
              className="xl:w-[42rem] xl:px-6 lg:mt-[2rem] lg:w-[30rem] md:w-[44rem] sm:w-[30rem] object-cover "
            />
          </motion.div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
