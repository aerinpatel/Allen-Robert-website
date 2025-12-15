import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  // robust location checking for Next.js or React Router
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname) {
      setCurrentPath(location.pathname);
    } else if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, [location]);

  const navItems = [
    { id: "home", label: "Home", route: "/" },
    { id: "journey", label: "Journey", route: "/journey" },
    { id: "ngo", label: "NGO", route: "/ngo" },
    { id: "blogs", label: "Blogs", route: "/blogs" },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#1e5f99] via-[#0c4a85] to-[#053366] py-6 flex justify-center relative z-50">
      <div
        className="w-[95%] max-w-[1400px] flex items-center justify-between rounded-full border border-[#C9D735] px-6 md:px-10 py-3 bg-gradient-to-r from-[#0C4A6E] to-[#0A60A8] relative shadow-lg"
      >
        {/* --- Logo --- */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/Signature.png"
            alt="Allan L Roberts"
            className="h-[40px] md:h-[48px] w-auto select-none object-contain"
          />
        </Link>

        {/* --- Hamburger Menu (Mobile) --- */}
        <button
          className="md:hidden text-[#C9D735] p-2 focus:outline-none hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            // Close Icon (SVG)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon (SVG)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        {/* --- Desktop Navigation --- */}
        <ul className="hidden md:flex items-center gap-8 text-white text-[15px] font-medium">
          {navItems.map((item) => {
            const isActive = currentPath === item.route;
            return (
              <li key={item.id} className="relative">
                <Link 
                  to={item.route} 
                  className={`px-4 py-2 rounded-full transition-all duration-300 relative block ${isActive ? "text-white" : "text-gray-200 hover:text-white"}`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-black/30 rounded-full -z-10 animate-fadeIn" />
                  )}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* --- Desktop Button --- */}
        <a
          href="https://www.linkedin.com/in/allan-roberts-183a49104"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <button className="text-white border border-[#C9D735] rounded-full px-6 py-2 text-[14px] font-semibold tracking-wide transition-all duration-300 hover:bg-[#C9D735] hover:text-[#0C4A6E] hover:scale-105 active:scale-95">
            Connect Now ›
          </button>
        </a>

        {/* --- Mobile Dropdown Menu --- */}
        {menuOpen && (
          <div className="absolute top-[120%] left-0 w-full flex justify-center md:hidden z-50">
            <div 
              className="w-full bg-[#0A60A8]/95 backdrop-blur-md border border-[#C9D735] rounded-2xl text-white p-5 space-y-4 shadow-2xl"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            >
              {navItems.map((item) => {
                const isActive = currentPath === item.route;
                return (
                  <Link
                    to={item.route}
                    key={item.id}
                    className={`block px-4 py-3 rounded-xl text-center font-medium transition-all duration-200 ${
                      isActive 
                        ? "bg-[#C9D735] text-[#053366]" 
                        : "hover:bg-white/10"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-2 border-t border-white/20">
                <a
                  href="https://www.linkedin.com/in/allan-roberts-183a49104"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full border border-[#C9D735] text-[#C9D735] font-bold px-4 py-3 rounded-xl transition-all duration-300 hover:bg-[#C9D735] hover:text-[#053366]">
                    Connect Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}