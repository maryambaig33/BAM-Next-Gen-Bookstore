import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Badge */}
      {book.isBestSeller && (
        <div className="absolute top-3 right-3 z-10 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
          Bestseller
        </div>
      )}

      {/* Image Area - Simulated with Color/Title since we don't have real URLs */}
      <div 
        className="h-64 w-full relative overflow-hidden flex items-center justify-center p-6"
        style={{ backgroundColor: book.coverColor || '#e5e7eb' }}
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        
        {/* Faux Book Cover */}
        <div className="w-32 h-48 bg-white shadow-2xl rounded-sm transform group-hover:scale-105 group-hover:-translate-y-2 transition-transform duration-500 flex flex-col p-2 text-center items-center justify-center border-l-4 border-black/5 relative z-10">
            <span className="text-[8px] uppercase tracking-widest text-gray-400 mb-2">{book.author}</span>
            <span className="font-serif font-bold text-gray-800 leading-tight line-clamp-3 text-sm">{book.title}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-2 flex items-center space-x-1">
          <Star className="h-3 w-3 text-bam-accent fill-current" />
          <span className="text-xs font-medium text-gray-500">{book.rating}</span>
          <span className="text-xs text-gray-300">•</span>
          <span className="text-xs text-gray-400 uppercase tracking-wide">{book.genre}</span>
        </div>
        
        <h3 className="font-serif text-lg font-bold text-gray-900 leading-tight mb-1 group-hover:text-bam-green transition-colors">
          {book.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{book.author}</p>
        
        <p className="text-xs text-gray-600 line-clamp-3 mb-4 flex-grow leading-relaxed">
          {book.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
          <span className="font-bold text-gray-900">{book.price}</span>
          <button className="flex items-center space-x-1 bg-bam-dark text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-bam-green transition-colors">
            <ShoppingCart className="h-3 w-3" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
