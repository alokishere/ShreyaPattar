import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {

    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: 0.3
    });

    
    
    const elements = containerRef.current.querySelectorAll('.bg-element');
    gsap.from(elements, {
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      stagger: 0.1,
      ease: "elastic.out(1, 0.5)"
    });
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4 relative overflow-hidden"
    >
     
     
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-element absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-gray-800 opacity-20"></div>
        <div className="bg-element absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-gray-800 opacity-20"></div>
        <div className="bg-element absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-gray-800 opacity-20"></div>
        <div className="bg-element absolute bottom-1/3 left-1/3 w-12 h-12 rounded-full bg-gray-800 opacity-20"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 10, stiffness: 100 }}
        >
          <h1 
            ref={textRef}
            className="text-8xl md:text-9xl font-bold text-gray-200 mb-4"
            style={{ textShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}
          >
            404
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-gray-400 mb-8 text-lg"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg font-medium transition-colors duration-300 border border-gray-700 shadow-lg"
        >
          Return Home
        </motion.button>
      </div>

      <motion.div 
        className="absolute bottom-8 text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        © {new Date().getFullYear()} Your Company
      </motion.div>
    </div>
  );
};

export default PageNotFound;