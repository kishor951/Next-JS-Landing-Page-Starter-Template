import Link from 'next/link';
import { useState } from 'react';

export default function TimVisNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-900 shadow-sm border-b border-purple-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img src="/timvis_logo.png" alt="TimVis Logo" className="w-full h-full" />
            </div>
            <span className="text-xl font-bold text-white">Timvis</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/timvis#features" className="text-gray-300 hover:text-purple-400 transition-colors">
              Features
            </Link>
            <Link href="/timvis#pricing" className="text-gray-300 hover:text-purple-400 transition-colors">
              Pricing
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-purple-700">
            <Link href="/timvis#features" className="block py-2 text-gray-300 hover:text-purple-400">
              Features
            </Link>
            <Link href="/timvis#pricing" className="block py-2 text-gray-300 hover:text-purple-400">
              Pricing
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
