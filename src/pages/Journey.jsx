import React from "react";
import { Helmet } from "react-helmet";
import {
  BookOpen,
  ChevronRight,
  MapPin,
  Trophy,
  Lightbulb,
  Target,
  Book,
} from "lucide-react";
import Footer from "../components/footer";

// --- SVG Components for Custom Graphics ---

const RedPin = () => (
  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 drop-shadow-lg">
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-400 via-red-600 to-red-800 shadow-[0_4px_6px_rgba(0,0,0,0.3)] border border-red-900/20">
      <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-white opacity-40 blur-[1px]"></div>
    </div>
  </div>
);

const SunburstCorner = () => (
  <svg
    className="absolute bottom-0 right-0 w-16 h-16 text-yellow-100 pointer-events-none rounded-br-2xl"
    viewBox="0 0 100 100"
    fill="currentColor"
  >
    <path d="M100 100 L 100 0 Q 100 50 50 50 Q 0 50 0 100 Z" fill="#fef9c3" />
    <path d="M100 100 L 80 100 L 100 80 Z" fill="#fde047" opacity="0.2" />
    <circle cx="100" cy="100" r="40" fill="#fef08a" opacity="0.5" />
    <path d="M60 100 L100 60" stroke="#fde047" strokeWidth="2" opacity="0.3" />
    <path d="M75 100 L100 75" stroke="#fde047" strokeWidth="2" opacity="0.3" />
  </svg>
);

const HandDrawnArrowLeft = () => (
  <svg
    className="absolute top-1/2 -right-16 w-20 h-16 text-yellow-200 transform -translate-y-1/2 pointer-events-none z-0 hidden md:block"
    viewBox="0 0 100 80"
    fill="none"
  >
    <path
      d="M10 40 Q 50 40 80 70"
      stroke="#fde047"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="6 4"
      className="drop-shadow-sm"
    />
    <path
      d="M70 65 L 80 70 L 75 55"
      stroke="#fde047"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HandDrawnArrowRight = () => (
  <svg
    className="absolute top-1/2 -left-16 w-20 h-16 text-yellow-200 transform -translate-y-1/2 scale-x-[-1] pointer-events-none z-0 hidden md:block"
    viewBox="0 0 100 80"
    fill="none"
  >
    <path
      d="M10 40 Q 50 40 80 70"
      stroke="#fde047"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="6 4"
      className="drop-shadow-sm"
    />
    <path
      d="M70 65 L 80 70 L 75 55"
      stroke="#fde047"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- Timeline Data ---

const timelineData = [
  {
    id: 1,
    side: "left",
    age: "Age 2-3",
    year: "1947-1948",
    title: "The Early Explorer",
    text: "My adventurous spirit emerged early. At age two, I walked to local ponds and parks alone and explored a dangerous, abandoned cliff path during an eight-week family holiday in Ireland.",
    location: "Preston, Lancs & County Cork, Ireland",
    icon: <MapPin size={18} className="text-[#b45309]" />, // Orange/Brown tone
    timelineIcon: <MapPin size={20} className="text-yellow-200" />,
  },
  {
    id: 2,
    side: "right",
    age: "Age 3",
    year: "1948",
    title: "World-Famous Explorer Dreams",
    text: "A new tricycle fueled my dream of becoming a world-famous explorer. I peddled over ten miles from home before my parents found me and brought my long-distance travels to an abrupt halt.",
    location: "Outlying villages near Preston",
    icon: <Target size={18} className="text-[#b45309]" />,
    timelineIcon: <Target size={20} className="text-yellow-200" />,
  },
  {
    id: 3,
    side: "left",
    age: "Age 24",
    year: "1969",
    title: "New Challenges in Germany",
    text: "I arrived at 2nd Division Headquarters and Signal Regiment as a lance corporal in a tech troop, ready for my next assignment: maintaining mobile telephone exchanges and secure communications equipment.",
    location: "Bunda, Germany",
    badge: "Top Student of a high-tech course",
    icon: <BookOpen size={18} className="text-[#b45309]" />,
    timelineIcon: <Book size={20} className="text-yellow-200" />,
  },
  {
    id: 4,
    side: "right",
    age: "Age 16",
    year: "1961", // Visually below 1969 in the provided image layout
    title: "The Mindset Transformation",
    text: "A conversation with my sisters about 'Mindset' changed my life's direction. During an interview for a Radio & TV engineer, I set my first-ever goal: 'I am going to be top of my class.'",
    location: "Outlying villages near Preston",
    badge: "Take the 1st Step",
    icon: <Lightbulb size={18} className="text-[#b45309]" />,
    timelineIcon: <Lightbulb size={20} className="text-yellow-200" />,
  },
  {
    id: 5,
    side: "left",
    age: "College Years",
    year: "1961-1965",
    title: "The Learning Revolution",
    text: "I created a simple study plan and discovered that teaching a classmate was the best way to learn. This technique led to both of us consistently achieving top marks year after year.",
    location: "Technical College",
    badge: "Received certificates for top marks annually",
    icon: <Trophy size={18} className="text-[#b45309]" />,
    timelineIcon: <Lightbulb size={20} className="text-yellow-200" />,
  },
];

// --- New Component: The Turning Point Banner ---

const TurningPointBanner = () => {
  return (
    <div className="w-full relative z-30 px-4">
      {/* Container for the glowing card */}
      <div className="max-w-[80%] mx-auto p-8 sm:p-12 md:p-16 rounded-3xl text-center relative overflow-hidden">
        {/* Background Image from Public Folder */}
        <img
          src="/abstract-textured-background.jpg" // Assuming this is the path to your image
          alt="Abstract textured background for banner"
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          // Fallback in case image loading fails or path is incorrect
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextElementSibling.style.display = "block";
          }}
        />

        {/* Dark Overlay and Golden Glow Shadow (for pixel perfect match and text contrast) */}
        <div
          className="absolute inset-0 w-full h-full bg-black/70 rounded-3xl"
          style={{
            boxShadow:
              "0 0 50px rgba(255, 215, 0, 0.4), inset 0 0 20px rgba(0, 0, 0, 0.9)",
          }}
        ></div>

        {/* Internal Light Source Effect - Mimics the top glow in the image */}
        {/* We place this on top of the overlay */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-24 bg-white/10 rounded-full blur-3xl pointer-events-none z-10"></div>

        {/* Title (z-20 to ensure it's above all layers) */}
        <h2 className="font-playfair italic font-bold text-4xl sm:text-5xl md:text-6xl text-[#ffd700] mb-8 drop-shadow-lg relative z-20">
          The Turning Point
        </h2>

        {/* Quote (z-20) */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl font-inter text-white/90 leading-relaxed mb-10 relative z-20">
          "For years, I believed I was 'too stupid to learn' because a teacher
          said so. The moment I chose to believe in my own potential instead, my
          entire life changed direction."
        </p>

        {/* Button (z-20) */}
        <button className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-slate-600 to-slate-700 text-teal-300 font-inter text-base tracking-wide border border-teal-300/50 hover:from-slate-700 hover:to-slate-800 transition-all duration-300 ease-out shadow-xl hover:shadow-teal-400/30 z-20">
          Unlock Your Potential{" "}
          <ChevronRight
            size={18}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#1e5f99] via-[#0c4a85] to-[#053366] relative overflow-x-hidden flex flex-col items-center font-sans selection:bg-yellow-400 selection:text-blue-900">
      <Helmet>
        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://allanlroberts.com/journey"
        />

        {/* Title */}
        <title>Allan Roberts – Journey | Life Story & Turning Points</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Explore Allan Roberts' inspiring life journey — milestones, turning points, achievements, and experiences that shaped his mission as a motivational speaker and storyteller."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Allan Roberts – Journey" />
        <meta
          property="og:description"
          content="Discover the powerful life moments and stories that shaped Allan Roberts' path as a speaker, mentor, and storyteller."
        />
        <meta
          property="og:image"
          content="https://allanlroberts.com/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://allanlroberts.com/journey"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Allan Roberts – Journey" />
        <meta
          name="twitter:description"
          content="Discover the real-life stories, experiences, and hardships that shaped Allan Roberts into the motivational figure he is today."
        />
        <meta
          name="twitter:image"
          content="https://allanlroberts.com/og-image.jpg"
        />

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
      "item": "https://allanlroberts.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Journey",
      "item": "https://allanlroberts.com/journey"
    }
  ]
}
`}
        </script>
      </Helmet>

      {/* Inject Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&family=Lora:ital,wght@0,400;0,600;1,400;1,600&family=Cinzel:wght@700&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-lora { font-family: 'Lora', serif; }
        .font-copperplate { font-family: 'Copperplate Gothic Bold', 'Copperplate Gothic', 'Copperplate', 'Cinzel', serif; }
      `}</style>

      {/* --- HERO SECTION --- */}
      <div
        id="topJourney"
        className="w-full flex flex-col items-center justify-center text-center px-4 py-12 relative z-10"
      >
        {/* Top Badge */}
        <div className="mb-10 animate-fade-in-down">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2a6ca8] bg-opacity-40 border border-[#4a8bc4] border-opacity-30 backdrop-blur-sm shadow-lg">
            <span className="text-xs font-medium tracking-wide text-white font-inter uppercase opacity-90">
              Author & Storyteller
            </span>
            <BookOpen size={14} className="text-yellow-400" />
          </div>
        </div>

        {/* Main Headline */}
        <div className="mb-8 max-w-4xl mx-auto relative z-10">
          <h1 className="leading-tight">
            {/* CORRECTED: "Stories That Shape" - Removed the nested <span> for "the" and simplified classes */}
            <div className="block text-5xl md:text-7xl lg:text-8xl font-playfair italic text-white mb-2 tracking-tight">
              Stories That Shape{" "}
              <span className="text-3xl align-text-center md:text-5xl not-italic font-playfair opacity-80 ml-1">
                the
              </span>
            </div>
            {/* CORRECTED: "Human Experience" - Now uses the original style for "Human Experience" */}
            <div className="block text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-[#ffd700] tracking-tight drop-shadow-sm">
              Human Experience
            </div>
          </h1>
        </div>

        {/* Subtext */}
        <div className="max-w-4xl mx-auto mb-14 space-y-2 text-base md:text-lg lg:text-xl text-blue-50 font-inter font-light leading-relaxed opacity-90">
          <p>
            My writing explores{" "}
            <span className="text-[#ffd700] italic font-lora font-medium">
              life's turning points
            </span>
            —moments that{" "}
            <span className="text-[#ffd700] italic font-lora font-medium">
              challenge, shape
            </span>
            , and uplift us.
          </p>
          <p>
            Let these stories guide, inspire, and help you{" "}
            <span className="text-[#ffd700] italic font-lora font-medium">
              see the world with new depth.
            </span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-10 relative z-20">
          <a href="https://www.linkedin.com/in/allan-roberts-183a49104?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <button className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-transparent border border-blue-300 border-opacity-40 text-blue-50 font-inter text-sm tracking-wide hover:bg-blue-500 hover:bg-opacity-20 transition-all duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
              Lets Connect
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>{" "}
          </a>
        </div>
      </div>

      {/* --- TIMELINE SECTION --- */}
      <div className="w-full max-w-7xl mx-auto px-4 pb-24 relative z-10">
        {/* Journey Header */}
        <div className="w-full relative flex flex-col justify-center items-center mb-16">
          <div className="text-[15vw] md:text-[10rem] leading-none font-copperplate font-bold text-white opacity-[0.07] tracking-[0.2em] select-none pointer-events-none w-full text-center whitespace-nowrap blur-[1px]">
            JOURNEY
          </div>
          {/* Bottom Label positioned over the large text */}
          <p className="relative z-10 text-blue-100 font-inter text-lg md:text-2xl tracking-wide font-light mt-8">
            Moments that shaped the man, the writer, and the storyteller.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full flex flex-col items-center">
          {/* Central Line & Dashed Overlay */}
          <div className="absolute top-0 bottom-0 w-6 bg-gradient-to-b from-white/10 via-white/20 to-white/5 rounded-full hidden md:block backdrop-blur-sm border border-white/10"></div>
          <div className="absolute top-0 bottom-0 w-px border-l-2 border-dashed border-yellow-100/30 hidden md:block"></div>

          {/* Timeline Items Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-16 gap-x-16 relative">
            {timelineData.map((item, index) => (
              <React.Fragment key={item.id}>
                {/* Spacer for Empty Column (to create zig-zag) */}
                {item.side === "right" && <div className="hidden md:block" />}

                {/* Card Container */}
                <div
                  className={`relative ${
                    item.side === "left" ? "md:text-right" : "md:text-left"
                  } flex flex-col ${
                    item.side === "left" ? "md:items-end" : "md:items-start"
                  } items-center`}
                >
                  {/* Central Icon Marker (Absolute positioned on the line) */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full border-2 border-yellow-200/50 bg-[#0c4a85] z-10 shadow-[0_0_15px_rgba(253,224,71,0.3)]
                    ${
                      item.side === "left"
                        ? "-right-[4.5rem]"
                        : "-left-[4.5rem]"
                    }`}
                  >
                    {item.timelineIcon}
                  </div>

                  {/* Arrow Connecting Card to Line */}
                  {item.side === "left" ? (
                    <HandDrawnArrowLeft />
                  ) : (
                    <HandDrawnArrowRight />
                  )}

                  {/* The Card Itself */}
                  <div className="relative w-full max-w-lg bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl transform transition-transform hover:-translate-y-1 duration-300 group">
                    {/* Red Pin */}
                    <RedPin />

                    {/* Header: Badge & Year */}
                    <div className="flex justify-between items-center mb-4 pt-2">
                      <span className="inline-block bg-yellow-100 text-[#b45309] px-3 py-1 rounded-md text-xs font-bold font-inter tracking-wide">
                        {item.age}
                      </span>
                      <span className="text-gray-400 font-inter font-medium text-sm">
                        {item.year}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bold text-[#ca8a04] font-inter mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 font-inter text-sm md:text-base leading-relaxed mb-6 text-left">
                      {item.text}
                    </p>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-slate-400 text-xs md:text-sm font-medium font-inter mb-2">
                      {item.icon}
                      <span>{item.location}</span>
                    </div>

                    {/* Bottom Highlight Badge (Conditional) */}
                    {item.badge && (
                      <div className="mt-4 inline-flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-lg border border-yellow-100 w-full relative z-10">
                        <Trophy size={16} className="text-yellow-600" />
                        <span className="text-[#b45309] font-bold text-xs md:text-sm font-inter">
                          {item.badge}
                        </span>
                      </div>
                    )}

                    {/* Decorative Sunburst Corner */}
                    <SunburstCorner />
                  </div>
                </div>

                {/* Spacer for Empty Column (Left side items need right spacer) */}
                {item.side === "left" && <div className="hidden md:block" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Background Grid Pattern for Bottom Area */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "linear-gradient(to bottom, transparent 15%, black 30%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 15%, black 30%, black 85%, transparent 100%)",
        }}
      ></div>

      {/* Ambient light effect for bottom left */}
      <div className="fixed bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 pointer-events-none"></div>

      {/* Ambient light effect for top right */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-[120px] opacity-10 pointer-events-none"></div>
      {/* --- TURNING POINT BANNER --- */}
      <TurningPointBanner />
      <Footer />
    </div>
  );
};

export default App;
