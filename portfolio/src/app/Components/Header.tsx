"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';  // Using react-icons for the toggle button

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white rounded-t-3xl">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-12">

        {/* Text Logo */}
        <div className="text-logo flex items-center">
          <Link href="/" className="flex items-center">
            <div className="logo-symbol text-3xl font-bold">Sukh</div>
            <div className="logo-text ml-2 text-xl">
              the <span className="font-semibold">Coder</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {[ 
              { title: "About Me", link: "/aboutme" }, 
              { title: "Resume", link: "/resume" },
              { title: "Blog", link: "/blog" },
              { title: "Contact", link: "/contact" },
            ].map((item, index) => (
              <li key={index} className="relative group">
                <Link href={item.link} className="flex items-center p-2 hover:bg-gray-800 rounded transition duration-200">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 rounded-b-lg">
          <ul className="flex flex-col space-y-2 p-4 text-white">
            {[ 
              { title: "About Me", link: "/aboutme" }, 
              { title: "Resume", link: "/resume" },
              { title: "Blog", link: "/blog" },
              { title: "Contact", link: "/contact" },
            ].map((item, index) => (
              <li key={index} className="relative group">
                <Link href={item.link} className="flex items-center p-2 hover:bg-gray-700 rounded transition duration-200">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* End Mobile Navigation */}
    </header>
  );
};

export default Header;
