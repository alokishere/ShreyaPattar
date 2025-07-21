import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  input: "bg-[#23272f] border-[#3b3f4a] text-gray-100"
};

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" }
    );
    
    
    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
        }
      }
    );
    gsap.fromTo(
      rightRef.current,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');
    const name = e.target.name?.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!isLogin) {
      const confirmPassword = e.target.confirmPassword.value;
      if (password !== confirmPassword) {
        setFormError("Passwords do not match.");
        return;
      }
    }
    const userData = { name: name || 'User', email, password };
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/profile');
  };

  
  
  const buttonVariants = {
    rest: { scale: 1, boxShadow: "0 0px 0px #3b82f6" },
    hover: { scale: 1.05, boxShadow: "0 4px 24px #3b82f6" }
  };

  const socialButtonVariants = {
    rest: { scale: 1, backgroundColor: "rgba(45,49,58,0.8)" },
    hover: { scale: 1.04, backgroundColor: "rgba(60,130,246,0.12)" }
  };

  return (
    <div
      ref={containerRef}
      className={`${mattePalette.bg} min-h-screen flex items-center justify-center transition-colors duration-500`}
    >
      <div className={`rounded-2xl shadow-2xl flex max-w-4xl w-full overflow-hidden ${mattePalette.card} border ${mattePalette.border}`}>
       
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-1/2 hidden md:flex flex-col justify-center items-center text-center px-10 py-14 bg-gradient-to-br from-[#23272f] via-[#2d313a] to-[#23272f] relative"
        >
          <motion.div
            className="absolute top-6 left-6 text-7xl text-[#3b82f6] opacity-20 select-none pointer-events-none"
            initial={{ scale: 0.7, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
          >
            ”
          </motion.div>
          <motion.p
            className="text-2xl font-semibold text-gray-100 mb-6 z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            "Shreya's resources transformed my freelancing career. Her insights are gold!"
          </motion.p>
          <motion.p
            className="text-[#60a5fa] font-medium z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            - Priya Sharma, Freelance Writer
          </motion.p>
          <motion.div
            className="absolute bottom-6 right-6 text-5xl text-[#818cf8] opacity-10 select-none pointer-events-none"
            initial={{ scale: 0.7, rotate: 10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.7, type: "spring" }}
          >
            “
          </motion.div>
        </motion.div>

        
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full md:w-1/2 px-8 py-14 flex flex-col justify-center"
        >
          <div className="flex justify-center mb-8 gap-2">
            <motion.button
              onClick={() => setIsLogin(true)}
              className={`px-6 py-2 font-semibold rounded-t-lg transition-colors duration-200 ${
                isLogin
                  ? "bg-gradient-to-r from-[#3b82f6] to-[#818cf8] text-white shadow"
                  : "bg-transparent text-gray-400 hover:text-[#60a5fa]"
              }`}
              whileHover={{ scale: 1.07 }}
            >
              Login
            </motion.button>
            <motion.button
              onClick={() => setIsLogin(false)}
              className={`px-6 py-2 font-semibold rounded-t-lg transition-colors duration-200 ${
                !isLogin
                  ? "bg-gradient-to-r from-[#3b82f6] to-[#818cf8] text-white shadow"
                  : "bg-transparent text-gray-400 hover:text-[#60a5fa]"
              }`}
              whileHover={{ scale: 1.07 }}
            >
              Create Account
            </motion.button>
          </div>

          <AnimatePresence>
            {formError && (
              <motion.div
                className="mb-4 text-center text-red-400 font-semibold"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {formError}
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} autoComplete="off">
            <AnimatePresence>
              {!isLogin && (
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <label className="block text-gray-300 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className={`w-full px-4 py-2 rounded-lg border ${mattePalette.input} focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition`}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className={`w-full px-4 py-2 rounded-lg border ${mattePalette.input} focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition`}
                type="email"
                id="email"
                name="email"
                placeholder="your@example.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="password">
                Password
              </label>
              <input
                className={`w-full px-4 py-2 rounded-lg border ${mattePalette.input} focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition`}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
              <AnimatePresence>
                {!isLogin && (
                  <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <label className="block text-gray-300 mb-2" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      className={`w-full px-4 py-2 rounded-lg border ${mattePalette.input} focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition`}
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      required
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <a
                href="#"
                className="text-sm text-[#60a5fa] hover:underline float-right mt-2 transition"
              >
                Forgot Password?
              </a>
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-lg shadow transition bg-gradient-to-r from-[#3b82f6] to-[#818cf8] text-white hover:from-[#2563eb] hover:to-[#a5b4fc] focus:outline-none"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
            >
              {isLogin ? 'Continue' : 'Sign Up'}
            </motion.button>
          </form>

          <div className="text-center my-6">
            <span className="text-gray-500">OR</span>
          </div>

          <div className="space-y-4">
            <motion.button
              className={`w-full flex items-center justify-center py-2 border ${mattePalette.border} rounded-lg transition font-medium text-gray-100`}
              variants={socialButtonVariants}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" className="mr-3" />
              Continue with Google
            </motion.button>
            <motion.button
              className={`w-full flex items-center justify-center py-2 border ${mattePalette.border} rounded-lg transition font-medium text-gray-100`}
              variants={socialButtonVariants}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <img src="https://img.icons8.com/color/24/000000/twitter.png" alt="Twitter" className="mr-3" />
              Continue with Twitter
            </motion.button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-8">
            By signing up, you agree to our{' '}
            <a href="#" className="text-[#60a5fa] hover:underline">Terms of Service</a> &{' '}
            <a href="#" className="text-[#60a5fa] hover:underline">Privacy Policy</a>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;