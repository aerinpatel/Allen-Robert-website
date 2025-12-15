import React from "react";
import { Twitter, Instagram, Send, Facebook ,Linkedin } from "lucide-react";
import { Link } from "react-router-dom"; // ⬅ Import Link
import { HashLink } from "react-router-hash-link";
export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#1e5f99] via-[#0c4a85] to-[#053366] py-10 px-6 flex justify-center">
      <div className="w-[95%] max-w-[1400px]">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-6">
          
          {/* Logo */}
          <img
            src="/Signature.png"
            alt="Signature Logo"
            className="h-[48px] w-auto select-none"
          />

          {/* Navigation */}
          <ul className="flex flex-wrap justify-center md:justify-end items-center gap-6 md:gap-10 text-white text-[15px]">
            <li className="opacity-90 hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-105">
              <HashLink to={'/#topHome'}>Home</HashLink>
            </li>

            <li className="opacity-90 hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-105">
              <HashLink to={'/journey#topJourney'}>Journey</HashLink>
            </li>

            <li className="opacity-90 hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-105">
              <HashLink to={'/ngo#topNGO'}>NGO</HashLink>
            </li>

            <li className="opacity-90 hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-105">
              <HashLink to={'/blogs#topBlogs'}>Blogs</HashLink>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/20 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Copyright */}
          <p className="text-white text-sm opacity-90 text-center md:text-left">
            © Allan L Robert 2025. All rights reserved
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">

            <a
              href="https://www.linkedin.com/in/allan-roberts-183a49104?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="h-10 w-10 rounded-full bg-[#FFF200] flex justify-center items-center text-[#0069D2] cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <Linkedin size={18} strokeWidth={2.5} />
              </div>
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}
