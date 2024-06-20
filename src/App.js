// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Friends from './pages/Friends';
import Marketplace from './pages/Marketplace';
import Notifications from './pages/Notifications';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MainLayout from './components/MainLayout';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <Router>
      {user ? (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="videos" element={<Videos />} />
            <Route path="friends" element={<Friends />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
