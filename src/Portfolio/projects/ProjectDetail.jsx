'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { check } from "../../assets/images";

const ProjectDetail = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (project) {
            setIsVisible(true);
            setCurrentImageIndex(0); // Reset on new project
        } else {
            setIsVisible(false);
        }
    }, [project]);

    if (!project && !isVisible) return null;

    return (
        <AnimatePresence>
            {project && ( // Only render if project exists to avoid null access during exit anim
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
                    />

                    {/* Slide Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-y-0 right-0 z-50 w-full md:w-[600px] bg-dark-light border-l border-white/10 shadow-2xl flex flex-col h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-dark/50">
                            <h2 className="text-2xl font-display font-bold text-white">{project.title}</h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                            {/* Image Gallery */}
                            <div className="space-y-4">
                                <div className="h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-black/40 border border-white/5 relative group">
                                    <img
                                        src={project.images[currentImageIndex]?.src || project.images[currentImageIndex]}
                                        alt={`${project.title} gallery image ${currentImageIndex + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {/* Navigation hints could go here */}
                                    </div>
                                </div>
                                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                    {project.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
                                                }`}
                                        >
                                            <img src={img?.src || img} alt="thumbnail" className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Description</h3>
                                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                                        {project.description}
                                    </p>
                                    {project.longDescription && (
                                        <p className="text-slate-300 leading-relaxed text-sm sm:text-base mt-2">
                                            {project.longDescription}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-white mb-3">Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 text-primary rounded-full text-sm font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {project.features && project.features.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-3">Key Features</h3>
                                        <ul className="space-y-2">
                                            {project.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                                                    <img src={check?.src || check} alt="Checkmark icon" className="w-5 h-5 mt-0.5 opacity-80" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectDetail;
