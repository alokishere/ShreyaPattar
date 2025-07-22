import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mattePalette = {
  card: "bg-[#23272f] bg-opacity-90",
  accent: "bg-gradient-to-r from-[#3b82f6] to-[#818cf8]",
  accentHover: "bg-gradient-to-r from-[#2563eb] to-[#a5b4fc]",
  accentText: "text-[#3b82f6]",
  accentTextHover: "text-[#60a5fa]",
  border: "border-[#3b3f4a]",
  text: "text-gray-100",
  subtext: "text-gray-400",
};

const ProductCard = ({ product }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <motion.article
      ref={cardRef}
      initial={false}
      whileHover={{
        scale: 1.035,
        boxShadow: "0 8px 32px 0 rgba(60,64,67,0.18)",
        y: -4,
        transition: { type: "spring", stiffness: 220, damping: 18 },
      }}
      className={`relative overflow-hidden flex flex-col h-full rounded-2xl shadow-xl border ${mattePalette.border} ${mattePalette.card} transition-all duration-200 group`}
      style={{
        boxShadow: "0 2px 24px 0 rgba(60,64,67,0.12)",
      }}
    >
      <div 
      
      className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#818cf8]/30 to-[#3b82f6]/10 rounded-full blur-2xl -z-10 animate-pulse pointer-events-none" />
      <motion.img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
        loading="lazy"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.07 }}
        transition={{ duration: 0.35, type: "spring" }}
        draggable={false}
      />
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-extrabold text-lg mb-1 bg-gradient-to-r from-[#3b82f6] via-[#818cf8] to-[#60a5fa] bg-clip-text text-transparent drop-shadow-lg">
          {product.title}
        </h3>
        <p
          className={`uppercase tracking-wide text-xs font-semibold mb-2 ${mattePalette.accentText}`}
        >
          {product.type}
        </p>
        <p className={`${mattePalette.subtext} text-sm flex-1 mb-3`}>
          {product.description}
        </p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-400 mr-1 flex">
            {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
              <motion.svg
                key={i}
                className="w-4 h-4 inline"
                fill="currentColor"
                viewBox="0 0 20 20"
                whileHover={{ scale: 1.2, rotate: 12 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
              </motion.svg>
            ))}
          </span>
          <span className="text-gray-400 text-xs ml-1">
            {product.rating}{" "}
            <span className="opacity-60">({product.reviews})</span>
          </span>
        </div>
        <div className="font-bold text-lg mb-3 bg-gradient-to-r from-[#3b82f6] to-[#818cf8] bg-clip-text text-transparent drop-shadow">
          {product.price}
        </div>
        <motion.a
          href={product.source}
          className={`mt-auto inline-block px-4 py-2 rounded-md font-semibold text-sm text-white shadow-md transition-all duration-200 ${mattePalette.accent} hover:${mattePalette.accentHover} focus:outline-none focus:ring-2 focus:ring-[#818cf8]`}
          whileHover={{
            scale: 1.06,
            background: "linear-gradient(to right, #2563eb, #a5b4fc)",
            boxShadow: "0 4px 24px 0 #818cf8aa",
          }}
        >
          Learn More →
        </motion.a>
      </div>
    </motion.article>
  );
};

export default ProductCard;
