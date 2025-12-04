import React, { useState, useCallback } from 'react';
import { Sparkles, ArrowRight, RefreshCw, BookOpen } from 'lucide-react';
import { getBookRecommendations } from '../services/gemini';
import { Book, AIResponseState } from '../types';
import { BookCard } from './BookCard';

export const AIRecommender: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [state, setState] = useState<AIResponseState>({
    loading: false,
    data: null,
    error: null,
  });

  const handleSearch = useCallback(async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!prompt.trim()) return;

    setState({ loading: true, data: null, error: null });
    try {
      const books = await getBookRecommendations(prompt);
      setState({ loading: false, data: books, error: null });
    } catch (err) {
      setState({ 
        loading: false, 
        data: null, 
        error: "Our literary genius is taking a coffee break. Please try again." 
      });
    }
  }, [prompt]);

  const suggestionChips = [
    "A mystery set in Victorian London",
    "Sci-fi that feels optimistic",
    "A cookbook for beginners",
    "Historical fiction about art",
    "Something like 'The Great Gatsby'"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-bam-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-bam-green/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-bam-dark/5 px-4 py-1 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-bam-green" />
            <span className="text-xs font-semibold text-bam-dark uppercase tracking-widest">Powered by Gemini AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-bam-dark mb-4">
            Discover Your Next Obsession
          </h2>
          <p className="text-lg text-gray-600">
            Tell us what you're in the mood for, what you loved last, or who you're shopping for. Our AI concierge will curate a shelf just for you.
          </p>
        </div>

        {/* Input Area */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-bam-green to-bam-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex bg-white rounded-2xl shadow-xl p-2">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your perfect book..."
                className="flex-grow bg-transparent px-6 py-4 text-lg outline-none text-gray-700 placeholder-gray-400"
              />
              <button
                type="submit"
                disabled={state.loading}
                className="bg-bam-dark hover:bg-bam-green text-white rounded-xl px-8 py-3 font-medium transition-all duration-300 flex items-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {state.loading ? (
                  <RefreshCw className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <span>Curate</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Chips */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {suggestionChips.map((chip) => (
              <button
                key={chip}
                onClick={() => setPrompt(chip)}
                className="text-xs md:text-sm bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full hover:border-bam-green hover:text-bam-green transition-colors shadow-sm"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        {state.loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-200 rounded-xl h-96 w-full"></div>
            ))}
          </div>
        )}

        {state.error && (
          <div className="text-center p-8 bg-red-50 rounded-xl border border-red-100 max-w-xl mx-auto">
            <p className="text-red-600 font-medium">{state.error}</p>
          </div>
        )}

        {state.data && (
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-serif font-bold text-gray-900">Curated for you</h3>
              <button onClick={() => setState({loading: false, data: null, error: null})} className="text-sm text-gray-500 hover:text-bam-dark underline">Clear results</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {state.data.map((book, idx) => (
                <BookCard key={idx} book={book} />
              ))}
            </div>
          </div>
        )}
        
        {/* Empty State / Initial Placeholder */}
        {!state.data && !state.loading && (
             <div className="text-center mt-12 opacity-50">
                <BookOpen className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-400">Your personalized shelf is waiting to be filled.</p>
             </div>
        )}

      </div>
    </section>
  );
};
