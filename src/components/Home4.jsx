import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "David J. Karem",
    title: "Businessmen",
    time: "1 day ago",
    text: "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details.",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Alice M. Johnson",
    title: "Software Engineer",
    time: "5 hours ago",
    text: "This service is incredibly reliable and fast. It saved me a huge amount of time dealing with potential spam. The anonymous nature of the addresses is a fantastic security feature.",
    avatarUrl: "https://placehold.co/100x100/A0C4FF/03045E?text=AMJ",
  },
  {
    name: "Ben T. Smith",
    title: "Freelance Writer",
    time: "3 days ago",
    text: "As a writer who signs up for many newsletters and services, having a disposable email is a necessity. The interface is clean and straightforward, making it easy to use even for tech novices.",
    avatarUrl: "https://placehold.co/100x100/90E0EF/0077B6?text=BTS",
  },
  {
    name: "Carla R. Diaz",
    title: "Student",
    time: "2 weeks ago",
    text: "Perfect for registering on sites that require email verification but you don't trust. It helps keep my primary inbox completely clean. Highly recommended for privacy concerns!",
    avatarUrl: "https://placehold.co/100x100/FFC999/E67300?text=CRD",
  },
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Start at the first testimonial
  const currentTestimonial = testimonials[activeIndex];

  const handleNav = (direction) => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return testimonials.length - 1;
      if (newIndex >= testimonials.length) return 0;
      return newIndex;
    });
  };

  return (
    <div className="w-full bg-[#0B50B5] relative overflow-hidden flex flex-col items-center justify-center font-sans">
      {/* Font Imports via Style Tag for precise typography matching */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-serif-display {
          font-family: 'Playfair Display', serif;
        }
        .font-sans-body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Main Background Wrapper */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e5f99] via-[#0c4a85] to-[#053366] z-0"></div>

      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center gap-8">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Pill Badge */}
          <div className="px-6 py-1.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/5 shadow-lg">
            <span className="text-[#C58FFF] text-sm font-medium tracking-wide uppercase">
              Testimonials
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif-display text-4xl md:text-6xl leading-tight inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-400">
            What’s our user say
            <span className="text-yellow-500 bg-clip-text text-transparent">
              s
            </span>{" "}
            <br className="hidden md:block" />
            about us
          </h1>
        </div>

        {/* Testimonial Slider Container */}
        <div className="relative w-full mt-8 px-4 md:px-12">
          {/* Outer Gold Border Container */}
          <div className="relative w-full border border-[#FFD700]/60 rounded-[2rem] p-6 md:p-10 transition-all duration-300">
            {/* Navigation Buttons (Absolute positioned on the border line) */}
            <button
              onClick={() => handleNav(-1)}
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-b from-[#FFD700] to-[#E6C200] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:scale-105 transition-transform z-20 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white/90 group-hover:text-white" />
            </button>

            <button
              onClick={() => handleNav(1)}
              className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-b from-[#FFD700] to-[#E6C200] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:scale-105 transition-transform z-20 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white/90 group-hover:text-white" />
            </button>

            {/* Inner Content Card (Content changes based on activeIndex) */}
            <div className="w-full bg-[#1A56DB] rounded-[1.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden transition-all duration-500 ease-in-out">
              {/* Subtle gradient overlay on the card itself */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>

              <div className="relative z-10 flex flex-col gap-6 pb-6">
                {" "}
                {/* Added padding-bottom to ensure space for dots */}
                {/* User Profile Header */}
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder - To be replaced with actual image tag */}
                  <div className="w-14 h-14 rounded-full bg-pink-200 overflow-hidden border-2 border-white/20 flex-shrink-0">
                    <img
                      src={currentTestimonial.avatarUrl}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold font-sans-body tracking-wide">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-white/60 text-sm font-sans-body font-light">
                      {currentTestimonial.title} •{" "}
                      <span className="opacity-80">
                        {currentTestimonial.time}
                      </span>
                    </p>
                  </div>
                </div>
                {/* Testimonial Text */}
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white/80 leading-relaxed font-sans-body font-light text-[15px] md:text-[16px] text-justify md:text-left">
                    {currentTestimonial.text}
                  </p>
                </div>
              </div>

              {/* Pagination Dots - MOVED INSIDE THE CARD */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 md:gap-4 z-20">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="p-1.5 transition-all duration-300" // padding to create space for the outline
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    {activeIndex === index ? (
                      // Active Dot: Gradient ring container
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#C58FFF] to-[#FFD700] flex items-center justify-center">
                        {/* Inner cutout to create the ring effect (using the card's background color) */}
                        <div className="w-5 h-5 rounded-full bg-[#1A56DB] flex items-center justify-center">
                          {/* The solid center dot */}
                          <div className="w-2 h-2 rounded-full bg-[#E0E5FF]/90" />
                        </div>
                      </div>
                    ) : (
                      // Inactive Dot: Light, slightly blue-tinted white.
                      <div className="w-2.5 h-2.5 rounded-full bg-[#E0E5FF]/70 hover:bg-[#E0E5FF]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
