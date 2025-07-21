import React, { useEffect, useRef } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/ProductsData";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";


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

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const gridRef = useRef(null);

  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // GSAP header animation
  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        {
          y: -80,
          scale: 0.92,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
        }
      );
    }
  }, []);

  
  useEffect(() => {
    if (!cardsRef.current) return;
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: i * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <main
        className={`${mattePalette.bg} min-h-screen py-16 px-4 ${mattePalette.text} font-['Poppins'] transition-colors duration-500`}
        style={{
          fontFamily:
            "'Poppins', 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <section className="max-w-6xl mx-auto">
          <header className="mb-14 text-center">
            <h1
              ref={headerRef}
              className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight drop-shadow-lg"
              style={{
                fontFamily:
                  "'Poppins', 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              <span
                className={`inline-block bg-gradient-to-r from-[#3b82f6] via-[#818cf8] to-[#f472b6] bg-clip-text text-transparent animate-gradient-x`}
              >
                My Digital Products
              </span>
            </h1>
            <p className={`${mattePalette.subtext} max-w-xl mx-auto text-base md:text-lg font-medium`}>
              Explore my collection of eBooks, templates, and digital courses designed to help you grow.
            </p>
          </header>

          <div
            ref={gridRef}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {products.map((product, idx) => (
              <motion.div
                key={product.title + idx}
                ref={el => (cardsRef.current[idx] = el)}
                whileHover={{
                  scale: 1.055,
                  boxShadow:
                    "0 0 0 4px #3b82f655, 0 8px 32px 0 #818cf855",
                  y: -8,
                  transition: { type: "spring", stiffness: 320, damping: 18 },
                }}
                whileTap={{ scale: 0.98 }}
                className={`
                  rounded-2xl 
                  ${mattePalette.card} 
                  ${mattePalette.border} border 
                  shadow-xl 
                  hover:shadow-[#3b82f6]/30 
                  transition-all duration-300
                  relative overflow-hidden group
                  before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none
                  before:opacity-0 group-hover:before:opacity-100
                  before:bg-gradient-to-br before:from-[#3b82f6]/20 before:to-[#818cf8]/10
                  after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none
                  after:opacity-0 group-hover:after:opacity-100
                  after:bg-gradient-to-tr after:from-[#f472b6]/10 after:to-transparent
                `}
                style={{
                  fontFamily:
                    "'Poppins', 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
                  transition: "box-shadow 0.3s, transform 0.3s",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3b82f6] via-[#818cf8] to-[#f472b6] opacity-0 group-hover:opacity-80 transition-all duration-300 blur-sm pointer-events-none" />
                <ProductCard product={product} />
                
                
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-[#3b82f6] group-hover:shadow-[0_0_24px_#3b82f6aa] transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <style>
        {`
        /* Animate gradient text */
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
        `}
      </style>
    </>
  );
};

export default Products;
