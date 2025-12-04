import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AIRecommender } from './components/AIRecommender';
import { FeaturedShelf } from './components/FeaturedShelf';
import { Book } from './types';
import { Twitter, Instagram, Facebook } from 'lucide-react';

// Mock data for initial loading
const INITIAL_BOOKS: Book[] = [
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    description: "Between life and death there is a library, and within that library, the shelves go on forever.",
    genre: "Fiction",
    rating: 4.8,
    price: "$26.00",
    isBestSeller: true,
    coverColor: "#1a2e35"
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    description: "Ryland Grace is the sole survivor on a desperate, last-chance mission.",
    genre: "Sci-Fi",
    rating: 4.9,
    price: "$28.99",
    isBestSeller: true,
    coverColor: "#e0c097"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "An easy & proven way to build good habits & break bad ones.",
    genre: "Self-Help",
    rating: 5.0,
    price: "$27.00",
    isBestSeller: true,
    coverColor: "#f4f4f4"
  },
  {
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    description: "Two friends—often in love, but never lovers—come together as creative partners.",
    genre: "Fiction",
    rating: 4.7,
    price: "$28.00",
    isBestSeller: false,
    coverColor: "#d946ef"
  },
  {
     title: "Dune",
     author: "Frank Herbert",
     description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides.",
     genre: "Sci-Fi",
     rating: 4.9,
     price: "$18.00",
     coverColor: "#ea580c"
  }
];

const App: React.FC = () => {
  const [hasApiKey, setHasApiKey] = useState(false);

  useEffect(() => {
    // Check if API key is present in environment
    if (process.env.API_KEY) {
      setHasApiKey(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Main AI Feature Section */}
        <div id="ai-concierge">
             {!hasApiKey && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 max-w-7xl mx-auto mt-4">
                    <div className="flex">
                        <div className="ml-3">
                            <p className="text-sm text-yellow-700">
                                <span className="font-bold">Demo Mode:</span> AI features require a Gemini API Key in the environment variables. The list below is static.
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <AIRecommender />
        </div>

        <FeaturedShelf 
            title="Trending Now" 
            subtitle="The most talked-about books of the week."
            books={INITIAL_BOOKS} 
        />
        
        <FeaturedShelf 
            title="New Releases" 
            subtitle="Fresh from the press."
            books={[...INITIAL_BOOKS].reverse()} 
        />

        {/* Membership Promo */}
        <section className="bg-bam-dark py-16 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="mb-8 md:mb-0 md:mr-12">
                    <h2 className="text-3xl font-serif font-bold text-white mb-4">Join the Millionaire's Club</h2>
                    <p className="text-gray-300 max-w-xl">
                        Get free shipping on every order, exclusive coupons, and up to 40% off bestsellers.
                        It's the membership that pays for itself.
                    </p>
                </div>
                <button className="bg-bam-accent text-bam-dark font-bold py-3 px-8 rounded-lg hover:bg-white transition-colors">
                    Join for $25/year
                </button>
            </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-bam-green">Books</a></li>
                <li><a href="#" className="hover:text-bam-green">eBooks</a></li>
                <li><a href="#" className="hover:text-bam-green">Toys & Collectibles</a></li>
                <li><a href="#" className="hover:text-bam-green">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">About</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-bam-green">Our Story</a></li>
                <li><a href="#" className="hover:text-bam-green">Careers</a></li>
                <li><a href="#" className="hover:text-bam-green">Store Locator</a></li>
                <li><a href="#" className="hover:text-bam-green">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-bam-green">Help Center</a></li>
                <li><a href="#" className="hover:text-bam-green">Returns</a></li>
                <li><a href="#" className="hover:text-bam-green">Order Status</a></li>
                <li><a href="#" className="hover:text-bam-green">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Stay Connected</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-bam-green"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="text-gray-400 hover:text-bam-green"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-gray-400 hover:text-bam-green"><Facebook className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400 mb-4 md:mb-0">© 2024 Books-A-Million, Inc. All rights reserved. Concept Demo.</p>
            <div className="flex space-x-6 text-xs text-gray-400">
                <a href="#" className="hover:text-gray-600">Privacy Policy</a>
                <a href="#" className="hover:text-gray-600">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
