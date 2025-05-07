import React, { useEffect, useState } from "react";
import { projects } from "../../constants";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      offset: 100, // offset (in px) from the original trigger point
      once: false, // whether animation should happen only once
    });
  }, []);
  return (
    <section
      id="work"
      className="py-24 pb-24 px-[3vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <a key={project.id} href={project.link}>
            <div
              key={project.id}
              data-aos="zoom-in-up"
              className="border border-white bg-gray-900 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <div className="p-2">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;
