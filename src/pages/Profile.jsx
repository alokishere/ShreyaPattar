import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const mattePalette = {
  bg: "bg-gradient-to-br from-[#23272f] via-[#2d313a] to-[#23272f]",
  card: "bg-[#23272f] bg-opacity-95",
  accent: "bg-gradient-to-r from-[#3b82f6] to-[#818cf8]",
  accentHover: "bg-gradient-to-r from-[#2563eb] to-[#a5b4fc]",
  accentText: "text-[#3b82f6]",
  accentTextHover: "text-[#60a5fa]",
  border: "border-[#3b3f4a]",
  text: "text-gray-100",
  subtext: "text-gray-400",
  orange: "bg-gradient-to-r from-[#f59e42] to-[#ea580c]",
};

const dummyData = {
  role: "Content Creator & Freelance Coach",
  location: "Dubai, UAE",
  bio: "Helping freelancers and entrepreneurs build their online presence. Founder of SPVentures. 146,000+ LinkedIn followers.",
  followers: 146000,
  posts: 128,
  projects: 12,
  joined: "Jan 2021",
};

const Profile = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 80, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!userData) {
    navigate("/login");
    return null;
  }

  const { name, email } = userData;
  const user = {
    name: name || "Shreya Pattar",
    email: email,
    image: `https://placehold.co/240x240?text=${(name || "Shreya+Pattar").replace(
      " ",
      "+"
    )}`,
    ...dummyData,
  };

  return (
    <main
      className={`min-h-screen w-full flex items-center justify-center relative ${mattePalette.bg} py-0 px-0`}
    >

      <div className="absolute left-0 top-0 w-72 h-72 bg-gradient-to-br from-[#818cf8]/30 to-[#3b82f6]/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute right-0 bottom-0 w-56 h-56 bg-gradient-to-tr from-[#f59e42]/30 to-[#ea580c]/10 rounded-full blur-2xl -z-10 animate-pulse" />

      <motion.section
        ref={cardRef}
        initial={false}
        whileHover={{
          scale: 1.025,
          boxShadow: "0 12px 48px 0 rgba(60,64,67,0.22)",
          transition: { type: "spring", stiffness: 220, damping: 18 },
        }}
        className={`relative flex flex-col md:flex-row items-center gap-0 md:gap-12 max-w-3xl w-full mx-auto rounded-3xl shadow-2xl border ${mattePalette.border} ${mattePalette.card} px-8 py-12 md:py-16 transition-all duration-200 group`}
        style={{
          boxShadow: "0 4px 32px 0 rgba(60,64,67,0.18)",
        }}
      >
     
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="relative mb-6 md:mb-0"
        >
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#3b82f6]/40 via-[#818cf8]/30 to-[#f59e42]/20 blur-lg opacity-80 pointer-events-none animate-pulse" />
          <motion.img
            src={user.image}
            alt={user.name}
            className="w-40 h-40 rounded-full object-cover border-4 border-[#3b82f6] shadow-lg z-10 relative group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.35, type: "spring" }}
            draggable={false}
          />
        </motion.div>


        <div className="flex-1 flex flex-col items-center md:items-start">
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold mb-1 bg-gradient-to-r from-[#3b82f6] via-[#818cf8] to-[#60a5fa] bg-clip-text text-transparent tracking-wide drop-shadow-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {user.name}
          </motion.h1>
          <motion.p
            className={`text-lg font-semibold mb-2 ${mattePalette.accentText}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {user.role}
          </motion.p>
          <motion.p
            className="text-gray-300 mb-1 text-sm"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <span className="font-medium text-gray-400">Email:</span> {user.email}
          </motion.p>
          <motion.p
            className="text-gray-400 mb-2 text-sm"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="font-medium text-gray-400">Location:</span> {user.location}
          </motion.p>
          <motion.p
            className="text-gray-200 mb-4 text-center md:text-left"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {user.bio}
          </motion.p>

          {/* Stats Row */}
          <motion.div
            className="flex gap-6 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-[#3b82f6]">{user.followers.toLocaleString()}</span>
              <span className="text-xs text-gray-400">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-[#f59e42]">{user.posts}</span>
              <span className="text-xs text-gray-400">Posts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-[#818cf8]">{user.projects}</span>
              <span className="text-xs text-gray-400">Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-[#60a5fa]">{user.joined}</span>
              <span className="text-xs text-gray-400">Joined</span>
            </div>
          </motion.div>


          <motion.button
            onClick={handleLogout}
            className={`w-full md:w-48 py-3 rounded-full font-semibold shadow transition text-white text-lg ${mattePalette.orange} hover:from-[#ea580c] hover:to-[#f59e42] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f59e42]/60`}
            whileHover={{ scale: 1.06, boxShadow: "0 4px 24px 0 #f59e42aa" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Logout
          </motion.button>
        </div>
      </motion.section>
    </main>
  );
};

export default Profile;
