import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: "From Failure to Focus: The Mindset Shift That Changed Everything",
    summary: "Allan's story is a powerful reminder that intelligence is not fixed and success isn't reserved for the gifted. It explores how he overcame early challenges and transformed his mindset to achieve success.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1500&auto=format&fit=crop",
    isLarge: true,
    illustrationUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1500&auto=format&fit=crop" 
  },
  {
    id: 2,
    title: "Mindset Over Circumstances - How Belief Shapes Destiny",
    summary: "Learn how to establish your presence in the literary world and connect with readers who will champion your work.",
    imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1500&auto=format&fit=crop",
    isLarge: false,
    illustrationUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1500&auto=format&fit=crop"
  },
];

// Helper component for the article card
const ArticleCard = ({ article, onClick }) => {
  if (article.isLarge) {
    // Large Card Layout - Always large on mobile, only first card large on desktop
    return (
      <div className="w-full lg:w-3/5 xl:w-[600px] flex flex-col gap-6">
        {/* Image Container */}
        <div 
          onClick={onClick}
          className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer"
        >
           <div className="w-full h-full bg-[#3B82F6] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              
              <img 
                src={article.illustrationUrl || article.imageUrl} 
                alt="Man holding tablet and books" 
                className="h-full w-full object-cover relative z-10"
              />
           </div>
        </div>
        
        {/* Content Section */}
        <div className="flex flex-col gap-3 pr-4">
          <h2 
            onClick={onClick}
            className="text-2xl font-normal text-white font-sans-body leading-tight cursor-pointer hover:text-[#FFD700] transition-colors"
          >
            {article.title}
          </h2>
          <p className="text-base font-light text-white/70 font-sans-body leading-relaxed">
            {article.summary}
          </p>
        </div>
      </div>
    );
  } else {
    // Small Card Layout - Shows large on mobile, small on desktop
    return (
      <>
        {/* Mobile View - Large Card */}
        <div className="w-full lg:hidden flex flex-col gap-6">
          <div 
            onClick={onClick}
            className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer"
          >
             <div className="w-full h-full bg-[#3B82F6] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                
                <img 
                  src={article.illustrationUrl || article.imageUrl} 
                  alt="Man holding tablet and books" 
                  className="h-full w-full object-cover relative z-10"
                />
             </div>
          </div>
          
          <div className="flex flex-col gap-3 pr-4">
            <h2 
              onClick={onClick}
              className="text-2xl font-normal text-white font-sans-body leading-tight cursor-pointer hover:text-[#FFD700] transition-colors"
            >
              {article.title}
            </h2>
            <p className="text-base font-light text-white/70 font-sans-body leading-relaxed">
              {article.summary}
            </p>
          </div>
        </div>

        {/* Desktop View - Small Card */}
        <div className="hidden lg:flex w-full max-w-[280px] flex-shrink-0 flex-col gap-5">
          <div 
            onClick={onClick}
            className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          >
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <h2 
              onClick={onClick}
              className="text-xl font-normal text-white font-sans-body leading-snug cursor-pointer hover:text-[#FFD700] transition-colors"
            >
              {article.title}
            </h2>
            <button 
              onClick={onClick}
              className="text-sm font-light text-white/60 hover:text-white transition-colors mt-1 text-left"
            >
              {article.summary}
            </button>
          </div>
        </div>
      </>
    );
  }
};

const MainPage = () => {
  const [activeIndex, setActiveIndex] = useState(0); 
  const navigate = useNavigate(); 

  // NAVIGATION HANDLER
  const handleArticleClick = (articleId) => {
    navigate('/blogs', { state: { selectedArticleId: articleId } });
  };

  const getDisplayedArticles = () => {
    const mainArticle = articles[activeIndex];
    
    // Logic to wrap around since we only have 2 articles but need 3 slots (1 Large, 2 Small)
    const nextIndex1 = (activeIndex + 1) % articles.length;
    const nextIndex2 = (activeIndex + 2) % articles.length;

    const displayList = [
      { ...mainArticle, isLarge: true },
      { ...articles[nextIndex1], isLarge: false },
      { ...articles[nextIndex2], isLarge: false }
    ];

    return displayList;
  };

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % articles.length);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const displayedArticles = getDisplayedArticles();

  return (
    <div className="min-h-screen w-full bg-[#0B50B5] relative overflow-hidden flex flex-col items-center justify-center p-4 py-16 font-sans">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-serif-italic {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 700;
        }
        .font-sans-body {
          font-family: 'Inter', sans-serif;
        }
        .bg-custom-gradient {
            background-color: #0B50B5;
        }
      `}</style>

      {/* Main Background Wrapper */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e5f99] via-[#0c4a85] to-[#053366] z-0"></div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col gap-10 px-4 md:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="flex justify-between items-start w-full">
          <h1 className="font-serif-italic text-4xl md:text-5xl text-[#FFD700] leading-tight relative pb-2">
            Latest Articles
            <span className="absolute left-0 bottom-0 w-full h-[5px] bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 10 2\'><circle cx=\'1\' cy=\'1\' r=\'1\' fill=\'%23FFD700\' /></svg>')] bg-repeat-x bg-[length:10px_2px]"></span>
          </h1>

          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFD700] to-[#E6C200] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            aria-label="Next article"
          >
            <ChevronRight className="w-5 h-5 text-[#0B50B5]" />
          </button>
        </div>

        {/* Articles Display (Carousel View) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center md:items-start w-full">
          {displayedArticles.map((article, index) => (
            index < 3 && (
              <ArticleCard 
                key={`${article.id}-${index}`} 
                article={article} 
                onClick={() => handleArticleClick(article.id)} 
              />
            )
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center w-full">
          <div className="flex items-center gap-3">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="p-1 transition-all duration-300"
                aria-label={`Go to slide ${index + 1}`}
              >
                {activeIndex === index ? (
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#C58FFF] to-[#FFD700] flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#0B50B5] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/90" /> 
                    </div>
                  </div>
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full bg-white/70 hover:bg-white" />
                )}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MainPage;