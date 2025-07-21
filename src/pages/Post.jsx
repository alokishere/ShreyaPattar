import React, { useState, useRef, useEffect } from 'react';
import postData from '../data/PostData.jsx';
import Footer from '../components/Footer.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Matte color palette for a clean, dark (but not pure black) theme
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

const { blogSection } = postData[0];
const { posts: allPosts, categories, title, description } = blogSection;

const POSTS_PER_PAGE = 4;

const Post = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [page, setPage] = useState(1);

  
  const headerRef = useRef(null);
  const categoryRef = useRef(null);
  const inputRef = useRef(null);
  const featuredRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
   

    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
   
    
    if (categoryRef.current) {
      gsap.fromTo(
        categoryRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: categoryRef.current,
            start: "top 90%",
          }
        }
      );
    }
   
    
    if (inputRef.current) {
      gsap.fromTo(
        inputRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.3,
          scrollTrigger: {
            trigger: inputRef.current,
            start: "top 90%",
          }
        }
      );
    }
    
    if (featuredRef.current) {
      gsap.fromTo(
        featuredRef.current,
        { opacity: 0, scale: 0.95, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          delay: 0.2,
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 85%",
          }
        }
      );
    }
    
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
          }
        }
      );
    }
  }, [search, selectedCategory, page]);

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const featuredPost = filteredPosts[0];
  const gridPosts = paginatedPosts.filter(post => post.id !== featuredPost?.id);

  const categoryColors = {
    'Freelancing': 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white',
    'LinkedIn Marketing': 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white',
    'Content Creation': 'bg-gradient-to-r from-green-500 to-emerald-400 text-white',
    'Social Impact': 'bg-gradient-to-r from-purple-500 to-pink-400 text-white',
  };

  return (
    <div className={`${mattePalette.bg} min-h-screen ${mattePalette.text} transition-colors duration-500`}>
      {/* Header */}
      <div ref={headerRef} className="max-w-5xl mx-auto py-12 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#60a5fa] via-[#818cf8] to-[#f472b6] bg-clip-text text-transparent drop-shadow-lg"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`${mattePalette.subtext} text-lg`}
        >
          {description}
        </motion.p>
      </div>


      <div ref={categoryRef} className="max-w-3xl mx-auto flex flex-wrap gap-3 justify-center px-4 mb-6">
        {['All', ...categories.map(cat => cat.name)].map(name => (
          <motion.button
            key={name}
            whileHover={{
              scale: 1.08,
              boxShadow: selectedCategory === name
                ? "0 4px 24px #f59e42"
                : "0 2px 12px #818cf8"
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => { setSelectedCategory(name); setPage(1); }}
            className={`px-4 py-2 rounded-full font-medium border transition-all duration-200
              ${selectedCategory === name
                ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-white border-orange-400 shadow-lg"
                : "bg-[#23272f] text-gray-300 border-[#3b3f4a] hover:bg-[#2d313a] hover:text-[#60a5fa]"}
            `}
          >
            {name}
          </motion.button>
        ))}
      </div>


      <div ref={inputRef} className="max-w-3xl mx-auto px-4 mb-10">
        <motion.input
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          type="text"
          placeholder="Search posts by keyword or topic..."
          className={`w-full px-4 py-3 rounded-md ${mattePalette.input} border placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#818cf8] transition`}
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
        />
      </div>


      {featuredPost && (
        <div ref={featuredRef} className="max-w-5xl mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`rounded-xl overflow-hidden shadow-2xl ${mattePalette.card} border ${mattePalette.border} md:flex hover:shadow-[0_8px_32px_#818cf8] transition-shadow duration-300`}
          >
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full md:w-1/3 object-cover h-64 md:h-auto grayscale-0 hover:grayscale-0 transition duration-300"
              style={{ minHeight: "16rem", background: "#23272f" }}
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded mb-2 shadow ${categoryColors[featuredPost.category] || 'bg-gray-600 text-white'}`}>{featuredPost.category}</span>
                <h2 className="text-2xl font-bold mb-2 text-white hover:text-[#60a5fa] transition">{featuredPost.title}</h2>
                <p className={`${mattePalette.subtext} mb-3`}>{featuredPost.excerpt}</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">{new Date(featuredPost.date).toLocaleDateString()}</span>
                <a
                  href={featuredPost.source.split('(')[1]?.replace(')', '') || featuredPost.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white text-sm font-semibold px-4 py-2 rounded shadow transition"
                >
                  Read More
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Grid Posts */}
      <div ref={gridRef} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-4">
        {gridPosts.length === 0 && (
          <div className="col-span-full text-center text-gray-500">No posts found.</div>
        )}
        <AnimatePresence>
          {gridPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.045,
                boxShadow: "0 8px 32px #3b82f6",
                borderColor: "#818cf8"
              }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className={`${mattePalette.card} rounded-xl border ${mattePalette.border} overflow-hidden shadow-md transition-all duration-300 group hover:border-[#818cf8]`}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-300"
                style={{ background: "#23272f" }}
              />
              <div className="p-4">
                <span className={`text-xs font-semibold px-2 py-1 rounded shadow ${categoryColors[post.category] || 'bg-gray-600 text-white'}`}>{post.category}</span>
                <h3 className="text-lg font-bold mt-2 mb-1 text-white group-hover:text-[#60a5fa] transition">{post.title}</h3>
                <p className={`${mattePalette.subtext} text-sm mb-2`}>{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-xs">{new Date(post.date).toLocaleDateString()}</span>
                  <a
                    href={post.source.split('(')[1]?.replace(')', '') || post.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3b82f6] hover:text-[#60a5fa] hover:underline text-xs font-semibold transition"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 my-10">
        <motion.button
          whileHover={{ scale: page === 1 ? 1 : 1.08 }}
          whileTap={{ scale: 0.97 }}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`px-4 py-2 rounded font-semibold transition
            ${page === 1
              ? "bg-[#23272f] text-gray-500 border border-[#3b3f4a] opacity-40 cursor-not-allowed"
              : "bg-[#23272f] text-white border border-[#3b3f4a] hover:bg-[#2d313a] hover:text-[#60a5fa]"}
          `}
        >
          Prev
        </motion.button>
        {[...Array(totalPages)].map((_, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.12, boxShadow: page === idx + 1 ? "0 2px 12px #f59e42" : "0 2px 12px #818cf8" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setPage(idx + 1)}
            className={`px-4 py-2 rounded font-semibold transition
              ${page === idx + 1
                ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow"
                : "bg-[#23272f] text-white border border-[#3b3f4a] hover:bg-[#2d313a] hover:text-[#60a5fa]"}
            `}
          >
            {idx + 1}
          </motion.button>
        ))}
        <motion.button
          whileHover={{ scale: page === totalPages ? 1 : 1.08 }}
          whileTap={{ scale: 0.97 }}
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className={`px-4 py-2 rounded font-semibold transition
            ${page === totalPages
              ? "bg-[#23272f] text-gray-500 border border-[#3b3f4a] opacity-40 cursor-not-allowed"
              : "bg-[#23272f] text-white border border-[#3b3f4a] hover:bg-[#2d313a] hover:text-[#60a5fa]"}
          `}
        >
          Next
        </motion.button>
      </div>

      <Footer />
    </div>
  );
};

export default Post;