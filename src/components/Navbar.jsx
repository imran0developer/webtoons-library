import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const token = localStorage.getItem('token') || "";

  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-blue-400">Webtoon Library</Link>
        </div>
        
        {/* Centered Links */}
        <div className="hidden md:flex flex-grow justify-center space-x-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to={token ? "/favourites" : "/auth/login"} className="hover:text-blue-400">Favourites</Link>
          <Link to="/webtoons" className="hover:text-blue-400">Webtoons</Link>
          <Link to="/genres" className="hover:text-blue-400">Genres</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>

        {/* User Icon/Login Button */}
        <div className="hidden md:flex items-center space-x-4">
          {token ? 
          (<img src="https://www.svgrepo.com/show/295402/user-profile.svg" alt="User Icon" className="w-8 h-8 rounded-full hover:opacity-75 cursor-pointer" />

          ):
          <Link to="/auth/login" className="hover:text-blue-400">Login</Link>}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <div className="flex flex-col space-y-2 p-4">
            <Link to="/" className="hover:text-blue-400" onClick={toggleMenu}>Home</Link>
            <Link to="/favourites" className="hover:text-blue-400" onClick={toggleMenu}>Favourites</Link>
            <Link to="/webtoons" className="hover:text-blue-400" onClick={toggleMenu}>Webtoons</Link>
            <Link to="/genres" className="hover:text-blue-400" onClick={toggleMenu}>Genres</Link>
            <Link to="/about" className="hover:text-blue-400" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="hover:text-blue-400" onClick={toggleMenu}>Contact</Link>
            <Link to="/login" className="hover:text-blue-400" onClick={toggleMenu}>Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;