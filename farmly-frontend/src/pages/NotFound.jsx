import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#f7f7f7] text-[#2bd876] text-center px-6">
      
      {/* Animated Image */}
      <div className="w-60 h-60 mb-6">
        <img src="/404.gif" alt="Lost in the farm" className="w-full h-full object-contain" />
      </div>

      {/* Glitchy 404 Effect */}
      <div className="relative text-7xl font-extrabold tracking-wider">
        <span className="absolute inset-0 animate-glitch text-[#52df8f] opacity-75">404</span>
        <span className="absolute inset-0 animate-glitch text-[#79e7a8] opacity-50">404</span>
        <span className="absolute inset-0 animate-glitch text-[#9aedbe] opacity-75">404</span>
        <span className="relative">404</span>
      </div>

      {/* Message */}
      <h1 className="text-4xl font-bold mt-6">Oh no! You’re lost in the fields</h1>
      <p className="text-lg text-gray-600 mt-2">
        The page you’re looking for wandered off like a runaway tractor...
      </p>

      {/* Button with Hover Effect */}
      <a
        href="/"
        className="mt-6 px-6 py-3 rounded-full bg-[#2bd876] text-white font-semibold shadow-lg hover:scale-105 hover:bg-[#23a55b] transition transform duration-300"
      >
        Back to Home 🏡
      </a>
    </div>
  );
};

export default NotFound;
