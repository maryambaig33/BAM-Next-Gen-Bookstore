import React, { useState } from 'react';
import { BookOpen, Search, ShoppingBag, Menu, X, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <BookOpen className="h-8 w-8 text-bam-green mr-2" />
            <span className="font-serif text-2xl font-bold text-bam-dark tracking-tighter">BAM<span className="text-bam-accent">.</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-600 hover:text-bam-green font-medium transition-colors">Bestsellers</a>
            <a href="#" className="text-gray-600 hover:text-bam-green font-medium transition-colors">New Arrivals</a>
            <a href="#" className="text-gray-600 hover:text-bam-green font-medium transition-colors">Audiobooks</a>
            <a href="#" className="text-gray-600 hover:text-bam-green font-medium transition-colors">Gifts</a>
            <a href="#" className="text-gray-600 hover:text-bam-green font-medium transition-colors">Membership</a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-500 hover:text-bam-green transition">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-500 hover:text-bam-green transition">
              <User className="h-5 w-5" />
            </button>
            <button className="text-gray-500 hover:text-bam-green transition relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-bam-accent text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">2</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-bam-green">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-bam-green hover:bg-gray-50">Bestsellers</a>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-bam-green hover:bg-gray-50">New Arrivals</a>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-bam-green hover:bg-gray-50">Audiobooks</a>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-bam-green hover:bg-gray-50">Gifts</a>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-bam-green hover:bg-gray-50">Membership</a>
          </div>
        </div>
      )}
    </nav>
  );
};
