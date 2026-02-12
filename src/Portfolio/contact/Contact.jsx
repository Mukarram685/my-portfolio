'use client';
import React from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

function Contact() {
  const whatsappNumber = "923098183945";
  const whatsappMessage = "Hi! How may I help you?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const emailAddress = "muka654r@gmail.com";
  const emailSubject = "Contact from Portfolio";
  const emailBody = "Hello Mukarram, I came across your portfolio and would like to connect.";
  const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const socialLinks = [
    { name: "WhatsApp", icon: <FaWhatsapp />, link: whatsappLink, color: "#25D366" },
    { name: "Email", icon: <FaEnvelope />, link: emailLink, color: "#EA4335" },
    { name: "GitHub", icon: <FaGithub />, link: "https://github.com/Mukarram685", color: "#181717" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/muhammad-mukarram-9220b9312/", color: "#0077B5" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Connect with me</h3>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group"
                  >
                    <div className="p-3 rounded-full bg-white/5 text-2xl group-hover:scale-110 transition-transform" style={{ color: social.color }}>
                      {social.icon}
                    </div>
                    <div>
                      <span className="block text-slate-400 text-sm">{social.name}</span>
                      <span className="text-white font-medium group-hover:text-primary transition-colors">
                        {social.name === "WhatsApp" ? "+92 309 8183945" :
                          social.name === "Email" ? "muka654r@gmail.com" :
                            social.name === "GitHub" ? "Mukarram685" : "Mukarram"}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="glass p-8 rounded-2xl">
              <ContactForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
