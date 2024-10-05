import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Dummy authentication logic
    if (username === "hennez" && password === "hennezbillionz") {
      setTimeout(() => {
        login();
        alert("Login successful!");
        navigate("/admin/users");
        setLoading(false);
      }, 1000);
    } else {
      setLoading(false);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#201e43] to-[#5e4b8b]">
      <form
        className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center text-[#201e43] mb-6">
          Admin Login
        </h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center mb-4">
            <svg
              className="animate-spin h-5 w-5 text-[#201e43]"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8"
              />
            </svg>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#201e43] transition duration-200"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#201e43] transition duration-200"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="bg-[#201e43] text-white py-2 rounded-md w-full hover:bg-[#5e4b8b] transition duration-200"
            >
              Login
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default AdminLogin;
