import React, { useState } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'interviewer', label: 'Interviewer' },
  ];

  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-80">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-xl font-bold">Ninja Interviewer</div>

        {/* Navigation Items */}
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`relative hover:text-gray-300 transition-colors duration-200 ${
                  activeSection === item.id ? 'text-white' : ''
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-white transform origin-bottom-left scale-x-100 transition-transform duration-300"></span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;