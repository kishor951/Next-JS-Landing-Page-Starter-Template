import Link from 'next/link';
import { useState } from 'react';

export default function Navigation({ customIcon }: { customIcon?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img src={customIcon || "/icon.png"} alt="Logo" className="w-full h-full" />
            </div>
            <span className="text-xl font-bold text-white">ProductiveLift</span>
          </Link>

          {/* Desktop Navigation - only two items */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/timvis" className="text-gray-300 hover:text-blue-400 transition-colors">
              Timvis AI
            </Link>
            <Link href="/videos" className="text-gray-300 hover:text-blue-400 transition-colors">
              Videos
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

        {/* Mobile Navigation - only two items */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <Link href="/timvis" className="block py-2 text-gray-300 hover:text-blue-400">
              TimVis AI
            </Link>
            <Link href="/videos" className="block py-2 text-gray-300 hover:text-blue-400">
              Videos
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
