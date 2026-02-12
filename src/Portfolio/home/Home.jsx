'use client';
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { technologies } from "../../data/about";
import { TypeAnimation } from 'react-type-animation'; // Assuming user might not have this, stick to custom or use existing logic but improved. 
// Actually, I'll use the existing logic inside a cleaner component or just standard framer motion text.
// Let's stick to the custom typing effect but make it cleaner, or just use a simple array rotation.

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-start px-6 sm:px-12 md:px-24 relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl z-10"
      >
        <h2 className="text-secondary font-medium tracking-wide mb-4 text-xl">
          Hello, I'm
        </h2>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-display font-bold text-white mb-6 leading-tight">
          Mukarram <span className="text-gradient">Ali</span>
        </h1>

        <div className="h-12 sm:h-16 mb-6">
          {/* Simple typing effect using existing logic refactored or simplified */}
          <TypingEffect words={technologies} />
        </div>

        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
          A results-driven web and mobile app developer specializing in building high-performance
          digital solutions. Committed to clean code, seamless user experiences, and driving product success.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="projects"
            smooth={true}
            duration={800}
            offset={-70}
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all cursor-pointer"
          >
            View My Work
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-slate-500 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-slate-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

// Internal Typing Component for cleaner code
const TypingEffect = ({ words }) => {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [reverse, setReverse] = React.useState(false);
  const [blink, setBlink] = React.useState(true);

  React.useEffect(() => {
    if (index >= words.length) {
      setIndex(0); // loop
      return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  React.useEffect(() => {
    const timeout2 = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timeout2);
  }, []);

  return (
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-300">
      I am <span className="text-secondary">{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</span>
    </h2>
  );
};

export default Home;
