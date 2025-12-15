import React from 'react';

const FeatureBooksPage = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      
      <div className="min-h-fit bg-gradient-to-r from-[#1e5f99] via-[#0c4a85] to-[#053366] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-12">
        
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div className="text-white space-y-6 sm:space-y-8 pt-4 sm:pt-0">
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-normal leading-tight tracking-wide break-words">
              FEATURE <span className="text-yellow-400">BOOKS</span>
            </h1>

            {/* Pen Icon */}
            <div className="flex justify-start sm:justify-end sm:mr-10 lg:mr-20">
            </div>

            {/* Book Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair italic text-yellow-400 leading-snug font-normal">
              Rambling Wreck to Recognition: The Professional Speakers Handbook
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg font-inter font-light text-blue-100 leading-relaxed max-w-xl">
              Allan's soon-to-launch book, Rambling Wreck to Recognition: The Professional Speakers Handbook, shares his journey and proven strategies to inspire, guide, and empower aspiring speakers to build confidence, master their voice, and achieve recognition on any stage.
            </p>

            {/* Button */}
            <button className="mt-4 sm:mt-8 group relative px-8 sm:px-12 py-3 sm:py-4 rounded-full font-inter text-white text-base sm:text-lg font-normal transition-all duration-300 hover:scale-105">
              
              {/* Gradient background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2b70a8] to-[#1e6096] opacity-90 border border-cyan-200/40 shadow-[0_0_10px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all duration-300"></div>
              
              {/* Top gloss */}
              <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

              <span className="relative z-10">Launching soon!</span>
            </button>
          </div>
          
          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-between pb-8 sm:pb-0">
            <div className="relative">
              
              {/* Book Image */}
              <img 
                src="/coming-soon-book-cover.png"
                alt="Coming Soon Book Cover"
                className="w-72 sm:w-80 md:w-96 lg:w-[420px] transform rotate-3 sm:rotate-6 lg:rotate-12 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl"
                onError={(e) => {
                  e.target.src = "https://placehold.co/400x600/1e5f99/FFF?text=Book+Cover";
                  e.target.style.transform = "rotate(0deg)";
                }}
              />

              {/* Vertical Coming Soon Text */}
              <div className="absolute -right-3 sm:-right-6 md:-right-8 top-1/2 -translate-y-1/2">
                <p
                  className="text-yellow-400 font-playfair italic text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-normal"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)',
                  }}
                >
                  Coming soon...
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default FeatureBooksPage;