
import React, { useState, useEffect, useRef } from 'react';
import aboutSection from '../data/AboutData';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { div } from 'framer-motion/client';

gsap.registerPlugin(ScrollTrigger);

// Matte color palette for dark, modern look
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
  input: "bg-[#23272f] border-[#3b3f4a] text-gray-100"
};

// Animated Hero with GSAP scrolltrigger
const Hero = ({ title, subtitle }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className={`flex flex-col md:flex-row items-center justify-between gap-8 py-20 px-6 md:px-20 ${mattePalette.bg} ${mattePalette.text} relative overflow-hidden`}
      style={{ minHeight: 420 }}
    >
      
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#818cf8]/30 to-[#3b82f6]/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tr from-[#f59e42]/30 to-[#ea580c]/10 rounded-full blur-2xl -z-10 animate-pulse" />
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          {title}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-light mb-6 text-gray-300"
        >
          {subtitle}
        </motion.h2>
      </div>
      <motion.img
        src="public/assets/shreayabout.jpg"
        alt="Shreya Pattar"
        className="w-full max-w-md rounded-2xl shadow-2xl object-cover border-4 border-[#3b82f6] hover:scale-110 hover:shadow-[0_8px_32px_0_rgba(59,130,246,0.3)] transition-transform duration-500 cursor-pointer"
        style={{ minWidth: 280, minHeight: 180 }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        whileHover={{ rotate: 2, scale: 1.12 }}
      />
    </section>
  );
};

const Bio = ({ intro, mission }) => {
  const bioRef = useRef(null);

  useEffect(() => {
    if (bioRef.current) {
      gsap.fromTo(
        bioRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bioRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <section
      ref={bioRef}
      className={`py-12 px-6 md:px-20 ${mattePalette.card} ${mattePalette.text} shadow-lg rounded-xl mx-4 md:mx-20 my-8`}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl"
        >
          {intro}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-base md:text-lg font-medium text-[#60a5fa]"
        >
          {mission}
        </motion.p>
      </div>
    </section>
  );
};

const Timeline = ({ journey }) => {
  const timelineRef = useRef(null);

  useEffect(() => {
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <section
      ref={timelineRef}
      className={`py-16 px-6 md:px-20 ${mattePalette.bg} ${mattePalette.text} rounded-xl mx-4 md:mx-20 my-8 shadow-lg`}
    >
      <h3 className="text-3xl font-bold mb-10 text-[#3b82f6] tracking-wide">Journey Timeline</h3>
      <ol className="relative border-l-4 border-[#818cf8] ml-4">
        {journey.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 ml-6 group relative"
          >
            <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#3b82f6] to-[#818cf8] rounded-full ring-4 ring-[#23272f] text-white font-bold text-lg group-hover:scale-125 group-hover:ring-[#3b82f6] transition-transform duration-300 shadow-lg">
              {idx + 1}
            </span>
            <div className="bg-[#23272f] bg-opacity-90 p-6 rounded-lg shadow-xl border border-[#3b3f4a] hover:border-[#3b82f6] hover:shadow-2xl transition-all duration-300 group cursor-pointer">
              <h4 className="text-xl font-semibold text-[#60a5fa] mb-1 group-hover:text-[#818cf8] transition-colors duration-200">{item.milestone}</h4>
              <span className="text-sm text-gray-400 font-medium">{item.year}</span>
              <p className="mt-2 text-gray-300">{item.description}</p>
              <p className="mt-2 text-red-400 text-sm font-medium">Struggle: {item.struggle}</p>
              <a
                href={item.source.match(/https?:\/\/[\w./-]+/g)?.[0] || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline text-xs hover:text-green-300 transition-colors duration-200"
              >
                Source
              </a>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
};

const Achievements = ({ achievements }) => {
  const achRef = useRef(null);

  useEffect(() => {
    if (achRef.current) {
      gsap.fromTo(
        achRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: achRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <section
      ref={achRef}
      className={`py-16 px-6 md:px-20 ${mattePalette.card} ${mattePalette.text} rounded-xl mx-4 md:mx-20 my-8 shadow-lg`}
    >
      <h3 className="text-3xl font-bold mb-10 text-[#3b82f6] tracking-wide">Key Achievements</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#23272f] via-[#2d313a] to-[#23272f] rounded-xl shadow-lg p-6 border-l-4 border-[#3b82f6] hover:scale-105 hover:shadow-2xl hover:border-[#818cf8] transition-all duration-300 cursor-pointer group"
            whileHover={{ y: -8, scale: 1.07, boxShadow: "0 8px 32px 0 rgba(59,130,246,0.25)" }}
          >
            <h4 className="text-lg font-semibold text-[#60a5fa] mb-2 group-hover:text-[#818cf8] transition-colors duration-200">{ach.title}</h4>
            <p className="text-gray-300">{ach.description}</p>
            {/* New: Animated badge */}
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
              <span className="text-xs text-[#818cf8] font-semibold">Achievement</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Struggles = ({ overview, keyLessons }) => {
  const strugglesRef = useRef(null);

  useEffect(() => {
    if (strugglesRef.current) {
      gsap.fromTo(
        strugglesRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: strugglesRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <section
      ref={strugglesRef}
      className={`py-16 px-6 md:px-20 ${mattePalette.bg} ${mattePalette.text} rounded-xl mx-4 md:mx-20 my-8 shadow-lg`}
    >
      <h3 className="text-3xl font-bold mb-10 text-[#3b82f6] tracking-wide">Struggles & Lessons</h3>
      <div className="max-w-3xl mx-auto">
        <p className="mb-4 text-gray-300">{overview}</p>
        <ul className="list-disc pl-6 space-y-2">
          {keyLessons.map((lesson, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-green-400 font-medium hover:text-green-300 transition-colors duration-200 cursor-pointer"
              whileHover={{ scale: 1.08, x: 8 }}
            >
              {lesson}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const TestimonialsCarousel = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef();
  const carouselRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [testimonials.length]);

  useEffect(() => {
    if (carouselRef.current) {
      gsap.fromTo(
        carouselRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <section
      ref={carouselRef}
      className={`h-72 py-16 px-6 md:px-20 ${mattePalette.card} ${mattePalette.text} rounded-xl mx-4 md:mx-20 my-8 shadow-lg`}
    >
      <h3 className="text-3xl font-bold mb-10 text-[#3b82f6] tracking-wide">Testimonials</h3>
      <div className="max-w-2xl mx-auto relative h-40">
        <AnimatePresence>
          {testimonials.map((t, idx) =>
            idx === current ? (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={`transition-all duration-700 absolute w-full opacity-100 z-10 bg-gradient-to-br from-[#23272f] via-[#2d313a] to-[#23272f] rounded-xl shadow-xl p-8 flex flex-col items-center border-l-4 border-[#3b82f6]`}
                style={{ minHeight: 180 }}
                onMouseEnter={() => clearInterval(intervalRef.current)}
                onMouseLeave={() => {
                  intervalRef.current = setInterval(() => {
                    setCurrent((prev) => (prev + 1) % testimonials.length);
                  }, 4000);
                }}
              >
                <p className="text-lg italic text-[#60a5fa] mb-4 animate-fadeIn">“{t.quote}”</p>
                <span className="text-sm text-green-400">{t.source}</span>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
        <div className="flex justify-center mt-8 gap-2 relative z-20">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === current ? 'bg-[#3b82f6] scale-125' : 'bg-gray-500'} transition-all duration-200 hover:scale-125`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


const FunStats = () => {
  const stats = [
    { label: "Years of Experience", value: 7 },
    { label: "Projects Completed", value: 120 },
    { label: "Awards Won", value: 8 },
    { label: "Happy Clients", value: 60 }
  ];
  const statRefs = useRef([]);

  useEffect(() => {
    statRefs.current.forEach((ref, idx) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7 + idx * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });
  }, []);

  return (
    <section className={`py-12 px-6 md:px-20 ${mattePalette.bg} ${mattePalette.text} rounded-xl mx-4 md:mx-20 my-8 shadow-lg`}>
      <h3 className="text-3xl font-bold mb-10 text-[#3b82f6] tracking-wide text-center">Fun Stats</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            ref={el => statRefs.current[idx] = el}
            className="flex flex-col items-center justify-center bg-[#23272f] bg-opacity-80 rounded-xl shadow-lg p-6 border border-[#3b3f4a] hover:border-[#3b82f6] transition-all duration-300 group cursor-pointer"
          >
            <span className="text-4xl font-extrabold text-[#3b82f6] group-hover:text-[#818cf8] transition-colors duration-200 animate-bounce">{stat.value}+</span>
            <span className="text-base text-gray-300 mt-2">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const CallToAction = ({ text, links }) => {
  const ctaRef = useRef(null);

  useEffect(() => {
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <section
      ref={ctaRef}
      className={`py-16 px-6 md:px-20 ${mattePalette.bg} text-center ${mattePalette.text} rounded-xl mx-4 md:mx-20 my-8 shadow-lg mt-20`}
    >
      <h3 className="text-3xl font-bold mb-6 text-[#3b82f6] tracking-wide ">{text}</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {links.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.12, backgroundColor: "#3b82f6", color: "#fff" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="px-6 py-3 rounded-full font-semibold shadow transition bg-gradient-to-r from-[#3b82f6] to-[#818cf8] text-white hover:bg-gradient-to-r hover:from-[#2563eb] hover:to-[#a5b4fc] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
          >
            {link.text}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  const { title, subtitle, bio, journey, achievements, struggles, testimonials, callToAction } = aboutSection;
  return (
    <div className='overflow-hidden h-auto bg-gradient-to-br from-[#23272f] via-[#2d313a] to-[#23272f]'>


    <main className={`${mattePalette.bg} min-h-screen ${mattePalette.text} font-sans`}>
      <Hero title={title} subtitle={subtitle} />
      <Bio {...bio} />
      <FunStats />
      <Timeline journey={journey} />
      <Achievements achievements={achievements} />
      <Struggles {...struggles} />
      <TestimonialsCarousel testimonials={testimonials} />
      <CallToAction {...callToAction} />
      
      <div className="fixed top-10 left-10 w-24 h-24 bg-gradient-to-br from-[#818cf8]/40 to-[#3b82f6]/10 rounded-full blur-2xl animate-pulse -z-10 pointer-events-none" />
      <div className="fixed bottom-10 right-10 w-32 h-32 bg-gradient-to-tr from-[#f59e42]/40 to-[#ea580c]/10 rounded-full blur-2xl animate-pulse -z-10 pointer-events-none" />
    </main>
    </div>
  );
};

export default About;
