import React, { useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const featuredProducts = [
  {
    title: "The Ultimate Writing Guide eBook",
    description: "Master the art of compelling storytelling and effective communication.",
    price: "$29.99",
    image: "src/assets/ultimateGuide.png",
    alt: "Product 1"
  },
  {
    title: "Notion Template: Content Planner",
    description: "Organize your content ideas, schedule, and track your progress effortlessly.",
    price: "$19.99",
    image: "src/assets/notion planner.png",
    alt: "Product 2"
  },
  {
    title: "Online Course: Freelance Writing Jumpstart",
    description: "Launch your freelance writing career with practical strategies and tips.",
    price: "$99.00",
    image: "src/assets/freelance guide.png",
    alt: "Product 3"
  }
];

const blogPosts = [
  {
    image: "src/assets/5tips.png",
    alt: "Blog 1",
    title: "5 Tips for Overcoming Writer's Block",
    desc: "Struggling to find your words? Here are five proven strategies to get your creativity flowing again.",
    link: "#"
  },
  {
    image: "src/assets/5tips.webp",
    alt: "Blog 2",
    title: "How to Build a Strong Online Writing Portfolio",
    desc: "Learn the essential steps to create a portfolio that attracts clients and showcases your best work.",
    link: "#"
  },
  {
    image: "src/assets/dailyplan.jpg",
    alt: "Blog 3",
    title: "The Power of Daily Journaling for Creativity",
    desc: "Discover how a simple daily journaling habit can unlock new ideas and improve your writing skills.",
    link: "#"
  }
];

const testimonials = [
  {
    quote: `"Shreya's eBook transformed my writing. Her advice is practical and truly inspiring!"`,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya S."
  },
  {
    quote: `"The Notion template is a game-changer for my content planning. Highly recommend!"`,
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Rahul K."
  },
  {
    quote: `"Her course gave me the confidence to start my freelance journey. Best investment ever!"`,
    img: "https://randomuser.me/api/portraits/women/46.jpg",
    name: "Anjali D."
  }
];

const mattePalette = {
  bg: "bg-gradient-to-br from-[#23272f] via-[#2d313a] to-[#23272f]",
  card: "bg-[#23272f] bg-opacity-90",
  accent: "bg-[#3b82f6]",
  accentHover: "bg-[#2563eb]",
  accentText: "text-[#3b82f6]",
  accentTextHover: "text-[#60a5fa]",
  border: "border-[#3b3f4a]",
  text: "text-gray-100",
  subtext: "text-gray-400",
  input: "bg-[#23272f] border-[#3b3f4a] text-gray-100"
};

const Home = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const productsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const blogRef = useRef(null);

  useEffect(() => {
    
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      }
    );
    
    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        }
      }
    );
    gsap.fromTo(
      productsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: productsRef.current,
          start: "top 80%",
        }
      }
    );



    gsap.fromTo(
      testimonialsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 80%",
        }
      }
    );
  

    gsap.fromTo(
      blogRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: blogRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <div className={`${mattePalette.bg} min-h-screen`}>
  
      <section
        ref={heroRef}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center pt-20 gap-16 py-12 px-4"
      >
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
            <span className="bg-gradient-to-r from-[#60a5fa] via-[#818cf8] to-[#f472b6] bg-clip-text text-transparent">
              Turn Your Thoughts into Impactful Content
            </span>
          </h1>
          <p className={`${mattePalette.subtext} text-xl mb-6`}>
            I’m Shreya Pattar, a writer and creator from India. I guide aspiring creators to discover their voice, write fearlessly, and build an online identity — with tools like eBooks, Notion templates, and writing courses.
          </p>
          <div className="flex gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.07, boxShadow: "0 4px 24px #3b82f6" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/products")}
              className="px-7 py-3 rounded-2xl font-semibold transition text-white bg-gradient-to-r from-[#3b82f6] to-[#818cf8] shadow-lg hover:from-[#2563eb] hover:to-[#a5b4fc] focus:outline-none"
            >
              Explore Products
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.07, boxShadow: "0 4px 24px #818cf8" }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-2xl font-semibold transition text-[#818cf8] bg-[#23272f] border border-[#818cf8] shadow hover:bg-[#2d313a] hover:text-[#f472b6] focus:outline-none"
              onClick={() => (window.location.href = "https://pattarshreya.ck.page/")}
            >
              Join Newsletter
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <motion.img
            src="src/assets/shreyapic.jpg"
            alt="Shreya Pattar"
            className="rounded-2xl w-80 h-80 object-cover shadow-2xl border-4 border-[#3b3f4a] hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05, rotate: 2 }}
          />
        </motion.div>
      </section>


      <section
        ref={statsRef}
        className="max-w-6xl mx-auto bg-[#23272f] bg-opacity-95 rounded-2xl shadow-2xl flex flex-col md:flex-row justify-between items-center py-14 px-6 mb-12 border border-[#3b3f4a]"
      >
        {[
          { value: "5+", label: "Years Writing Experience" },
          { value: "156K+", label: "Followers" },
          { value: "50+", label: "Products Sold" }
        ].map((stat, idx) => (
          <motion.div
            key={stat.label}
            className="text-center flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
          >
            <div className="text-5xl font-extrabold text-[#60a5fa] drop-shadow">{stat.value}</div>
            <div className="text-gray-300 text-xl">{stat.label}</div>
          </motion.div>
        ))}
      </section>

  

      <section
        ref={productsRef}
        className="max-w-7xl min-h-10xl mx-auto px-4 mb-16"
      >
        <motion.h2
          className="text-5xl font-semibold mb-8 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Featured Products
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product, idx) => (
            <motion.div
              key={idx}
              className={`${mattePalette.card} rounded-2xl shadow-xl p-6 flex justify-center items-center flex-col border border-[#3b3f4a] hover:shadow-2xl transition-shadow duration-300 group`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px #3b82f6",
                backgroundColor: "#2d313a"
              }}
              onClick={() => (window.location.href = "https://pattarshreya.ck.page/")}
            >
              <motion.img
                src={product.image}
                alt={product.alt}
                className="rounded-lg mb-4 h-40 object-cover w-[80%] border-2 border-[#3b3f4a] group-hover:border-[#60a5fa] transition"
                whileHover={{ scale: 1.07, rotate: 2 }}
              />
              <div className="font-semibold mb-1 text-white text-lg group-hover:text-[#60a5fa] transition">{product.title}</div>
              <div className="text-gray-400 text-sm mb-2 text-center">{product.description}</div>
              <div className="font-bold text-[#60a5fa] mt-auto text-lg">{product.price}</div>
              
            </motion.div>
          ))}
        </div>
      </section>

    

      <section className="bg-gradient-to-r from-[#23272f] via-[#2d313a] to-[#23272f] py-12 mb-16 border-y border-[#3b3f4a]">
        <div className="max-w-2xl mx-auto text-center px-4">
          <motion.h2
            className="text-2xl font-bold mb-2 text-[#60a5fa]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Get Weekly Writing Tips
          </motion.h2>
          <p className="text-gray-400 mb-6">
            Join my newsletter for exclusive insights, writing prompts, and updates on new products.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4 justify-center"
            onSubmit={e => {
              e.preventDefault();
              window.open("https://pattarshreya.ck.page/", "_blank");
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded border border-[#3b3f4a] bg-[#23272f] text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#60a5fa] placeholder-gray-400"
              required
            />
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-[#3b82f6] to-[#818cf8] text-white px-6 py-2 rounded font-semibold hover:from-[#2563eb] hover:to-[#a5b4fc] transition focus:outline-none"
              whileHover={{ scale: 1.07, boxShadow: "0 4px 24px #818cf8" }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </section>

   

      <section
        ref={testimonialsRef}
        className="max-w-7xl mx-auto px-4 mb-16"
      >
        <motion.h2
          className="text-2xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          What My Students Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              className={`${mattePalette.card} rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border border-[#3b3f4a] hover:shadow-2xl transition-shadow duration-300 group`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px #818cf8",
                backgroundColor: "#2d313a"
              }}
            >
              <div className="italic mb-4 text-gray-300 group-hover:text-[#f472b6] transition">{t.quote}</div>
              <div className="flex items-center gap-2 mt-auto">
                <motion.img
                  src={t.img}
                  alt={t.name}
                  className="h-10 w-10 rounded-full border-2 border-[#3b3f4a] group-hover:border-[#f472b6] transition"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                />
                <span className="font-semibold text-white group-hover:text-[#f472b6] transition">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

     

      <section
        ref={blogRef}
        className="max-w-7xl mx-auto px-4 mb-16"
      >
        <motion.h2
          className="text-2xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Latest from the Blog
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.title}
              className={`${mattePalette.card} rounded-2xl shadow-xl p-5 flex flex-col border border-[#3b3f4a] hover:shadow-2xl transition-shadow duration-300 group`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px #f472b6",
                backgroundColor: "#2d313a"
              }}
            >
              <motion.img
                src={post.image}
                alt={post.alt}
                className="rounded mb-4 h-32 object-cover border-2 border-[#3b3f4a] group-hover:border-[#f472b6] transition"
                whileHover={{ scale: 1.07, rotate: 2 }}
              />
              <div className="font-semibold mb-1 text-white group-hover:text-[#f472b6] transition">{post.title}</div>
              <div className="text-gray-400 text-sm mb-2">{post.desc}</div>
              <motion.a
                href={post.link}
                className="text-[#60a5fa] font-semibold mt-auto hover:underline hover:text-[#f472b6] transition"
                whileHover={{ scale: 1.05 }}
              >
                Read More
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Home;