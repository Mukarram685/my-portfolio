'use client';
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {

  const whatsappNumber = "923098183945";
  const whatsappMessage = "Hi! How may I help you?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-dark pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] animate-shine opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-display font-bold text-white mb-6">Mukarram Ali</h2>
          <p className="text-slate-400 max-w-sm leading-relaxed mb-8">
            Building digital experiences that matter. Focused on performance, aesthetics, and user satisfaction.
          </p>
          <div className="flex space-x-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-primary transition-colors text-slate-300">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://github.com/Mukarram685" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-primary transition-colors text-slate-300">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-mukarram-9220b9312/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-primary transition-colors text-slate-300">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6">Navigation</h3>
          <ul className="space-y-4 text-slate-400">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link to={item.toLowerCase()} smooth={true} duration={500} offset={-70} className="hover:text-primary cursor-pointer transition-colors block w-fit">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6">Get in touch</h3>
          <p className="text-slate-400 mb-4">
            Have a project? Let's discuss.
          </p>
          <Link to="contact" smooth={true} duration={500} offset={-70} className="cursor-pointer text-primary hover:text-white transition-colors font-medium">
            Contact Me &rarr;
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Muhammad Mukarram. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed & Developed with Passion</p>
      </div>
    </footer>
  );
}
