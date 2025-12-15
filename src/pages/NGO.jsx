import React from "react";
import { Helmet } from "react-helmet";
import {
  ChevronRight,
  Heart,
  HeartHandshake,
  DollarSign,
  HandCoins,
  User,
  Hand,
  Smile,
} from "lucide-react";
import Footer from "../components/footer";

// --- Reusable Button Style (Glossy Blue) ---
// The button style features a light blue/teal background, white text, and a soft, glossy outline/shadow.
const ButtonStyle = ({ children, className = "", onClick }) => {
  const baseClasses = `
    group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full 
    text-white font-inter text-base tracking-wide font-medium cursor-pointer 
    transition-all duration-300 ease-out whitespace-nowrap 
    
    // Custom Blue Background & Soft Shadow/Outline
    bg-[#3679ac] border border-[#5d94bc] 
    shadow-[0_0_15px_rgba(54,121,172,0.8),_inset_0_0_10px_rgba(255,255,255,0.4)]
    
    // Hover Effects
    hover:bg-[#438bc8] 
    hover:shadow-[0_0_20px_rgba(67,139,200,1),_inset_0_0_15px_rgba(255,255,255,0.5)] 
    hover:scale-[1.03]
    
    focus:outline-none focus:ring-4 focus:ring-white/50
  `;
  return (
    <button className={`${baseClasses} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

// --- The Dedicated Hero Page Component ---
const AllanHeroPage = () => {
  return (
    <div id="topNGO" className="w-full min-h-screen flex items-center bg-gradient-to-r from-[#1e5f99] via-[#0c4a85] to-[#053366] text-white py-16 px-4 relative overflow-hidden font-sans selection:bg-yellow-400 selection:text-blue-900">
      {/* Inject Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-20">
        {/* Left Side: Text Content */}
        <div className="flex flex-col justify-center order-2 md:order-1 text-center md:text-left px-4">
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2a6ca8] bg-opacity-40 border border-[#4a8bc4] border-opacity-30 backdrop-blur-sm shadow-lg text-sm font-medium font-inter uppercase tracking-wide">
              <Heart size={14} className="text-yellow-400" /> Healing Hearts,
              Healing Lives
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-tight mb-6">
            Empowering communities{" "}
            <span className="block md:inline text-3xl sm:text-4xl align-top not-italic font-playfair opacity-80">
              that
            </span>
            <span className="block text-[#ffd700] drop-shadow-sm">
              Transforming future
            </span>
          </h1>

          {/* Body Text */}
          <p className="text-base sm:text-lg lg:text-xl font-inter font-light leading-relaxed mb-8 opacity-90 max-w-xl mx-auto md:mx-0">
            Allan survived homelessness, blindness, and heartbreak. Now he
            mentors, speaks, and writes to give vulnerable children a chance at
            success.{" "}
            <span className="font-bold text-[#ffd700]">
              Join him in raising £1,000,000 for tomorrow's leaders.
            </span>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            {/* Primary Button (Donate Now) */}
            <a href="#Donation">
              <ButtonStyle>
                Donate Now{" "}
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </ButtonStyle>
            </a>

            {/* Secondary Button (Read Allan's Story) - Adjusted to use the primary style for consistency */}
            <a href="/journey">
              <ButtonStyle className="bg-transparent border-white/50 hover:bg-white/10 shadow-none hover:shadow-none hover:scale-[1.03]">
                Read Allan's Story{" "}
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </ButtonStyle></a>
          </div>
        </div>

        {/* Right Side: Images */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-full min-h-[300px] sm:min-h-[400px] md:min-h-[450px]">
          {/* Main Image Container */}
          <div className="relative w-[120vw] max-w-[420px] h-[320px] sm:w-[500px] md:w-[500px] md:h-[400px] bg-white rounded-[3rem] shadow-xl overflow-hidden flex items-center justify-center ">
            <img
              src="/allan-roberts-whitebg.jpg" // Placeholder for the man's image
              alt="Allan, a distinguished older man with glasses"
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
            {/* Subtle blue curve graphic */}
            <svg
              className="absolute -bottom-10 -right-10 w-32 h-32 text-blue-300 opacity-30"
              viewBox="0 0 100 100"
            >
              <path
                d="M0 100 Q 50 100 100 50 L 100 100 Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Smaller Image Container (absolute positioned) - Adjusted for better mobile positioning */}
          {/* <div className="absolute -bottom-8 left-1/4 sm:-bottom-12 sm:left-auto md:left-20 w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] bg-white rounded-3xl shadow-xl overflow-hidden -rotate-3 hover:rotate-0 transition-transform duration-300">
            <img
              src="/hands-holding.jpg" // Placeholder for the hands image
              alt="Hands working on a project"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div> */}

          {/* Swirl/Line decorative elements - Hidden on small mobile to reduce clutter */}
          <div className="absolute -top-16 right-0 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl animate-pulse-slow hidden sm:block"></div>
          <div className="absolute top-1/4 -right-10 w-24 h-24 border-2 border-blue-300 rounded-full animate-ping-slow opacity-20 hidden md:block"></div>
          <div className="absolute bottom-1/4 right-1/2 w-48 h-48 border-2 border-yellow-300 rounded-full animate-spin-slow opacity-10 hidden md:block"></div>

          {/* Custom SVG line - Hidden on mobile */}
          <svg
            className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 text-blue-300 opacity-40 hidden md:block"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="5 5"
          >
            <path d="M10 50 Q 30 20 50 50 Q 70 80 90 50" />
          </svg>
        </div>
      </div>

      {/* Background Grid and Light Effects */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      ></div>

      <div className="fixed bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-[120px] opacity-10 pointer-events-none"></div>
    </div>
  );
};

// --- Component 2: Why Allan Started This Mission ---
const AllanMissionSection = () => {
  // Styles based on the uploaded image of the three cards
  const cardStyles =
    "bg-white p-6 text-center flex flex-col items-center justify-center space-y-2 rounded-xl shadow-lg border-2 border-[#ffdb58] transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer";
  const titleStyles = "font-playfair font-bold text-2xl text-[#113a69]"; // Dark Blue title, Playfair font
  const descriptionStyles = "text-gray-700 text-sm font-inter"; // Gray description, Inter font

  return (
    <div className="w-full relative z-20 font-inter">
      {/* Top Banner Area (White Background) */}
      <div className="bg-white pt-16 pb-20">
        {" "}
        {/* Increased bottom padding to create separation */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-30">
          {/* Card 1: Medical Aid */}
          <div className={cardStyles}>
            <h3 className={titleStyles}>Medical Aid</h3>
            <p className={descriptionStyles}>Essential help for health.</p>
          </div>

          {/* Card 2: Trust Funds */}
          <div className={cardStyles}>
            <h3 className={titleStyles}>Trust Funds</h3>
            <p className={descriptionStyles}>Support those in need.</p>
          </div>

          {/* Card 3: Funds Raised */}
          <div className={cardStyles}>
            <h3 className={titleStyles}>Funds Raised</h3>
            <p className={descriptionStyles}>Collect funds for causes.</p>
          </div>
        </div>
      </div>

      {/* Mission Statement Content (Dark Blue Background) */}
      <div className="bg-[#113a69] text-white py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column: Image and Main Paragraph */}
            <div className="flex flex-col gap-8 md:gap-12">
              {/* Image of person with raised fist */}
              <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
                <img
                  src="/Person-with-raised-fist-in-a-crowd.jpg" // Placeholder for the image
                  alt="Person with raised fist in a crowd"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Main mission paragraph */}
              <p className="text-gray-200 text-base md:text-lg leading-relaxed text-left">
                Allan's journey wasn't one of privilege, but of profound
                resilience. Facing homelessness as a teen, a diagnosis that
                stole his sight, and the loss of loved ones, he discovered an
                unshakeable strength within. He learned that hardship can be a
                crucible for character, not a life sentence.{" "}
                <span className="text-yellow-400 font-bold">
                  Allan channels his 80 years of experience into mentoring,
                  providing resources, and building communities where young
                  people can find their own strength and rewrite their stories.
                </span>{" "}
                His sight, and the loss of loved ones, he discovered an
                unshakeable strength within. He learned that hardship can be a
                crucible for character, not a life sentence.
              </p>
            </div>

            {/* Right Column: Headline and Quote/Image */}
            <div className="flex flex-col gap-8 md:gap-12 pt-0 md:pt-2">
              {/* Headline */}
              <h2 className="font-playfair text-6xl text-white leading-tight">
                Why Allan Started This Mission
              </h2>

              {/* Quote/Image Section */}
              <div className="flex flex-col gap-6">
                <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                  Allan's journey wasn't one of privilege, but of profound
                  resilience. Facing homelessness as a teen, a diagnosis that
                  stole his sight, and the loss of loved ones, he discovered an
                  unshakeable strength within. He learned that hardship can be a
                  crucible for character, not a life sentence.
                </p>
                {/* Image of hands holding coins */}
                <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
                  <img
                    src="/hand-holding-coins-with-makeachange-message.jpg" // Placeholder for the image
                    alt="Hands holding coins with 'Make a Change' message"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Component 3: Contribution Section (How to Help & Impact) ---
const AllanContributionSection = () => {
  return (
    <div className="w-full font-inter">
      {/* Top Section: How to Start Help (Yellow Background) */}
      <div className="bg-[#ffd700] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-playfair font-bold text-4xl text-[#113a69] mb-4">
            How To Start Help
          </h2>
          <p className="text-[#113a69] max-w-3xl mx-auto mb-12 text-lg">
            In carrying out their duties, charitable foundations provide a
            variety of social services such as education, food, medicine,
            housing, and others
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1: Register Yourself */}
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 text-[#113a69]">
                <svg
                  width="76"
                  height="50"
                  viewBox="0 0 76 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.5137 34.368C38.8679 32.1398 41.4156 28.891 42.7798 25.1023C44.1441 21.3136 44.2523 17.1863 43.0886 13.3313C41.9248 9.47626 39.5509 6.09833 36.3181 3.69737C33.0854 1.29641 29.1655 0 25.1387 0C21.1118 0 17.192 1.29641 13.9592 3.69737C10.7264 6.09833 8.35248 9.47626 7.18873 13.3313C6.02498 17.1863 6.13324 21.3136 7.49748 25.1023C8.86172 28.891 11.4095 32.1398 14.7637 34.368C9.0417 36.4721 4.10141 40.2782 0.607411 45.2742C0.379681 45.5381 0.209641 45.8467 0.108208 46.1801C0.00677419 46.5136 -0.0238115 46.8646 0.0184142 47.2106C0.06064 47.5565 0.174744 47.8899 0.353401 48.1891C0.532058 48.4884 0.771321 48.747 1.05583 48.9484C1.34034 49.1497 1.6638 49.2893 2.00546 49.3583C2.34712 49.4272 2.69942 49.424 3.03974 49.3487C3.38007 49.2735 3.7009 49.1279 3.98163 48.9213C4.26237 48.7148 4.49681 48.4518 4.66991 48.1492C6.98013 44.8673 10.0457 42.1889 13.608 40.3401C17.1704 38.4912 21.1251 37.5261 25.1387 37.5261C29.1522 37.5261 33.1069 38.4912 36.6693 40.3401C40.2316 42.1889 43.2972 44.8673 45.6074 48.1492C45.7805 48.4518 46.0149 48.7148 46.2957 48.9213C46.5764 49.1279 46.8973 49.2735 47.2376 49.3487C47.5779 49.424 47.9302 49.4272 48.2719 49.3583C48.6135 49.2893 48.937 49.1497 49.2215 48.9484C49.506 48.747 49.7453 48.4884 49.9239 48.1891C50.1026 47.8899 50.2167 47.5565 50.2589 47.2106C50.3011 46.8646 50.2705 46.5136 50.1691 46.1801C50.0677 45.8467 49.8976 45.5381 49.6699 45.2742C46.1759 40.2782 41.2356 36.4721 35.5137 34.368ZM11.3887 18.7742C11.3887 16.0548 12.1951 13.3963 13.706 11.1352C15.2168 8.87398 17.3643 7.11161 19.8768 6.07091C22.3892 5.0302 25.1539 4.75791 27.8212 5.28845C30.4884 5.819 32.9384 7.12856 34.8614 9.05153C36.7844 10.9745 38.0939 13.4245 38.6245 16.0918C39.155 18.759 38.8827 21.5237 37.842 24.0361C36.8013 26.5486 35.0389 28.6961 32.7778 30.207C30.5166 31.7178 27.8582 32.5242 25.1387 32.5242C21.4919 32.5242 17.9946 31.0756 15.4159 28.497C12.8373 25.9183 11.3887 22.421 11.3887 18.7742ZM74.5449 48.743C74.2791 48.9343 73.9778 49.0709 73.6587 49.1446C73.3396 49.2184 73.009 49.2279 72.6862 49.1727C72.3633 49.1174 72.0547 48.9985 71.7783 48.8228C71.5019 48.6471 71.2632 48.4181 71.0762 48.1492C68.7643 44.8688 65.6984 42.1915 62.1365 40.3425C58.5745 38.4936 54.6207 37.5271 50.6074 37.5242C49.9444 37.5242 49.3085 37.2609 48.8396 36.792C48.3708 36.3232 48.1074 35.6873 48.1074 35.0242C48.1074 34.3612 48.3708 33.7253 48.8396 33.2565C49.3085 32.7876 49.9444 32.5242 50.6074 32.5242C54.2541 32.5242 57.7515 31.0756 60.3301 28.497C62.9088 25.9183 64.3574 22.421 64.3574 18.7742C64.3574 15.1275 62.9088 11.6302 60.3301 9.05153C57.7515 6.4729 54.2541 5.02425 50.6074 5.02425C49.3516 5.0326 48.102 5.20062 46.8887 5.52425C46.5727 5.61488 46.2419 5.6423 45.9153 5.60494C45.5887 5.56758 45.2727 5.46618 44.9853 5.30653C44.6979 5.14688 44.4449 4.93213 44.2406 4.67456C44.0364 4.417 43.8849 4.12167 43.7949 3.8055C43.6204 3.1675 43.7025 2.48653 44.0237 1.90832C44.345 1.33012 44.8798 0.900622 45.5137 0.711749C47.1749 0.264448 48.887 0.0333734 50.6074 0.0242484C54.6384 0.00973993 58.5664 1.29687 61.8071 3.69419C65.0478 6.0915 67.428 9.47089 68.5937 13.3297C69.7595 17.1885 69.6484 21.3205 68.277 25.1111C66.9056 28.9017 64.3472 32.1483 60.9824 34.368C66.7081 36.4807 71.656 40.2843 75.1699 45.2742C75.545 45.8178 75.6898 46.4876 75.5727 47.1375C75.4556 47.7874 75.0861 48.3646 74.5449 48.743Z"
                    fill="#14367B"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-[#113a69]">
                Register Yourself
              </h3>
              <p className="text-gray-700 max-w-xs">
                Sign up to join and be part of the good people who love to share
              </p>
            </div>

            {/* Step 2: Select Donate */}
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 text-[#113a69]">
                <svg
                  width="72"
                  height="77"
                  viewBox="0 0 72 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M56.8064 20.4583C56.272 19.5347 55.5609 18.7254 54.7137 18.0766C53.8665 17.4278 52.8998 16.9522 51.8689 16.677C50.8404 16.3953 49.7659 16.3221 48.7087 16.4616C47.6515 16.6011 46.6328 16.9506 45.7126 17.4895C44.7746 18.0138 43.9553 18.7267 43.3064 19.5833L38.9314 12.0208C38.4 11.0953 37.6916 10.2835 36.8465 9.63179C36.0014 8.98011 35.0361 8.5013 34.0059 8.22271C32.9757 7.94412 31.9008 7.87122 30.8424 8.00815C29.784 8.14509 28.763 8.48919 27.8376 9.02079C26.802 9.62777 25.9072 10.448 25.2126 11.427C24.2375 10.5067 23.0435 9.85054 21.7439 9.5208C20.7154 9.23908 19.6409 9.16584 18.5837 9.30537C17.5265 9.4449 16.5078 9.79439 15.5876 10.3333C14.664 10.8677 13.8547 11.5788 13.2059 12.4259C12.5571 13.2731 12.0815 14.2398 11.8064 15.2708C11.49 16.4106 11.4366 17.6073 11.6501 18.7708C10.8744 18.9609 10.128 19.2553 9.43136 19.6458C7.56534 20.7301 6.20512 22.5098 5.64867 24.595C5.09223 26.6802 5.38491 28.901 6.46261 30.7708L7.08761 31.8333C6.01539 31.9577 4.982 32.3093 4.05636 32.8645C2.19247 33.9428 0.832853 35.7169 0.2762 37.7971C-0.280454 39.8772 0.0113887 42.0932 1.08761 43.9583L12.6501 63.9895C15.9703 69.7278 21.4313 73.9145 27.8347 75.6311C34.2382 77.3477 41.0611 76.4539 46.8064 73.1458C51.8467 70.2605 55.7085 65.6906 57.7126 60.2395C61.7755 56.3754 64.4195 51.2562 65.2188 45.7064C66.0181 40.1567 64.9262 34.4994 62.1189 29.6458L56.8064 20.4583ZM30.3376 13.3645C30.6943 13.1579 31.0883 13.0239 31.497 12.9702C31.9057 12.9165 32.3209 12.9442 32.7189 13.0517C33.1168 13.1591 33.4896 13.3443 33.8156 13.5964C34.1417 13.8486 34.4147 14.1627 34.6189 14.5208L41.2751 26.052C40.6761 26.2374 40.0996 26.489 39.5564 26.802C38.6257 27.3368 37.8084 28.048 37.1501 28.8958L32.7751 21.3333C32.0138 20.0016 30.8856 18.9168 29.5251 18.2083L29.1814 17.6458C28.7724 16.9235 28.6645 16.0692 28.8809 15.2679C29.0973 14.4666 29.6207 13.7828 30.3376 13.3645ZM18.0876 14.6458C18.8099 14.2369 19.6642 14.1289 20.4655 14.3453C21.2668 14.5618 21.9506 15.0851 22.3689 15.802L23.4001 17.6145C22.8033 17.8057 22.2274 18.057 21.6814 18.3645C20.6328 18.9539 19.7345 19.7773 19.0564 20.7708C18.5228 20.2743 17.9234 19.8537 17.2751 19.5208L16.9626 18.927C16.7547 18.5722 16.6189 18.1799 16.5629 17.7725C16.5069 17.3651 16.5319 16.9506 16.6364 16.5529C16.7409 16.1552 16.9229 15.782 17.1719 15.4547C17.421 15.1274 17.7321 14.8526 18.0876 14.6458ZM44.3064 68.802C39.7144 71.4523 34.2579 72.1708 29.1364 70.7996C24.0148 69.4284 19.6473 66.0797 16.9939 61.4895L5.43136 41.4583C5.12019 40.924 4.97449 40.3095 5.0127 39.6924C5.05091 39.0753 5.2713 38.4834 5.646 37.9916C6.0207 37.4998 6.53286 37.1302 7.11768 36.9296C7.70249 36.729 8.33368 36.7063 8.93136 36.8645C9.73278 37.0892 10.416 37.6157 10.8376 38.3333L18.3376 51.3333C18.5609 51.7079 18.8762 52.0194 19.2535 52.2381C19.6309 52.4568 20.0578 52.5757 20.4939 52.5833C20.932 52.5818 21.362 52.4651 21.7408 52.2451C22.1196 52.025 22.4339 51.7093 22.6523 51.3295C22.8707 50.9497 22.9854 50.5192 22.9851 50.0811C22.9847 49.643 22.8692 49.2127 22.6501 48.8333L10.7751 28.2708C10.3607 27.5497 10.2497 26.6936 10.4666 25.8907C10.6834 25.0878 11.2103 24.4039 11.9314 23.9895C12.6524 23.5751 13.5086 23.4642 14.3115 23.681C15.1143 23.8978 15.7982 24.4247 16.2126 25.1458L28.0876 45.7083C28.2367 46.0191 28.4485 46.2958 28.7096 46.5209C28.9708 46.7459 29.2756 46.9146 29.6051 47.0161C29.9345 47.1177 30.2814 47.1501 30.624 47.1111C30.9665 47.0722 31.2973 46.9629 31.5956 46.79C31.8938 46.6171 32.1531 46.3844 32.3571 46.1064C32.5611 45.8285 32.7054 45.5114 32.781 45.175C32.8565 44.8387 32.8617 44.4903 32.7961 44.1519C32.7306 43.8134 32.5958 43.4921 32.4001 43.2083L23.0251 26.9583C22.6162 26.236 22.5083 25.3817 22.7247 24.5804C22.9411 23.7791 23.4644 23.0953 24.1814 22.677C24.8989 22.2696 25.7485 22.1625 26.5447 22.3792C27.3409 22.5958 28.0191 23.1185 28.4314 23.8333L41.5564 46.5833C41.7824 46.9624 42.1026 47.2767 42.4859 47.4957C42.8691 47.7147 43.3025 47.831 43.7439 47.8333C44.1823 47.8224 44.6115 47.7044 44.9939 47.4895C45.5642 47.1566 45.9796 46.6115 46.1494 45.9733C46.3192 45.3351 46.2296 44.6556 45.9001 44.0833L40.9001 35.3958C40.4897 34.6867 40.3773 33.8439 40.5876 33.052C40.6876 32.6501 40.8697 32.2733 41.1225 31.9452C41.3753 31.6171 41.6932 31.3449 42.0564 31.1458C42.4041 30.9342 42.7919 30.7971 43.1954 30.7433C43.5989 30.6895 44.0091 30.7202 44.4001 30.8333C44.7979 30.9331 45.1716 31.1117 45.4991 31.3586C45.8265 31.6056 46.1011 31.9158 46.3064 32.2708L51.6189 41.4895C52.9353 43.7622 53.7905 46.2723 54.1354 48.876C54.4803 51.4797 54.3082 54.1258 53.629 56.6629C52.9497 59.1999 51.7766 61.5781 50.1769 63.6611C48.5772 65.7442 46.5823 67.4911 44.3064 68.802ZM59.1814 49.1145C58.857 45.5457 57.7586 42.0905 55.9626 38.9895L50.6501 29.7708C49.8793 28.4465 48.7536 27.3641 47.4001 26.6458L47.0564 26.0833C46.6441 25.3635 46.5319 24.5103 46.7439 23.7083C46.9686 22.9069 47.495 22.2237 48.2126 21.802C48.5669 21.5961 48.9585 21.4627 49.3648 21.4094C49.7711 21.3561 50.184 21.384 50.5794 21.4916C50.9748 21.5992 51.3448 21.7842 51.6681 22.036C51.9914 22.2878 52.2615 22.6013 52.4626 22.9583L57.7751 32.1458C59.2416 34.6973 60.1279 37.5405 60.3709 40.4733C60.614 43.4061 60.2078 46.3565 59.1814 49.1145ZM48.3689 6.7083L49.6501 1.86455C49.7342 1.5465 49.8802 1.24814 50.0796 0.986499C50.2791 0.724858 50.5281 0.50506 50.8125 0.339656C51.0968 0.174252 51.411 0.0664796 51.737 0.0224932C52.0631 -0.0214932 52.3946 -0.000832537 52.7126 0.0832955C53.0307 0.167424 53.329 0.313372 53.5907 0.512806C53.8523 0.712241 54.0721 0.961257 54.2375 1.24564C54.4029 1.53002 54.5107 1.84419 54.5547 2.17022C54.5987 2.49625 54.578 2.82775 54.4939 3.1458L53.1814 7.98955C53.0424 8.52067 52.7303 8.99032 52.2945 9.32423C51.8588 9.65815 51.3241 9.83728 50.7751 9.8333L50.1189 9.7708C49.4816 9.59538 48.9397 9.1747 48.6117 8.60078C48.2837 8.02686 48.1964 7.34642 48.3689 6.7083ZM56.5876 9.5833L59.4626 5.48955C59.8468 4.94626 60.4294 4.57608 61.0844 4.45912C61.7394 4.34215 62.4142 4.4878 62.9626 4.86455C63.2325 5.05449 63.4621 5.29599 63.6382 5.57512C63.8143 5.85425 63.9334 6.16548 63.9886 6.49086C64.0438 6.81624 64.034 7.14933 63.9598 7.47092C63.8856 7.79251 63.7485 8.09622 63.5564 8.36455L60.6814 12.4583C60.4943 12.7272 60.2556 12.9561 59.9792 13.1318C59.7028 13.3075 59.3942 13.4265 59.0714 13.4817C58.7485 13.537 58.4179 13.5275 58.0988 13.4537C57.7797 13.3799 57.4784 13.2434 57.2126 13.052C56.6714 12.6736 56.3019 12.0965 56.1848 11.4465C56.0677 10.7966 56.2125 10.1268 56.5876 9.5833ZM70.3064 16.3333L66.2126 19.2083C65.7848 19.4878 65.2861 19.6396 64.7751 19.6458C64.2476 19.6416 63.7349 19.4707 63.3104 19.1574C62.886 18.8442 62.5715 18.4047 62.4119 17.9018C62.2524 17.399 62.2561 16.8586 62.4223 16.3579C62.5886 15.8573 62.909 15.4221 63.3376 15.1145L67.4314 12.2395C67.6997 12.0474 68.0034 11.9103 68.325 11.8361C68.6466 11.7619 68.9797 11.7521 69.305 11.8073C69.6304 11.8625 69.9417 11.9816 70.2208 12.1577C70.4999 12.3338 70.7414 12.5634 70.9314 12.8333C71.3081 13.3817 71.4538 14.0565 71.3368 14.7115C71.2198 15.3665 70.8496 15.9491 70.3064 16.3333Z"
                    fill="#14367B"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-[#113a69]">
                Select Donate
              </h3>
              <p className="text-gray-700 max-w-xs">
                There are many things you can choose to share goodness with
              </p>
            </div>

            {/* Step 3: Share Happiness */}
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 text-[#113a69]">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40 7.5C33.5721 7.5 27.2886 9.40609 21.944 12.9772C16.5994 16.5484 12.4338 21.6242 9.97393 27.5628C7.51408 33.5014 6.87047 40.0361 8.12449 46.3404C9.37851 52.6448 12.4738 58.4358 17.019 62.981C21.5643 67.5262 27.3552 70.6215 33.6596 71.8755C39.964 73.1295 46.4986 72.4859 52.4372 70.0261C58.3758 67.5662 63.4516 63.4006 67.0228 58.056C70.5939 52.7114 72.5 46.4279 72.5 40C72.4835 31.3855 69.0541 23.1286 62.9627 17.0373C56.8714 10.9459 48.6145 7.51652 40 7.5ZM40 67.5C34.561 67.5 29.2442 65.8872 24.7218 62.8654C20.1995 59.8437 16.6747 55.5488 14.5933 50.5238C12.5119 45.4988 11.9673 39.9695 13.0284 34.635C14.0895 29.3005 16.7086 24.4005 20.5546 20.5546C24.4005 16.7086 29.3006 14.0895 34.635 13.0284C39.9695 11.9673 45.4988 12.5119 50.5238 14.5933C55.5488 16.6747 59.8437 20.1995 62.8654 24.7218C65.8872 29.2442 67.5 34.561 67.5 40C67.4917 47.2909 64.5918 54.2808 59.4363 59.4363C54.2809 64.5918 47.2909 67.4917 40 67.5ZM25 33.75C25 33.0083 25.2199 32.2833 25.632 31.6666C26.0441 31.0499 26.6297 30.5693 27.315 30.2855C28.0002 30.0016 28.7542 29.9274 29.4816 30.0721C30.209 30.2167 30.8772 30.5739 31.4017 31.0983C31.9261 31.6228 32.2833 32.291 32.428 33.0184C32.5727 33.7458 32.4984 34.4998 32.2146 35.1851C31.9307 35.8703 31.4501 36.456 30.8334 36.868C30.2167 37.2801 29.4917 37.5 28.75 37.5C27.7555 37.5 26.8016 37.1049 26.0984 36.4017C25.3951 35.6984 25 34.7446 25 33.75ZM47.5 33.75C47.5 33.0083 47.7199 32.2833 48.132 31.6666C48.5441 31.0499 49.1297 30.5693 49.815 30.2855C50.5002 30.0016 51.2542 29.9274 51.9816 30.0721C52.709 30.2167 53.3772 30.5739 53.9017 31.0983C54.4261 31.6228 54.7833 32.291 54.928 33.0184C55.0727 33.7458 54.9984 34.4998 54.7146 35.1851C54.4307 35.8703 53.9501 36.456 53.3334 36.868C52.7167 37.2801 51.9917 37.5 51.25 37.5C50.2555 37.5 49.3016 37.1049 48.5984 36.4017C47.8951 35.6984 47.5 34.7446 47.5 33.75ZM55.1563 48.75C53.6204 51.4107 51.4112 53.6202 48.7507 55.1564C46.0902 56.6926 43.0722 57.5014 40 57.5014C36.9278 57.5014 33.9098 56.6926 31.2493 55.1564C28.5888 53.6202 26.3796 51.4107 24.8438 48.75C24.6481 48.4661 24.5133 48.1449 24.4477 47.8064C24.3822 47.468 24.3874 47.1196 24.4629 46.7832C24.5385 46.4469 24.6828 46.1298 24.8868 45.8519C25.0908 45.5739 25.3501 45.3412 25.6483 45.1683C25.9466 44.9954 26.2774 44.8861 26.6199 44.8471C26.9625 44.8082 27.3093 44.8406 27.6388 44.9422C27.9682 45.0437 28.2731 45.2124 28.5343 45.4374C28.7954 45.6625 29.0072 45.9392 29.1563 46.25C30.2573 48.1509 31.8386 49.7291 33.7419 50.8261C35.6451 51.9232 37.8032 52.5007 40 52.5007C42.1968 52.5007 44.355 51.9232 46.2582 50.8261C48.1614 49.7291 49.7428 48.1509 50.8438 46.25C51.2009 45.7319 51.7403 45.3675 52.3542 45.2296C52.9682 45.0917 53.6116 45.1904 54.156 45.506C54.7004 45.8216 55.1057 46.3309 55.2911 46.9322C55.4766 47.5335 55.4284 48.1826 55.1563 48.75Z"
                    fill="#14367B"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-[#113a69]">
                Share Happiness
              </h3>
              <p className="text-gray-700 max-w-xs">
                Sharing happiness with those less and doing more good for others
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Every Contribution Counts (Blue Background) */}
      <div className="bg-[#113a69] py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div>
            <p className="text-yellow-400 font-medium mb-2 uppercase tracking-widest text-sm">
              Impactful
            </p>
            <h2 className="font-playfair font-bold text-5xl md:text-6xl leading-tight mb-8">
              Every Contribution Counts in Transforming Lives
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Even small donations can make a significant impact in providing
              healthcare to those in need. Your support can help save lives and
              bring healthcare to rural areas through telemedicine.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {/* Small Donations Block */}
              <div>
                <h4 className="text-yellow-400 font-bold text-lg mb-2">
                  Small Donations
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Make a big difference in transforming healthcare for those in
                  need.
                </p>
                {/* Primary Button (Donate Now) - Updated to use ButtonStyle */}
                <a href="#Donation">
                  <ButtonStyle className="mt-5">
                    Donate Now{" "}
                    <ChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </ButtonStyle>
                </a>
              </div>

              {/* Join Us Block */}
              <div>
                <h4 className="text-yellow-400 font-bold text-lg mb-2">
                  Join Us
                </h4>
                <p className="text-gray-400 text-sm">
                  In making a lasting impact through your generous contribution.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="/hands-on-hand.jpg" // Placeholder for the image of hands together
                alt="A group of diverse hands placed together in a circle, signifying unity and support."
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Component 4: Donation Form Section (Pixel-Perfect Match for uploaded:image_2c0f76.png) ---
const DonationSection = () => {
  // State to track the currently selected amount (or null if custom input is active)
  const [selectedAmount, setSelectedAmount] = React.useState(10);
  // State for the custom text input
  const [customAmount, setCustomAmount] = React.useState("");
  const predefinedAmounts = [10, 25, 50, 100];

  // Determine the amount to show on the main Donate button. Defaults to 10 if all states are empty/invalid.
  const currentDonateAmount = customAmount
    ? parseFloat(customAmount)
    : selectedAmount;
  const displayAmount = currentDonateAmount > 0 ? currentDonateAmount : 10;

  // Custom Button Style for the Donation amounts
  const DonationAmountButton = ({ amount }) => {
    // Is selected if the amount matches the selected state AND the custom input is empty
    const isSelected = amount === selectedAmount && customAmount === "";

    // Consistent dark navy blue text color
    const darkBlue = "text-[#113a69]";

    // Base classes for shape and font
    const baseClasses = `
            font-inter font-medium text-lg rounded-xl transition-all duration-200 cursor-pointer 
            w-full text-center whitespace-nowrap h-full flex items-center justify-center
        `;

    // Classes for the highlighted (selected) button - Light Yellow
    const selectedClasses = `
            bg-[#ffef8e] ${darkBlue} shadow-md border-2 border-[#ffef8e] hover:bg-[#ffe666]
        `;

    // Classes for the outlined (unselected) buttons
    const unselectedClasses = `
            bg-white ${darkBlue} border border-gray-300 hover:border-[#3679ac] hover:shadow-sm
        `;

    const handleClick = () => {
      setSelectedAmount(amount);
      setCustomAmount(""); // Clear custom input when a predefined button is clicked
    };

    return (
      <button
        // Use px-2 py-4 to achieve the rectangular size seen in the image
        className={`${baseClasses} py-4 ${isSelected ? selectedClasses : unselectedClasses
          }`}
        onClick={handleClick}
      >
        ${amount}
      </button>
    );
  };

  // Custom Input Change Handler
  const handleCustomChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, ""); // Only allow digits

    setCustomAmount(value);

    // If the user starts typing a valid number, deselect the predefined buttons
    if (value && parseFloat(value) > 0) {
      setSelectedAmount(null);
    } else {
      // If the input is cleared or zero, default selection back to $10
      setSelectedAmount(10);
    }
  };

  return (
    <div className="w-full bg-gray-50 py-20 px-4 font-inter">
      <div className="max-w-2xl mx-auto text-center">
        {/* Main Heading Section */}
        <h2 id="Donation" className="font-playfair font-bold text-4xl text-[#113a69] mb-4">
          What Your Donations Support
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-base md:text-lg">
          Your contribution directly funds programs that provide guidance,
          education, and resilience training for vulnerable youth.
        </p>

        {/* Donation Card - Soft rounded corners and subtle shadow/border matching the image */}
        <div
          className="bg-white p-6 md:p-10 rounded-3xl"

          style={{
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05), 0 0 0 1px #f1f1f1", // Soft inner shadow/border
            border: "1px solid #f9f9f9", // Extra light border
          }}
        >
          {/* Card Title and Subtitle */}
          <h3 className="font-playfair font-bold text-3xl text-[#113a69] mb-3">
            Make a Donation
          </h3>
          <p className="text-gray-600 mb-8 text-sm">
            Your donation funds mentors, scholarships, and life-changing
            workshops
          </p>

          {/* Predefined Amounts Grid */}
          <div className="grid grid-cols-4 gap-4 mb-10 max-w-lg mx-auto">
            {predefinedAmounts.map((amount) => (
              <DonationAmountButton key={amount} amount={amount} />
            ))}
          </div>

          {/* Custom Input Field and Input Styling Match */}
          <div className="relative max-w-lg mx-auto mb-10">
            <input
              type="text"
              inputMode="numeric" // Use numeric keyboard on touch devices
              pattern="[0-9]*"
              value={customAmount}
              onChange={handleCustomChange}
              placeholder="25" // Placeholder matches image style
              // The input is styled to be large, left-aligned, and has padding for the $ sign
              className={`w-full text-3xl font-inter font-normal text-[#113a69] py-3 pl-4 pr-12 rounded-xl border-2 transition-colors duration-200 focus:outline-none 
                                ${customAmount
                  ? "border-[#3679ac] shadow-inner"
                  : "border-gray-300 focus:border-gray-400"
                }
                                text-left
                            `}
            />
            {/* Static $ sign on the right, positioned absolutely */}
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-gray-400 font-normal">
              $
            </span>
          </div>

          {/* Large Donate Button - Matches the yellow theme */}
          <button
            className="w-full max-w-lg mx-auto py-4 rounded-xl text-xl font-bold font-inter transition-all duration-300 
                                   bg-[#ffef8e] text-[#113a69] shadow-lg border border-yellow-300 
                                   hover:bg-[#ffe666] hover:shadow-xl hover:scale-[1.01]"
            onClick={() => console.log(`Donating $${displayAmount}`)}
          >
            Donate ${displayAmount}
          </button>

          {/* Security Text */}
          <p className="text-xs text-gray-400 mt-6">
            Your donation is secure and encrypted
          </p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <Helmet>
        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://allen-robert-portfolio-iuki.vercel.app/NGO"
        />

        {/* Title */}
        <title>Allan Roberts – NGO | Youth Empowerment & Social Impact</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Learn about Allan Roberts' NGO initiatives focused on youth empowerment, education, mentorship, and community upliftment."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Allan Roberts – NGO Initiatives"
        />
        <meta
          property="og:description"
          content="A closer look at Allan Roberts' humanitarian work—empowering youth, supporting education, and creating long-lasting social impact."
        />
        <meta
          property="og:image"
          content="https://allen-robert-portfolio-iuki.vercel.app/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://allen-robert-portfolio-iuki.vercel.app/NGO"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Allan Roberts – NGO Initiatives"
        />
        <meta
          name="twitter:description"
          content="Discover the social projects and humanitarian efforts led by Allan Roberts to help empower communities and youth."
        />
        <meta
          name="twitter:image"
          content="https://allen-robert-portfolio-iuki.vercel.app/og-image.jpg"
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
      "item": "https://allen-robert-portfolio-iuki.vercel.app/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "NGO",
      "item": "https://allen-robert-portfolio-iuki.vercel.app/NGO"
    }
  ]
}
`}
</script>

      </Helmet>

      <AllanHeroPage />
      <AllanMissionSection />
      <AllanContributionSection />
      {/* Add the new Donation Section here */}
      <DonationSection />
      <Footer />
    </div>
  );
};

export default App;
