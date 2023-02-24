import React, { useState } from "react";
import { ProjectCard } from "../components";
import { motion } from "framer-motion";
import { urlFor } from "../client";

export default function Projects({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [animatedCard, setAnimatedCard] = useState({ y: 0, opacity: 1 });
  const [filterProjects, setFilterProjects] = useState(
    projects.filter((project) => project.category.includes("All"))
  );

  const handleWorkFilter = (item) => {
    setSelectedCategory(item);
    setAnimatedCard([{ y: 100, opacity: 1 }]);

    setTimeout(() => {
      setAnimatedCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterProjects(
          projects.filter((project) => project.category.includes("All"))
        );
      } else {
        setFilterProjects(
          projects.filter((project) => project.category.includes(item))
        );
      }
    }, 500);
  };
  const lists = ["All", "Mobile App", "Web", "Desktop", "UI/UX"];
  return (
    <div className="pb-24 lg:pb-48 relative" id="projects">
      <section className="max-w-7xl items-center mx-auto ">
        <h1 className=" pt-16 text-center font-bold text-4xl font-poppins">
          Our Recent Projects
        </h1>

        <div className="flex flex-wrap  items-center justify-center pt-5">
          {lists.map((list) => (
            <div
              onClick={() => handleWorkFilter(list)}
              className={`${
                list === selectedCategory
                  ? "flex my-1 justify-center text-white cursor-pointer items-center text-[16px] font-semibold hover:text-white hover:bg-blue-600 border border-gray-200 transition-all bg-blue-600 ease-in-out duration-500 space-x-5 px-5 mx-1 py-2 rounded-lg"
                  : "flex my-1 justify-center text-gray items-center text-[16px] cursor-pointer font-semibold hover:text-white hover:bg-blue-600 border border-gray-200 transition-all ease-in-out duration-500 space-x-5 px-5 mx-1 py-2 rounded-lg"
              }`}
            >
              {list}
            </div>
          ))}
        </div>

        <motion.div
          whileInView={{ y: [-100, 0] }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 justify-center"
        >
          {filterProjects.map((project) => (
            <div
              key={project._key}
              className="rounded-lg w-[370px] h-[300px] px-2 relative py-5 mb-24 mx-auto"
            >
              <img
                src={urlFor(project.image)}
                alt=""
                className="object-cover rounded-lg h-[300px] w-[370px]"
              />
              <div className="absolute flex items-center flex-col w-[315px] z-50 h-[185px] left-[26px] text-[#212B36] rounded-lg bg-white -bottom-28 shadow-md">
                <h3 className="px-5 py-4 text-[20px] font-bold font-poppins">
                  {project.title}
                </h3>
                <div className="flex flex-row items-center space-x-4 text-[#3056D3] mx-auto">
                  {project.techs.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <button className="py-3 px-8 border border-gray-200  text-[#637381] hover:bg-[#3056D3] hover:text-white rounded-md hover: mt-4">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="w-full">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            animate={animatedCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
          >
            <section className=" grid lg:grid-cols-3 max-w-7xl md:grid-cols-2 md:px-2 lg:px-2 mx-auto  grid-cols-1 px-10 mt-10 gap-16"></section>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
