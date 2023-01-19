import React, { useState } from "react";
import { ProjectCard } from "../components";
import { motion } from "framer-motion";

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
  return (
    <div
      className="min-h-screen  mx-auto bg-slate-50 dark:bg-slate-900"
      id="projects"
    >
      <section className="w">
        <h1 className="font-inter text-5xl dark:text-slate-200 font-semibold text-gray-800 pt-32 text-center">
          Our Projects
        </h1>

        <div className="w-full">
          <div className="flex flex-row flex-wrap lg:space-x-4 items-center justify-center mt-5">
            {["All", "Mobile App", "Web", "Desktop", "UI/UX"].map((item) => (
              <div
                onClick={() => handleWorkFilter(item)}
                className={`${
                  item === selectedCategory
                    ? "px-3 py-1 border-2 rounded-full font-inter dark:text-slate-200 text-lg font-semibold  cursor-pointer bg-slate-700 text-white hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
                    : "px-3 py-1 border-2 rounded-full font-inter dark:text-slate-200 text-lg font-semibold text-gray-700 cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
                }`}
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            animate={animatedCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
          >
            <section className=" grid lg:grid-cols-3 max-w-7xl md:grid-cols-2 md:px-2 lg:px-2 mx-auto  grid-cols-1 px-2 mt-10 gap-16">
              {filterProjects.map((project) => (
                <ProjectCard
                  key={project._id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  techs={project.techs}
                  github={project.githubLink}
                  preview={project.previewLink}
                />
              ))}
            </section>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
