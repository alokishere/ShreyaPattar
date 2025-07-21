
import { NavLink } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const mattePalette = {
  bg: "bg-gradient-to-br from-[#23272f] via-[#2d313a] to-[#23272f]",
  card: "bg-[#23272f] bg-opacity-90",
  accent: "bg-gradient-to-r from-[#3b82f6] to-[#818cf8]",
  accentHover: "bg-gradient-to-r from-[#2563eb] to-[#a5b4fc]",
  accentText: "text-[#3b82f6]",
  accentTextHover: "text-[#60a5fa]",
  border: "border-[#3b3f4a]",
  text: "text-gray-100",
  subtext: "text-gray-400",
};

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/post", label: "Posts" },
  { to: "/about", label: "About" },
  { to: "/profile", label: "Profile" },
];

const Nav = () => {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
        }
      );
    }
  }, []);

  

  
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 border-b ${mattePalette.border} shadow-lg backdrop-blur-md ${mattePalette.bg} transition-all`}
      style={{
        boxShadow: "0 2px 24px 0 rgba(60,64,67,0.12)",
      }}
    >
      
      <div className="absolute left-0 top-0 w-40 h-40 bg-gradient-to-br from-[#818cf8]/30 to-[#3b82f6]/10 rounded-full blur-2xl -z-10 animate-pulse" />
      <div className="absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tr from-[#f59e42]/30 to-[#ea580c]/10 rounded-full blur-2xl -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 relative">
        <NavLink
          className="flex items-center gap-3 text-2xl font-extrabold bg-gradient-to-r from-[#3b82f6] via-[#818cf8] to-[#60a5fa] bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          <motion.img
            initial={{ rotate: 0, scale: 1 }}
            whileHover={{ rotate: 360, scale: 1.08, boxShadow: "0 0 16px #818cf8" }}
            transition={{ duration: 0.5, type: "spring" }}
            className="rounded-full h-11 w-11 object-cover border-2 border-[#818cf8] shadow-lg"
            src="src/assets/logo.webp"
            alt="Logo"
            draggable={false}
          />
          <span className="tracking-wide text-white drop-shadow-lg">Shreya Pattar</span>
        </NavLink>


        <div className="hidden md:flex items-center gap-8 text-base font-semibold">
          {navLinks.map(({ to, label }) => (
            <motion.div
              key={to}
              whileHover={{
                scale: 1.08,
                y: -1,
                color: "#60a5fa",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="relative group"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `bg-gradient-to-r from-[#3b82f6] to-[#818cf8] bg-clip-text text-transparent border-b-2 border-[#818cf8] pb-1 transition-all duration-150`
                    : `text-gray-200 hover:text-[#60a5fa] hover:drop-shadow-lg transition-all duration-150`
                }
                to={to}
              >
                {label}
                <span className="block h-0.5 w-0 group-hover:w-full transition-all duration-200 bg-gradient-to-r from-[#3b82f6] to-[#818cf8]"></span>
              </NavLink>
            </motion.div>
          ))}
        </div>


        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-[#818cf8] transition"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block w-7 h-0.5 bg-[#818cf8] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-[#818cf8] my-1 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-[#818cf8] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>
      
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm flex flex-col md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="ml-auto w-4/5 max-w-xs h-full bg-[#23272f] shadow-xl flex flex-col py-8 px-6 gap-6"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-8">
                <img
                  className="rounded-full h-10 w-10 object-cover border-2 border-[#818cf8] shadow"
                  src="src/assets/logo.webp"
                  alt="Logo"
                  draggable={false}
                />
                <span className="text-lg font-bold bg-gradient-to-r from-[#3b82f6] via-[#818cf8] to-[#60a5fa] bg-clip-text text-transparent">Shreya Pattar</span>
              </div>
              <div className="flex flex-col gap-4 text-lg font-semibold">
                {navLinks.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      isActive
                        ? `bg-gradient-to-r from-[#3b82f6] to-[#818cf8] bg-clip-text text-transparent border-b-2 border-[#818cf8] pb-1 transition-all duration-150`
                        : `text-gray-200 hover:text-[#60a5fa] hover:drop-shadow-lg transition-all duration-150`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
