"use client";
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white rounded-t-3xl">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-12">

        {/* Text Logo */}
        <div className="text-logo flex items-center">
          <Link href="/" className="flex items-center">
            <div className="logo-symbol text-3xl font-bold">A</div>
            <div className="logo-text ml-2 text-xl">
              Alex <span className="font-semibold">Smith</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {[
              { title: "About Me", link: "/aboutme"}, 
              { title: "Resume", link: "/Resume" },
              
              {
                title: "Blog",
                link: "/blog",
               
              },
              { title: "Contact", link: "/Contact" },
            ].map((item, index) => (
              <li key={index} className="relative group">
                <Link href={item.link} className="flex items-center p-2 hover:bg-gray-800 rounded transition duration-200">
                  {item.title}
                </Link>
                {item.subLinks && (
                  <ul className="absolute left-0 hidden bg-gray-800 shadow-lg rounded-md group-hover:block">
                    {item.subLinks.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subItem.link} className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md transition duration-200">
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <i className="fa fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 rounded-b-lg">
          <ul className="flex flex-col space-y-2 p-4 text-white">
            {[
              { title: "About Me", link: "index.html", subLinks: [{ title: "About Me 1", link: "index.html" }, { title: "About Me 2", link: "index-2.html" }] },
              { title: "Resume", link: "resume.html" },
              {
                title: "Portfolio",
                link: "portfolio.html",
                subLinks: [
                  { title: "Portfolio 2 Columns", link: "portfolio-2-columns.html" },
                  { title: "Portfolio 3 Columns", link: "portfolio.html" },
                  { title: "Portfolio 4 Columns", link: "portfolio-4-columns.html" },
                  { title: "Portfolio 5 Columns", link: "portfolio-5-columns.html" },
                ],
              },
              {
                title: "Blog",
                link: "blog.html",
                subLinks: [
                  { title: "Blog 2 Columns", link: "blog.html" },
                  { title: "Blog 3 Columns", link: "blog-3-columns.html" },
                ],
              },
              { title: "Contact", link: "contact.html" },
            ].map((item, index) => (
              <li key={index} className="relative group">
                <Link href={item.link} className="flex items-center p-2 hover:bg-gray-700 rounded transition duration-200">
                  {item.title}
                </Link>
                {item.subLinks && (
                  <ul className="absolute left-0 hidden bg-gray-800 shadow-lg rounded-md group-hover:block">
                    {item.subLinks.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subItem.link} className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md transition duration-200">
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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
