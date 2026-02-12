'use client';
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiRedux, SiFirebase, SiExpress, SiMongodb } from "react-icons/si";
import { about } from "../../data/about.js";

const About = () => {
  const skills = [
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "Express", icon: <SiExpress />, color: "#000000" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub />, color: "#181717" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-dark to-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Get to know me!</h3>
              <div className="space-y-4 text-slate-300 relative z-10">
                <p className="font-medium text-lg text-white">
                  I am a <span className="text-secondary">Frontend Developer</span> specializing in React and React Native for web and mobile development.
                </p>
                {about.map((item) => (
                  <p key={item.id} className="leading-relaxed">
                    {item.description}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-white mb-8">My Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/50 transition-all cursor-default"
                  >
                    <span className="text-xl" style={{ color: skill.color }}>{skill.icon}</span>
                    <span className="text-slate-200 font-medium text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;