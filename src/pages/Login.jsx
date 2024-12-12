import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    // Clear error if validation passes
    setError("");

    // Perform login logic here (e.g., API call for authentication)

    // Navigate to Home after successful login
    navigate("/");
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-white">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-gray-800 p-6 rounded shadow-lg"
      >
        {error && (
          <p className="mb-4 text-red-500 text-sm text-center">{error}</p>
        )}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 rounded hover:bg-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
