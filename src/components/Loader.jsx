// Loader.jsx
import React from "react";
import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <Loader2 className="animate-spin w-12 h-12 text-purple-500 mb-4" />
      <p className="text-xl font-medium tracking-wide">
        Your web experience is loading...
      </p>
    </div>
  );
};

export default Loader;
