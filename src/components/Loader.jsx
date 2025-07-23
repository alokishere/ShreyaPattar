// Loader.jsx
import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { Loader as LucideLoader, LoaderCircle, LoaderPinwheel } from 'lucide-react';

const ultraBlobPaths = [
  // 3 morphing shapes for the blob
  "M120,-139.5C155.5,-120.5,186.1,-90.1,192.8,-55.7C199.4,-21.3,182.2,17.1,165.3,58.1C148.4,99.2,131.8,142.9,102.1,165.5C72.4,188.1,29.6,189.5,-9.8,182.5C-49.1,175.5,-98.1,160.1,-127.1,130.3C-156.2,100.6,-165.3,56.4,-165.8,14.3C-166.3,-27.9,-158.1,-68,-133.4,-97.7C-108.7,-127.5,-67.6,-147,-28.4,-160.7C10.8,-174.3,54.1,-182.4,120,-139.5Z",
  "M140,-120C170,-90,180,-40,170,10C160,60,130,110,90,140C50,170,0,180,-50,170C-100,160,-150,130,-170,80C-190,30,-180,-30,-150,-80C-120,-130,-70,-170,-20,-180C30,-190,90,-170,140,-120Z",
  "M110,-150C140,-120,170,-80,180,-30C190,20,180,80,140,120C100,160,30,180,-30,170C-90,160,-150,120,-170,60C-190,0,-170,-70,-130,-120C-90,-170,-30,-200,30,-190C90,-180,120,-150,110,-150Z"
];

const Loader = () => {
  const blobRef = useRef(null);
  const ringRef = useRef(null);
  const textRef = useRef([]);
  const sparkRefs = useRef([]);
  const pinwheelRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // Ultra morphing blob animation (morphs between 3 shapes)
    let blobTl = gsap.timeline({ repeat: -1, yoyo: true });
    ultraBlobPaths.forEach((d, i) => {
      blobTl.to(blobRef.current, {
        duration: 1.8,
        attr: { d },
        ease: "power1.inOut"
      }, i * 1.8);
    });

    // Blob scale and float
    gsap.to(blobRef.current, {
      scale: 1.18,
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 2.2,
      ease: 'sine.inOut',
    });

    // Rotating ring with pulse and color shift
    gsap.to(ringRef.current, {
      rotation: 360,
      transformOrigin: '50% 50%',
      repeat: -1,
      duration: 6,
      ease: 'linear',
    });
    gsap.to(ringRef.current, {
      boxShadow: "0 0 60px #64ffda, 0 0 120px #7f5af0",
      borderColor: "#7f5af0",
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "power1.inOut"
    });

    // Sparkle burst animation
    sparkRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(el, {
          scale: 0,
          opacity: 0.7,
        }, {
          scale: 1.5,
          opacity: 0,
          repeat: -1,
          delay: i * 0.2,
          duration: 1.2,
          ease: "power2.out"
        });
      }
    });

    // Lucide Pinwheel and Circle icons spinning
    gsap.to(pinwheelRef.current, {
      rotation: 360,
      transformOrigin: "50% 50%",
      repeat: -1,
      duration: 2.5,
      ease: "linear"
    });
    gsap.to(circleRef.current, {
      rotation: -360,
      transformOrigin: "50% 50%",
      repeat: -1,
      duration: 3.5,
      ease: "linear"
    });

    // Staggered text animation with bounce and color
    gsap.fromTo(textRef.current, {
      opacity: 0,
      y: 60,
      scale: 0.7,
      color: "#7f5af0"
    }, {
      opacity: 1,
      y: 0,
      scale: 1.1,
      color: "#64ffda",
      stagger: {
        each: 0.13,
        yoyo: true,
        repeat: 1,
        repeatDelay: 0.2
      },
      delay: 1.2,
      duration: 0.7,
      ease: 'back.out(2.2)',
    });

    // Text glow pulse
    textRef.current.forEach((el, i) => {
      gsap.to(el, {
        textShadow: "0 0 24px #7f5af0, 0 0 48px #64ffda",
        repeat: -1,
        yoyo: true,
        duration: 1.2 + i * 0.1,
        ease: "sine.inOut"
      });
    });

    // Loader icon pulse
    gsap.to(".lucide-loader", {
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      duration: 1.1,
      ease: "power1.inOut"
    });

    // Background gradient shift
    gsap.to(".ultra-bg", {
      background: "radial-gradient(circle at 60% 40%, #7f5af0 0%, #23272f 100%)",
      repeat: -1,
      yoyo: true,
      duration: 3.5,
      ease: "sine.inOut"
    });

    return () => {
      blobTl.kill();
      gsap.globalTimeline.clear();
    };
  }, []);

  const letters = 'LOADING'.split('');
  const sparks = Array.from({ length: 10 });

  return (
    <div className="min-h-screen ultra-bg bg-gradient-to-br from-[#23272f] via-[#121212] to-[#23272f] flex items-center justify-center relative overflow-hidden">
      {/* Morphing blob */}
      <div className="absolute w-[32rem] h-[32rem] pointer-events-none select-none">
        <svg viewBox="0 0 600 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(300,300)">
            <motion.path
              ref={blobRef}
              fill="url(#ultraGradient)"
              d={ultraBlobPaths[0]}
              style={{ filter: "blur(2px)" }}
            />
            <defs>
              <radialGradient id="ultraGradient" cx="50%" cy="50%" r="80%">
                <stop offset="0%" stopColor="#7f5af0" />
                <stop offset="60%" stopColor="#64ffda" />
                <stop offset="100%" stopColor="#23272f" />
              </radialGradient>
            </defs>
          </g>
        </svg>
      </div>

      {/* Rotating ring */}
      <div
        className="absolute w-96 h-96 border-[6px] border-[#64ffda] rounded-full opacity-40 shadow-2xl"
        ref={ringRef}
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      />

      {/* Sparkle burst */}
      {sparks.map((_, i) => (
        <div
          key={i}
          ref={el => (sparkRefs.current[i] = el)}
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) rotate(${i * 36}deg)`,
            pointerEvents: "none"
          }}
        >
          <div
            className="w-2 h-8 rounded-full"
            style={{
              background: "linear-gradient(180deg, #64ffda 0%, #7f5af0 100%)",
              opacity: 0.7,
              filter: "blur(1px)"
            }}
          />
        </div>
      ))}

      {/* Lucide Loader icons ultra animated */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-20"
        style={{ transform: "translate(-50%, -50%)" }}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: [0.7, 1.1, 1], opacity: 1, rotate: [0, 360] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <LucideLoader className="lucide-loader" size={72} color="#7f5af0" strokeWidth={3} />
      </motion.div>
      <motion.div
        className="absolute left-[60%] top-[40%] z-20"
        style={{ filter: "blur(0.5px)" }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1.2, 1], opacity: 0.7, rotate: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        ref={pinwheelRef}
      >
        <LoaderPinwheel size={48} color="#64ffda" strokeWidth={2.5} />
      </motion.div>
      <motion.div
        className="absolute left-[40%] top-[60%] z-20"
        style={{ filter: "blur(0.5px)" }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1.2, 1], opacity: 0.7, rotate: [0, -360] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        ref={circleRef}
      >
        <LoaderCircle size={48} color="#7f5af0" strokeWidth={2.5} />
      </motion.div>

      {/* Ultra animated text */}
      <div className="z-30 flex space-x-2 relative">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            ref={el => (textRef.current[i] = el)}
            className="text-[#ffffffcc] text-5xl md:text-7xl font-extrabold tracking-widest font-[Poppins] drop-shadow-[0_2px_24px_#7f5af0] select-none"
            initial={{ y: 80, scale: 0.7, opacity: 0, rotate: -30 }}
            animate={{
              y: [80, 0],
              scale: [0.7, 1],
              opacity: [0, 1],
              rotate: [-30, 0],
              color: ["#7f5af0", "#ffffffcc"]
            }}
            transition={{
              delay: 1.2 + i * 0.13,
              duration: 1.1,
              type: "spring",
              stiffness: 200,
              damping: 12,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1.2 + i * 0.13
            }}
            whileHover={{
              scale: 1.25,
              color: "#f472b6",
              textShadow: "0 0 32px #f472b6, 0 0 64px #7f5af0"
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Floating particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${8 + Math.random() * 16}px`,
            height: `${8 + Math.random() * 16}px`,
            background: `radial-gradient(circle, #64ffda 0%, #7f5af0 100%)`,
            opacity: 0.18 + Math.random() * 0.18,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            filter: "blur(2px)"
          }}
          initial={{
            y: 0,
            scale: 0.7 + Math.random() * 0.6,
            opacity: 0.1 + Math.random() * 0.2
          }}
          animate={{
            y: [0, -40 - Math.random() * 60, 0],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 2.5 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Ultra bottom glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 w-[40vw] h-32 rounded-full pointer-events-none"
        style={{
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse at center, #7f5af0 0%, #23272f 80%)",
          opacity: 0.5,
          filter: "blur(24px)"
        }}
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
};

export default Loader;
