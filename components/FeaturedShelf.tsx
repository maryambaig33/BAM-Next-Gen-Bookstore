import React from 'react';
import { BookCard } from './BookCard';
import { Book } from '../types';
import { ArrowRight } from 'lucide-react';

interface FeaturedShelfProps {
  title: string;
  subtitle?: string;
  books: Book[];
}

export const FeaturedShelf: React.FC<FeaturedShelfProps> = ({ title, subtitle, books }) => {
  return (
    <section className="py-12 bg-white border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
            <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900">{title}</h2>
                {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
            </div>
            <a href="#" className="flex items-center text-bam-green font-medium hover:underline text-sm">
                View All <ArrowRight className="h-4 w-4 ml-1" />
            </a>
        </div>
        
        {/* Scrollable Container */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6 no-scrollbar snap-x snap-mandatory">
            {books.map((book, idx) => (
                <div key={idx} className="flex-none w-64 snap-center h-full">
                    <BookCard book={book} />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
