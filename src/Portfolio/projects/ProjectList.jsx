'use client';
import React, { useState } from "react";
import ProjectComponent from "./ProjectComponent";
import ProjectDetail from "./ProjectDetail";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";

const ProjectsList = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 relative px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectComponent
              key={index}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={toggleShowAll}
            className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full transition-all font-medium backdrop-blur-sm"
          >
            {showAll ? "Show Less" : "View All Projects"}
          </button>
        </div>

        <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
      </div>
    </section>
  );
};

export default ProjectsList;