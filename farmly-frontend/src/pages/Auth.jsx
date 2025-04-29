import React, { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6fdfa] px-4">
      <div className="relative w-full max-w-4xl h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden flex">
        {/* Forms Wrapper */}
        <div className={`w-1/2 flex flex-col justify-center items-center px-10 transition-transform duration-700 ease-in-out ${
          isLogin ? "translate-x-0" : "translate-x-full"
        }`}>
          {isLogin ? (
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
          ) : null}
        </div>

        {/* Sign Up Form moves when overlay moves */}
        <div className={`w-1/2 flex flex-col justify-center items-center px-10 transition-transform duration-700 ease-in-out ${
          isLogin ? "-translate-x-full" : "translate-x-0"
        }`}>
          {!isLogin ? (
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
          ) : null}
        </div>

        {/* Sliding Green Overlay */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full bg-[#c1f4d7] flex flex-col items-center justify-center transition-transform duration-700 ease-in-out ${
            isLogin ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <h2 className="text-3xl font-bold text-[#2bd876]">
            {isLogin ? "New here?" : "Welcome back!"}
          </h2>
          <p className="text-sm text-gray-700 mt-2">
            {isLogin
              ? "Sign up and join the farming future!"
              : "Login to explore more."}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="mt-6 px-6 py-2 rounded-full bg-[#2bd876] text-white font-semibold shadow-md hover:bg-[#52df8f] transition cursor-pointer"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
