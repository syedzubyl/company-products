'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@fontsource/merriweather/latin.css';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '#products' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 animate-fadeInDown">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Image src="/images/logo1.png" alt="SME Logo" width={120} height={120} className="h-14 w-14 object-contain" />
            <span className="text-xl sm:text-2xl font-extrabold tracking-widest uppercase font-[Merriweather,serif]" style={{ color: 'rgba(0, 95, 137, 1)', fontFamily: 'Merriweather, serif', fontVariationSettings: '"ital" 0, "wdth" 100, "wght" 700' }}>
              <Link href="#home" scroll={true}>Sri Mutharamman Engineering</Link>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block font-sans text-base font-medium">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="relative text-gray-700 font-medium px-4 py-2 rounded-full transition-all duration-300 hover:text-blue-700 hover:bg-blue-50 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 group"
                  >
                    {item.name}
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 w-0 bg-blue-700 rounded-full transition-all duration-300 group-hover:w-3/4 group-hover:h-1"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
