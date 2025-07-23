import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { ReactLenis, useLenis } from "lenis/react";
import Loader from './components/Loader';
const App = () => {
  const lenis = useLenis((lenis) => {});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? 
        <Loader />
       : 
        <div className="bg-gradient-to-br from-[#23272f] via-[#2d313a] to-[#23272f]">
          <ReactLenis root />
          <Nav />
          <Mainroutes />
        </div>
      }
    </>
   
  );
};

export default App;
