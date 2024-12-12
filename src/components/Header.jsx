import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <nav className="bg-gray-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-green-500">Soulsborne</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-green-400">
            Home
          </Link>
      
          <Link to="/my-pitches" className="hover:text-green-400">
            My Pitches
          </Link>
          <Link to="/create-pitch" className="hover:text-green-400">
            Create Pitch
          </Link>
          <Link to="/review" className="hover:text-green-400">
            Review
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header