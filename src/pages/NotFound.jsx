import React from "react";
import { Link } from "react-router-dom";
import { Home, Mail, RefreshCw } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1e5f99] via-[#0c4a85] to-[#053366] text-white p-6">
      {/* Decorative blurred background circles */}
      <div className="pointer-events-none fixed -z-10 inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 w-96 h-96 rounded-3xl bg-gradient-to-tr from-[#0b6ea8] to-[#64b5ff] opacity-20 blur-3xl animate-slow-spin"></div>
        <div className="absolute -right-40 -bottom-40 w-[36rem] h-[36rem] rounded-full bg-gradient-to-bl from-[#ffd966] to-[#ff8a00] opacity-10 blur-3xl"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto">
        <div className="backdrop-blur-md bg-white/6 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left - Big code & message */}
            <div className="flex-1 text-center md:text-left">
              <div className="text-7xl md:text-8xl font-extrabold tracking-tight text-white drop-shadow-md">
                404
              </div>
              <h1 className="mt-2 text-2xl md:text-3xl font-playfair text-white">
                Page not found
              </h1>
              <p className="mt-3 text-sm md:text-base text-blue-100 max-w-xl">
                Oops — looks like the page you're looking for doesn't exist or
                has moved. Allan Roberts is busy inspiring people — but we still
                want to help you find what you need.
              </p>

              {/* Helpful links */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-[#2b70a8] to-[#1e6096] text-white font-medium shadow-md hover:scale-[1.02] transition-transform"
                >
                  <Home size={16} /> Back to Home
                </Link>

                <a
                  href="mailto:allanlroberts@hotmail.com"
                  className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-full border border-white/20 text-white/90 hover:bg-white/6 transition"
                >
                  <Mail size={16} /> Report Issue
                </a>

                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white/6 border border-white/8 text-white hover:bg-white/8 transition"
                >
                  <RefreshCw size={14} /> Try Reload
                </button>
              </div>
            </div>

            {/* Right - Glass card with suggested links */}
            <div className="w-full md:w-80">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/8 shadow-lg">
                <h3 className="text-sm text-blue-200 font-semibold mb-3">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/Journey"
                      className="block px-3 py-2 rounded-md hover:bg-white/6 transition"
                    >
                      • Journey — Meet Allan's story
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blogs"
                      className="block px-3 py-2 rounded-md hover:bg-white/6 transition"
                    >
                      • Blogs — Motivational articles
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/NGO"
                      className="block px-3 py-2 rounded-md hover:bg-white/6 transition"
                    >
                      • NGO — Youth empowerment work
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/allan-roberts-183a49104"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-3 py-2 rounded-md hover:bg-white/6 transition"
                    >
                      • Connect on LinkedIn
                    </a>
                  </li>
                </ul>

                <div className="mt-5 text-xs text-blue-200/80">
                  <strong>Tip:</strong> If you reached here via a bookmark, try
                  updating it or use the menu to navigate.
                </div>
              </div>

              {/* small author card */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-white/3 to-white/2 border border-white/6 shadow-inner">
                <div className="flex items-center gap-3">
                  <img
                    src="/allan-roberts-portrait.png"
                    alt="Allan Roberts portrait"
                    className="w-12 h-12 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <div className="text-sm font-medium">Allan Roberts</div>
                    <div className="text-xs text-blue-200/80">
                      Motivational Speaker
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* footer small */}
          <div className="mt-8 pt-6 border-t border-white/6 text-center text-xs text-blue-200/60">
            <div>
              Still stuck? Try the site map or{" "}
              <a href="/blogs" className="text-white underline">
                search the blogs
              </a>
              .
            </div>
            <div className="mt-2">
              © {new Date().getFullYear()} Allan L Roberts
            </div>
          </div>
        </div>
      </div>

      {/* small keyframes (place at bottom so tailwind doesn't strip) */}
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0); } to { transform: rotate(360deg); } }
        .animate-slow-spin { animation: spin-slow 40s linear infinite; }
      `}</style>
    </div>
  );
}
