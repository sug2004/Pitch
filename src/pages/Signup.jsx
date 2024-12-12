// Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    // Clear error and navigate to Home.jsx
    setError("");
    navigate("/");
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-white">
      <h2 className="text-3xl font-bold mb-6">Signup</h2>
      <form
        className="w-full max-w-sm bg-gray-800 p-6 rounded shadow-lg"
        onSubmit={handleSubmit}
      >
        {error && (
          <div className="mb-4 p-2 bg-red-600 rounded text-center">{error}</div>
        )}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-600 rounded hover:bg-green-500"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
