// Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Soulsborne</h1>
      <p className="text-lg mb-8 text-center">
        Discover a seamless platform to create and share your pitches.
      </p>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 rounded text-white text-lg hover:bg-blue-500"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-6 py-3 bg-green-600 rounded text-white text-lg hover:bg-green-500"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Home;
