import React from 'react';
import logo from '../assets/images/logo.jpeg'; // Ensure the path is correct

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a className="block w-[12rem] xl:mr-8">
            <img src={logo} width={190} height={40} alt="logo" /> {/* Corrected height */}
          </a>
          <div className="flexCenter">
            <div className="flex shrink-0">
              <a href="/" className="text-purple-900">Afida</a>
            </div>
          </div>
          <div className="hidden md:block">
            <a href="/" className="text-white hover:text-purple-900 rounded p-2">
              Home
            </a>
            <a href="/" className="text-white hover:text-purple-900 rounded p-2">
              App
            </a>
            <a href="/" className="text-white hover:text-purple-900 rounded p-2">
              Tokens
            </a>
            <a href="/" className="text-white hover:text-purple-900 rounded p-2">
              Discover
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
