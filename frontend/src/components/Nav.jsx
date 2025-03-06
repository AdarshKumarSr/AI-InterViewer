import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'interviewer', label: 'Interviewer', path: '/interview' },
  ];

  return (
    <nav
      className={`bg-black text-gray-300 p-4 fixed top-0 w-full z-50 backdrop-filter backdrop-blur-lg bg-opacity-80 transition-transform duration-300 ${
        isScrollingUp ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-xl font-bold">Ninja Interviewer</div>

        {/* Navigation Items */}
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => navigate(item.path)}
                className="relative hover:text-gray-300 transition-colors duration-200"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
