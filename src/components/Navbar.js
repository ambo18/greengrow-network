// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">GreenGrow</Link>
      <div className="flex space-x-4">
        <Link to="/home" className="hover:text-gray-400">🏠 Home</Link>
        <Link to="/videos" className="hover:text-gray-400">📹 Videos</Link>
        <Link to="/friends" className="hover:text-gray-400">👥 Friends</Link>
        <Link to="/marketplace" className="hover:text-gray-400">🛒 Marketplace</Link>
        <Link to="/notifications" className="hover:text-gray-400">🔔 Notifications</Link>
        <Link to="/dashboard" className="hover:text-gray-400">📊 Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
