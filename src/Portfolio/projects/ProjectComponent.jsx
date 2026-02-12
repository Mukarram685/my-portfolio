'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectComponent = ({ project, onClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 4000); // Slower, smoother transition
    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="glass rounded-xl overflow-hidden cursor-pointer group hover:shadow-2xl hover:shadow-primary/20"
      onClick={onClick}
    >
      {/* Image Carousel */}
      <div className="relative h-60 w-full overflow-hidden bg-dark-light/50">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={(project.images && project.images.length > 0) ? (project.images[currentImageIndex]?.src || project.images[currentImageIndex]) : ""}
            alt={`${project.title} - View ${currentImageIndex + 1}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-60" />

        {/* Chips overlay */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="text-xs backdrop-blur-md bg-white/10 border border-white/10 px-2 py-1 rounded-full text-white/90">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs backdrop-blur-md bg-white/10 border border-white/10 px-2 py-1 rounded-full text-white/90">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectComponent;