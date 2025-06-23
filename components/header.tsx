'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@fontsource/merriweather/latin.css';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '#products' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo + Company Name */}
          <div className="flex items-center space-x-4 min-w-0">
            <div className="w-16 h-16 flex-shrink-0 relative">
              <Image
                src="/images/logo1.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="flex flex-col leading-tight min-w-0">
              <span className="text-xl sm:text-2xl md:text-2xl font-extrabold tracking-widest uppercase  font-[Merriweather,serif]"
              style={{ color: 'rgba(0, 95, 137, 1)' }}>
                SRI MUTHARAMMAN
              </span>
              <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-widest uppercase  font-[Merriweather,serif]"
              style={{ color: 'rgba(0, 95, 137, 1)' }}>
                
                ENGINEERING
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-auto space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-full font-semibold text-gray-700 bg-gradient-to-br from-blue-100 via-pink-100 to-blue-50 shadow hover:from-blue-500 hover:to-pink-500 hover:text-white transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block w-full text-center text-gray-700 font-medium px-4 py-2 rounded-full bg-gradient-to-br from-blue-100 via-pink-100 to-blue-50 shadow hover:from-blue-500 hover:to-pink-500 hover:text-white transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
