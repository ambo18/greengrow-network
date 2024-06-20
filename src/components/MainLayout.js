// src/components/MainLayout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-16 bg-gray-800 text-white flex flex-col items-center py-4">
        <Link to="/" className="mb-4 text-lg font-bold">GreenGrow</Link>
        <Link to="/home" className="mb-4">🏠</Link>
        <Link to="/videos" className="mb-4">📹</Link>
        <Link to="/friends" className="mb-4">👥</Link>
        <Link to="/marketplace" className="mb-4">🛒</Link>
        <Link to="/notifications" className="mb-4">🔔</Link>
        <Link to="/dashboard" className="mb-4">📊</Link>
      </nav>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
