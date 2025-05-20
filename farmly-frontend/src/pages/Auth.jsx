import React, { useState } from "react";
import axios from "axios";

const indianLocations = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata",
  "Ahmedabad", "Pune", "Jaipur", "Lucknow", "Chandigarh", "Bhopal",
  "Patna", "Indore", "Nagpur", "Thiruvananthapuram", "Ranchi", "Guwahati"
];

// Preset admin credentials
const ADMIN_EMAIL = "admin@farmly.com";
const ADMIN_PASSWORD = "admin123";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    role: "farmer",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const { name, email, password, confirmPassword, location, role } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password || (!isLogin && (!name || !confirmPassword || !location || !role))) {
      return "Please fill in all required fields.";
    }

    if (!emailRegex.test(email)) {
      return "Invalid email format.";
    }

    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }

    if (!isLogin && password !== confirmPassword) {
      return "Passwords do not match.";
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    // Admin direct login
    if (formData.email === ADMIN_EMAIL && formData.password === ADMIN_PASSWORD) {
      localStorage.setItem("token", "admin_token");
      localStorage.setItem("user", JSON.stringify({ email: ADMIN_EMAIL, role: "admin" }));
      setSuccess("Admin login successful!");
      window.location.href = "/admin-dashboard";
      return;
    }

    const BASE_URL = "http://localhost:5000";
    const url = isLogin ? `${BASE_URL}/api/auth/login` : `${BASE_URL}/api/auth/signup`;

    const payload = isLogin
      ? { email: formData.email, password: formData.password }
      : {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          location: formData.location,
          role: formData.role,
        };

    try {
      const res = await axios.post(url, payload);

      if (isLogin) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setSuccess("Login successful!");

        const role = res.data.user.role;
        if (role === "farmer") {
          window.location.href = "/farmer-dashboard";
        } else if (role === "buyer") {
          window.location.href = "/buyer-dashboard";
        } else {
          window.location.href = "/dashboard";
        }
      } else {
        setSuccess("Signup successful! Please log in.");
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          location: "",
          role: "farmer",
        });
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.response?.data?.msg || "An unexpected error occurred.");
    }
  };

  const handleModeToggle = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      location: "",
      role: "farmer",
    });
    setError("");
    setSuccess("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6fdfa] px-4">
      <div className="w-full max-w-xl perspective">
        <div
          className={`relative w-full h-[580px] transition-transform duration-700 transform-style preserve-3d ${isLogin ? "" : "rotate-y-180"}`}
        >
          {/* Login Form */}
          <div className="absolute backface-hidden w-full h-full bg-white rounded-2xl shadow-2xl p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#2bd876] mb-6 text-center">Login</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded bg-[#f6fdfa] border border-[#c1f4d7]"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="p-3 rounded bg-[#f6fdfa] border border-[#c1f4d7]"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">{success}</p>}
              <button
                type="submit"
                className="p-3 rounded bg-[#2bd876] text-white font-semibold hover:bg-[#52df8f] cursor-pointer"
              >
                Login
              </button>
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <span
                  onClick={handleModeToggle}
                  className="text-[#2bd876] cursor-pointer font-semibold"
                >
                  Sign Up
                </span>
              </p>
            </form>
          </div>

          {/* Signup Form */}
          <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-white rounded-2xl shadow-2xl p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#2bd876] mb-6 text-center">Sign Up</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 rounded bg-[#f6fdfa] border border-[#c1f4d7]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded bg-[#f6fdfa] border border-[#c1f4d7]"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="p-3 rounded bg-[#f6fdfa] border border-[#c1f4d7]"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="p-3 rounded bg-[#f6fdfa] border border-[#c1f4d7]"
              />
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="p-3 rounded bg-[#f6fdfa] border border-[#c1f4d7]"
              >
                <option value="">Select Location</option>
                {indianLocations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="p-3 rounded bg-[#f6fdfa] border border-[#c1f4d7]"
              >
                <option value="farmer">Farmer</option>
                <option value="buyer">Buyer</option>
              </select>

              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">{success}</p>}
              <button
                type="submit"
                className="p-3 rounded bg-[#2bd876] text-white font-semibold hover:bg-[#52df8f] cursor-pointer"
              >
                Sign Up
              </button>
              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <span
                  onClick={handleModeToggle}
                  className="text-[#2bd876] cursor-pointer font-semibold"
                >
                  Login
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .perspective {
          perspective: 1500px;
        }
        .transform-style {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default Auth;
