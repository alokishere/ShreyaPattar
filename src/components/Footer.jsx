import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const mattePalette = {
  bg: "bg-gradient-to-br from-[#23272f] via-[#2d313a] to-[#23272f]",
  accent: "bg-gradient-to-r from-[#3b82f6] to-[#818cf8]",
  accentHover: "bg-gradient-to-r from-[#2563eb] to-[#a5b4fc]",
  accentText: "text-[#3b82f6]",
  accentTextHover: "text-[#60a5fa]",
  border: "border-[#3b3f4a]",
  text: "text-gray-100",
  subtext: "text-gray-400",
};

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`relative overflow-hidden ${mattePalette.bg} text-white py-16 px-4 border-t ${mattePalette.border}`}
    >
      
      <div className="absolute left-0 top-0 w-60 h-60 bg-gradient-to-br from-[#818cf8]/30 to-[#3b82f6]/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute right-0 bottom-0 w-44 h-44 bg-gradient-to-tr from-[#f59e42]/30 to-[#ea580c]/10 rounded-full blur-2xl -z-10 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center relative z-10"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-7 bg-gradient-to-r from-[#3b82f6] via-[#818cf8] to-[#60a5fa] bg-clip-text text-transparent tracking-wide drop-shadow-lg"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Connect With Me
        </motion.h2>

        <div className="flex justify-center gap-7 mb-12">
          <SocialLink
            to="https://www.instagram.com/shreyapattar/"
            color="from-pink-500/30 to-pink-400/10"
            shadow="shadow-pink-500/30"
            icon={<InstagramIcon size={24} />}
            hoverColor="hover:from-pink-500 hover:to-pink-400"
          />
          <SocialLink
            to="https://x.com/ShreyaPattar"
            color="from-blue-500/30 to-blue-400/10"
            shadow="shadow-blue-500/30"
            icon={<TwitterIcon size={24} />}
            hoverColor="hover:from-blue-500 hover:to-blue-400"
          />
          <SocialLink
            to="https://www.linkedin.com/in/shreya-pattar/"
            color="from-blue-700/30 to-blue-400/10"
            shadow="shadow-blue-700/30"
            icon={<LinkedinIcon size={24} />}
            hoverColor="hover:from-blue-700 hover:to-blue-400"
          />
          <SocialLink
            to="https://www.youtube.com/@ShreyaPattar"
            color="from-red-600/30 to-red-400/10"
            shadow="shadow-red-600/30"
            icon={<YoutubeIcon size={24} />}
            hoverColor="hover:from-red-600 hover:to-red-400"
          />
        </div>

        <motion.div
          className="text-sm text-gray-400 flex flex-col md:flex-row justify-center gap-7 mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FooterLink to="/privacy-policy" label="Privacy Policy" />
          <FooterLink to="/terms-of-service" label="Terms of Service" />
          <FooterLink to="/faq" label="FAQ" />
        </motion.div>

        <motion.p
          className="text-xs text-gray-500"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          © 2025 Shreya Pattar. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

const SocialLink = ({ to, icon, color, shadow, hoverColor }) => (
  <motion.div
    whileHover={{
      scale: 1.18,
      rotate: 8,
      boxShadow: "0 0 24px 0 rgba(129,140,248,0.25)",
      y: -4,
    }}
    transition={{ type: "spring", stiffness: 300, damping: 18 }}
    className="group"
  >
    <Link
      to={to}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        h-12 w-12
        bg-gradient-to-br ${color}
        ${hoverColor}
        text-white
        rounded-full
        flex items-center justify-center
        transition-all duration-300
        shadow-lg
        group-hover:scale-110
        group-hover:shadow-xl
        border border-[#3b3f4a]
        outline-none
        focus:ring-2 focus:ring-[#818cf8]
      `}
      tabIndex={0}
    >
      <motion.span
        whileHover={{ scale: 1.25, rotate: -8 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
        className="flex items-center justify-center"
      >
        {icon}
      </motion.span>
    </Link>
  </motion.div>
);

const FooterLink = ({ to, label }) => (
  <motion.div
    whileHover={{
      scale: 1.08,
      color: "#60a5fa",
      x: 2,
      textShadow: "0 2px 12px #818cf8",
    }}
    transition={{ type: "spring", stiffness: 250, damping: 18 }}
    className="inline-block"
  >
    <Link
      to={to}
      className="hover:text-[#60a5fa] transition-colors duration-200 px-2"
    >
      {label}
    </Link>
  </motion.div>
);

export default Footer;
