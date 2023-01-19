import React, { useState } from "react";
import { ProjectCard } from "../components";
import { project1 } from "../assets";

export default function Projects({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const changeCategory = (name) => {
    setSelectedCategory(name);
  };
  return (
    <div className="min-h-screen  mx-auto bg-slate-50" id="projects">
      <section className="w">
        <h1 className="font-inter text-5xl font-semibold text-gray-800 pt-32 text-center">
          Our Projects
        </h1>

        <div className="w-full">
          <div className="flex flex-row flex-wrap lg:space-x-4 items-center justify-center mt-5">
            {["All", "Mobile App", "Web", "Desktop", "UI/UX"].map((item) => (
              <div
                onClick={() => changeCategory(item)}
                className={`${
                  item === selectedCategory
                    ? "px-3 py-1 border-2 rounded-full font-inter text-lg font-semibold  cursor-pointer bg-slate-700 text-white hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
                    : "px-3 py-1 border-2 rounded-full font-inter text-lg font-semibold text-gray-700 cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
                }`}
                key={item}
              >
                {item}
              </div>
            ))}
          </div>

          <section className=" grid lg:grid-cols-3 max-w-7xl md:grid-cols-2 md:px-2 lg:px-2 mx-auto  grid-cols-1 px-2 mt-10 gap-16">
            {projects.map((project) => (
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
        </div>
      </section>
    </div>
  );
}
