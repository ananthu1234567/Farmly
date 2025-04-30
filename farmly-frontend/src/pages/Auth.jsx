import React, { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6fdfa] px-4">
      <div className="relative w-full max-w-4xl h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Sliding Panel */}
        <div
          className={`absolute top-0 h-full w-1/2 bg-[#c1f4d7] text-center flex flex-col items-center justify-center transition-transform duration-700 ease-in-out z-20 ${
            isLogin ? "left-0" : "left-1/2"
          }`}
        >
          <h2 className="text-3xl font-bold text-[#2bd876] mb-2">
            {isLogin ? "New here?" : "Welcome back!"}
          </h2>
          <p className="text-sm text-gray-700 mb-6 px-4">
            {isLogin
              ? "Sign up and join the farming future!"
              : "Login to explore more."}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="px-6 py-2 rounded-full bg-[#2bd876] text-white font-semibold shadow-md hover:bg-[#52df8f] transition cursor-pointer"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>

        {/* Forms Container */}
        <div
          className={`absolute top-0 left-0 w-[200%] h-full flex transition-transform duration-700 ease-in-out z-10 ${
            isLogin ? "translate-x-0" : "-translate-x-1/2"
          }`}
        >
          {/* Login Form */}
          <div className="w-1/2 flex items-center justify-center bg-white px-10">
            <div className="w-full max-w-sm">
              <h2 className="text-2xl font-bold text-[#2bd876] mb-6">Login</h2>
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 rounded bg-[#f6fdfa] border border-[#c1f4d7]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="p-3 rounded bg-[#f6fdfa] border border-[#c1f4d7]"
                />
                <button
                  type="submit"
                  className="p-3 rounded bg-[#2bd876] text-white font-semibold hover:bg-[#52df8f] cursor-pointer"
                >
                  Login
                </button>
              </form>
            </div>
          </div>

          {/* Signup Form */}
          <div className="w-1/2 flex items-center justify-center bg-white px-10">
            <div className="w-full max-w-sm">
              <h2 className="text-2xl font-bold text-[#2bd876] mb-6">Sign Up</h2>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-3 rounded bg-[#f6fdfa] border border-[#c1f4d7]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 rounded bg-[#f6fdfa] border border-[#c1f4d7]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="p-3 rounded bg-[#f6fdfa] border border-[#c1f4d7]"
                />
                <button
                  type="submit"
                  className="p-3 rounded bg-[#2bd876] text-white font-semibold hover:bg-[#52df8f] cursor-pointer"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Auth;
