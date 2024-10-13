import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Links Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/webtoons" className="hover:text-blue-400">Webtoons</Link></li>
              <li><Link to="/genres" className="hover:text-blue-400">Genres</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://www.svgrepo.com/show/362164/social-facebook.svg" alt="Facebook" className="w-6 h-6 hover:opacity-75" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://www.svgrepo.com/show/362166/social-twitter.svg" alt="Twitter" className="w-6 h-6 hover:opacity-75" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://www.svgrepo.com/show/444570/social-instagram.svg" alt="Instagram" className="w-6 h-6 hover:opacity-75" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://www.svgrepo.com/show/362167/social-youtube.svg" alt="YouTube" className="w-6 h-6 hover:opacity-75" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Webtoon Library. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;