import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Mail,
  Clock,
  Calendar,
  Share2,
  Bookmark,
  Twitter,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer";
// --- Mock Data (Filtered to only 2 items) ---
const articlesData = [
  {
    id: 1,
    title: "From Failure to Focus: The Mindset Shift That Changed Everything",
    summary:
      "Allan's story is a powerful reminder that intelligence is not fixed and success isn't reserved for the gifted. It explores how he overcame early setbacks.",
    content:
      "When Allan was just a young boy, school was not a place of encouragement. Instead of nurturing his curiosity, teachers punished mistakes, creating a cycle of fear. One day, a teacher even told him he was “too stupid to learn.” To avoid punishment, Allan pretended to be clueless and disengaged. This coping mechanism left him far behind his classmates, and by the time he left school at 15, his education level was below that of a ten-year-old. He had no qualifications and no clear direction for the future. But Allan’s story did not end there. His sisters introduced him to the idea of mindset—the belief that with effort, discipline, and resilience, you can shape your own path. It was a turning point. For the first time, he saw learning not as punishment but as opportunity. Determined to succeed, he re-entered education with a plan: sit at the front of the class, stay focused, and commit time every week to studying. That small but powerful shift in approach changed everything. Instead of being average, Allan aimed to be top of his class. He didn’t just learn for himself—he helped peers who were struggling, discovering that teaching others made him an even stronger learner. His results spoke for themselves: certificates, high marks, and newfound confidence. Allan’s journey proves that intelligence is not fixed. The labels we are given in childhood do not have to define us. With the right mindset, a willingness to work hard, and a plan to stay consistent, we can turn failure into achievement. His story is a reminder that success isn’t reserved for the naturally gifted—it’s available to anyone ready to shift their perspective and commit to growth.",
    author: "Allan L Roberts",
    date: "Nov 25, 2025",
    readTime: "5 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1500&auto=format&fit=crop",
    illustrationUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1500&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Mindset Over Circumstances - How Belief Shapes Destiny",
    summary:
      "Life often throws challenges that make us question our potential. Learn how belief and persistence can transform limitations into stepping stones.",
    content:
      "Life often throws challenges that make us question our potential. For some, these challenges become barriers; for others, they become stepping stones. Allan’s story is a living example of how the right mindset can transform limitations into opportunities. As a child, Allan was told he was “too stupid to learn.” Those words could have defined his life forever. Many would have accepted such labels, living with regret and low self-worth. But Allan’s turning point came when he realised he didn’t need to accept anyone else’s version of his destiny. By shifting his mindset, setting clear goals, and taking consistent action, he chose a new path. This change wasn’t easy. It required discipline, courage, and resilience. From leaving school with no qualifications to later earning over 200 certificates, Allan proved that success is not reserved for the “talented”—it belongs to the determined. His achievements stand as a reminder that setbacks are never the end, only the beginning of something new. Today, Allan shares these lessons as a mentor, author, and speaker. His mission is simple yet powerful: to show people that no matter what their past looks like, they can create a brighter future. The truth is, circumstances don’t define us—our mindset does. Whether you’re starting fresh, overcoming failure, or aiming for greater heights, the first step is believing in your ability to grow. Success doesn’t come overnight, but with persistence and the right mindset, it becomes inevitable. So, the next time someone tells you what you “can’t” do, remember Allan’s story. Shift your mindset, set your goals, and start building your own path to recognition.",
    author: "Allan L Roberts",
    date: "Dec 02, 2025",
    readTime: "3 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1500&auto=format&fit=crop",
    illustrationUrl:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1500&auto=format&fit=crop",
  },
];

// --- Dual Hero Card Component ---
// Designed to look great side-by-side or stacked
const DualHeroCard = ({ article, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl border border-white/10"
    >
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0">
        <img
          src={article.illustrationUrl || article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#051c36] via-[#051c36]/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
      </div>

      {/* Content Content */}
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start gap-4">
        {/* Date / Time Badge */}
        <div className="flex items-center gap-3 text-[#FFD700] text-sm font-sans-body font-medium tracking-wide bg-black/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <Calendar className="w-3.5 h-3.5" /> <span>{article.date}</span>
          <span className="w-1 h-1 bg-[#FFD700] rounded-full" />
          <Clock className="w-3.5 h-3.5" /> <span>{article.readTime}</span>
        </div>

        {/* Title */}
        <div className="font-serif-italic text-xl md:text-2xl lg:text-3xl text-white leading-[1.1] drop-shadow-lg group-hover:text-[#FFD700] transition-colors duration-300">
          {article.title}
        </div>

        {/* Summary */}
        <p className="text-white/80 font-sans-body font-light text-lg line-clamp-2 md:line-clamp-3 max-w-xl group-hover:text-white transition-colors duration-300">
          {article.summary}
        </p>

        {/* Read More Link */}
        <div className="flex items-center gap-2 text-[#FFD700] font-sans-body font-semibold mt-4 group/btn">
          <span>Read Story</span>
          <div className="w-8 h-8 rounded-full border border-[#FFD700] flex items-center justify-center group-hover/btn:bg-[#FFD700] group-hover/btn:text-[#0B50B5] transition-all duration-300">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Single Blog Post Component ---
const BlogPost = ({ article, onNavigateBack, onNavigateToArticle }) => {
  if (!article) return null;

  return (
    <div className="animate-in fade-in zoom-in duration-500 min-h-screen">
      {/* Breadcrumb & Back */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-8">
        <button
          onClick={onNavigateBack}
          className="group flex items-center gap-2 text-white/60 hover:text-[#FFD700] transition-colors font-sans-body text-sm font-medium tracking-wide"
        >
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FFD700] group-hover:text-[#0B50B5] transition-all">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Back to Articles
        </button>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 flex flex-col gap-8 pb-20">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#FFD700] text-[#0B50B5] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Featured Story
            </span>
            <span className="text-white/50 text-xs font-sans-body flex items-center gap-1">
              <Clock className="w-3 h-3" /> {article.readTime}
            </span>
          </div>

          <h1 className="font-serif-italic text-4xl md:text-6xl text-white leading-[1.1]">
            {article.title}
          </h1>

          <div className="flex items-center justify-between border-y border-white/10 py-6 mt-2 bg-white/5 rounded-xl px-6 backdrop-blur-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 overflow-hidden ring-2 ring-[#FFD700]/30">
                  <img
                    src={`https://ui-avatars.com/api/?name=${article.author}&background=random`}
                    alt={article.author}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-sans-body font-medium text-base">
                    {article.author}
                  </span>
                  <span className="text-[#FFD700] font-sans-body text-xs">
                    Author & Mentor
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-[#0B50B5] hover:scale-110 transition-all"
                title="Save"
              >
                <Bookmark className="w-5 h-5" />
              </button>
              <button
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-[#0B50B5] hover:scale-110 transition-all"
                title="Share"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl my-4 ring-1 ring-white/10 relative group">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none"></div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto w-full font-sans-body text-white/90 leading-loose font-light text-lg flex flex-col gap-6">
          <p className="first-letter:text-6xl first-letter:font-serif-italic first-letter:text-[#FFD700] first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
            {article.content}
          </p>
        </div>
      </article>

      {/* Next Article Suggestion (The one that isn't the current one) */}
      <section className="w-full border-t border-white/10 bg-black/20 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="font-sans-body text-sm uppercase tracking-widest text-[#FFD700] mb-8">
            Up Next
          </h3>
          {articlesData
            .filter((a) => a.id !== article.id)
            .map((next) => (
              <div
                key={next.id}
                onClick={() => onNavigateToArticle(next)}
                className="group cursor-pointer flex flex-col md:flex-row gap-8 items-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all"
              >
                <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden shrink-0">
                  <img
                    src={next.imageUrl}
                    alt={next.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-2xl font-serif-italic text-white group-hover:text-[#FFD700] transition-colors">
                    {next.title}
                  </h4>
                  <p className="text-white/60 text-sm line-clamp-2">
                    {next.summary}
                  </p>
                  <span className="flex items-center gap-2 text-[#FFD700] text-sm font-medium mt-2">
                    Read Now <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

// --- Main Home View Component ---
const HomeView = ({ onNavigateToArticle }) => {
  return (
    <>
      <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-[#FFD700] text-sm font-bold tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-[#FFD700]"></span>
            In Focus
            <span className="w-8 h-[1px] bg-[#FFD700]"></span>
          </div>
          <h1 className="font-serif-italic text-5xl md:text-7xl text-white drop-shadow-lg">
            Featured Stories
          </h1>
          <p className="text-white/60 max-w-2xl font-sans-body text-lg font-light">
            Two powerful journeys of resilience, mindset, and transformation.
          </p>
        </div>

        {/* Dual Grid Layout - No Slider Needed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
          {articlesData.map((article, index) => (
            <div
              key={article.id}
              className="w-full animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <DualHeroCard
                article={article}
                onClick={() => onNavigateToArticle(article)}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

// --- Page Wrapper ---
const BlogsPage = () => {
  const [view, setView] = useState("home");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const location = useLocation();

  const navigateToArticle = (article) => {
    setSelectedArticle(article);
    setView("article");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateHome = () => {
    setView("home");
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (location.state && location.state.selectedArticleId) {
      const targetArticle = articlesData.find(
        (a) => a.id === location.state.selectedArticleId
      );
      if (targetArticle) {
        navigateToArticle(targetArticle);
      }
    }
  }, [location]);

  return (
    <div
      id="topBlogs"
      className="min-h-screen w-full bg-[#051c36] font-sans text-white overflow-x-hidden flex flex-col selection:bg-[#FFD700] selection:text-[#0B50B5]"
    >
      <Helmet>
        {/* Canonical */}
        <link rel="canonical" href="https://allen-robert-portfolio-iuki.vercel.app/blogs" />

        {/* Title */}
        <title>Blogs | Allan Roberts</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Read motivational insights, life lessons, and inspiring stories written by Allan Roberts."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Blogs | Allan Roberts" />
        <meta property="og:description" content="Explore inspiring articles by Allan Roberts, covering mindset, life experiences, and motivation." />
        <meta property="og:image" content="https://allen-robert-portfolio-iuki.vercel.app/allan-roberts-portrait.png" />
        <meta property="og:url" content="https://allen-robert-portfolio-iuki.vercel.app/Blogs" />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blogs | Allan Roberts" />
        <meta name="twitter:description" content="Explore inspiring blog posts and motivational insights by Allan Roberts." />
        <meta name="twitter:image" content="https://allen-robert-portfolio-iuki.vercel.app/allan-roberts-portrait.png" />

        <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://allen-robert-portfolio-iuki.vercel.app/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blogs",
      "item": "https://allen-robert-portfolio-iuki.vercel.app/Blogs"
    }
  ]
}
`}
</script>

      </Helmet>


      {/* Dynamic Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-r from-[#1e5f99] via-[#0c4a85] to-[#053366] opacity-100 z-0 pointer-events-none"></div>

      {/* Subtle Noise Texture overlay */}
      <div className="fixed inset-0 opacity-[0.03] z-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-serif-italic {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 700;
        }
        .font-sans-body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <main className="flex-grow relative z-10">
        {view === "home" ? (
          <HomeView onNavigateToArticle={navigateToArticle} />
        ) : (
          <BlogPost
            article={selectedArticle}
            onNavigateBack={navigateHome}
            onNavigateToArticle={navigateToArticle}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
