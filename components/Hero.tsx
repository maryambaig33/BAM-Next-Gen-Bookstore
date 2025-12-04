import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-bam-dark text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1507842217121-9e9f147d7f75?q=80&w=2670&auto=format&fit=crop"
                alt="Library"
                className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bam-dark via-bam-dark/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
            <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                    Stories that <br />
                    <span className="text-bam-accent italic">resonate</span> with you.
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed font-light">
                    Experience the new Books-A-Million. Intelligent discovery, curated collections, and a community of readers built for the next generation.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="bg-bam-accent hover:bg-white hover:text-bam-dark text-bam-dark font-bold py-4 px-8 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg">
                        Shop Best Sellers
                    </button>
                    <button className="border border-white/30 hover:bg-white/10 text-white font-medium py-4 px-8 rounded-lg transition-all backdrop-blur-sm">
                        Join the Millionaire's Club
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};
