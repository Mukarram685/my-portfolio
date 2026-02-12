'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaEnvelope, FaFolder, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home', icon: <FaHome /> },
    { name: 'About', to: 'about', icon: <FaUser /> },
    { name: 'Projects', to: 'projects', icon: <FaFolder /> },
    { name: 'Contact', to: 'contact', icon: <FaEnvelope /> },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-display font-bold text-gradient cursor-pointer"
          >
            Mukarram Ali
          </motion.h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors cursor-pointer font-medium"
                >
                  <span className="text-primary">{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-3/4 max-w-xs bg-dark-light/95 backdrop-blur-xl shadow-2xl z-40 md:hidden flex flex-col items-center justify-center space-y-8 border-l border-white/10"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-center space-y-2 text-xl text-slate-200 hover:text-primary transition-colors cursor-pointer"
              >
                <div className="p-3 bg-white/5 rounded-full text-primary">
                  {link.icon}
                </div>
                <span className="font-display font-medium">{link.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
