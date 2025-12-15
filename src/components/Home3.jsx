import React, { useState, useRef } from "react";
// import { Clock, Eye, Volume2, VolumeX } from "lucide-react"; // Added Volume icons
import { Clock, Eye, Volume2, VolumeX, Play } from "lucide-react";

import { HashLink } from "react-router-hash-link";

// --- Video Card Component (Featured Videos) ---
// const VideoCard = ({ title, views, time, videoSource }) => {
//   const [isMuted, setIsMuted] = useState(true);
//   const videoRef = useRef(null);

//   const handleUnmute = () => {
//     if (isMuted) {
//       setIsMuted(false);
//       if (videoRef.current) {
//         videoRef.current.currentTime = 0; // Restart video with sound
//         videoRef.current.play();
//       }
//     }
//   };

//   return (
//     <div
//       className="w-72 h-96 flex-shrink-0 rounded-xl overflow-hidden shadow-xl 
//                  bg-black relative group scroll-snap-align-start cursor-pointer"
//       onClick={handleUnmute}
//     >
//       <video
//         ref={videoRef}
//         src={videoSource}
//         className="w-full h-full object-cover"
//         controls={!isMuted}
//         autoPlay
//         muted={isMuted}
//         loop
//         playsInline
//         preload="metadata"
//       >
//         Your browser does not support the video tag.
//       </video>

//       {/* Mute Overlay Indicator */}
//       {isMuted && (
//         <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full backdrop-blur-sm pointer-events-none">
//           <VolumeX className="w-5 h-5 text-white" />
//         </div>
//       )}

//       {/* Text Overlay */}
//       <div
//         className={`absolute bottom-0 left-0 right-0 p-4 pt-12 pb-14 
//                     bg-gradient-to-t from-black/90 via-black/50 to-transparent 
//                     text-white pointer-events-none transition-opacity duration-300
//                     ${!isMuted ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
//       >
//         <h3 className="font-semibold text-xl leading-tight mb-1 drop-shadow-md">
//           {title}
//         </h3>
//         <div className="flex items-center text-xs text-white/90 font-medium">
//           {views && (
//             <span className="flex items-center mr-4">
//               <Eye className="w-3 h-3 mr-1" /> {views}
//             </span>
//           )}
//           <span className="flex items-center">
//             <Clock className="w-3 h-3 mr-1" /> {time}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- Story Video Player Component (New) ---
// const StoryVideoPlayer = () => {
//   const [isMuted, setIsMuted] = useState(true);
//   const videoRef = useRef(null);

//   const handleUnmute = () => {
//     if (isMuted) {
//       setIsMuted(false);
//       if (videoRef.current) {
//         videoRef.current.currentTime = 0; // Restart narrative from start
//         videoRef.current.play();
//       }
//     }
//   };

//   return (
//     <div 
//       className="relative aspect-video w-full rounded-lg overflow-hidden shadow-2xl bg-black cursor-pointer group"
//       onClick={handleUnmute}
//     >
//       <video
//         ref={videoRef}
//         className="w-full h-full object-cover"
//         controls={!isMuted} // Show controls only when sound is ON
//         preload="metadata"
//         autoPlay
//         muted={isMuted}
//         loop
//         playsInline
//       >
//         <source src="/allan-story.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* "Click for Sound" Overlay */}
//       {isMuted && (
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-2xl flex items-center gap-3 animate-pulse">
//             <Volume2 className="w-6 h-6 text-[#FFE600]" />
//             <span className="text-white text-lg font-semibold tracking-wide">
//               Tap for Sound
//             </span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // --- Featured Videos Section Component ---
// const FeaturedVideos = () => {
//   const videos = [
//     {
//       title: "Against All Odds – My Journey",
//       time: "2:31",
//       videoSource: "/Allan 2-1080p-251212.mp4",
//     },
//     {
//       title: "The Silence Behind the Stage",
//       time: "7:33",
//       videoSource: "/allan-story.mp4",
//     },
//     {
//       title: "The Cottage That Changed Everything",
//       time: "1:45",
//       videoSource: "/Allen video 4-1080p-251212.mp4",
//     },{
//       title: "The Million-Pound Life I Never Lived",
//       time: "2:56",
//       videoSource: "/Allen video 5-1080p-251212.mp4",
//     },
    
    
//   ];

//   return (
//     <div className="py-1">
//       <div className="flex space-x-6 pb-6 overflow-x-auto scrollbar-hide snap-x">
//         {videos.map((video, index) => (
//           <VideoCard key={index} {...video} />
//         ))}
//       </div>
//       <style>{`
//         .scrollbar-hide::-webkit-scrollbar { display: none; }
//         .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>
//     </div>
//   );
// };

const VideoCard = ({ title, views, time, vimeoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Background mode: Autoplay, Muted, Loop, No controls
  const previewUrl = `https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0`;
  // Active mode: Autoplay (unmuted), Controls enabled
  const activeUrl = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`;

  return (
    <div
      className="w-72 h-96 flex-shrink-0 rounded-xl overflow-hidden shadow-xl 
                 bg-black relative group scroll-snap-align-start cursor-pointer border border-white/10"
      onClick={() => setIsPlaying(true)}
    >
      {/* Video Wrapper:
        We use a calculated width (approx 240% of the container) to force the 16:9 iframe 
        to fill the vertical height of the 3:4 card.
        This crops the sides but removes the black bars.
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <iframe
          src={isPlaying ? activeUrl : previewUrl}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-[240%] max-w-none object-cover"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{ pointerEvents: isPlaying ? 'auto' : 'none' }}
          title={title}
        ></iframe>
      </div>

      {/* Overlays - Only visible when NOT playing (in preview mode) */}
      {!isPlaying && (
        <>
          {/* Mute Overlay Indicator */}
          <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full backdrop-blur-sm pointer-events-none z-20">
            <VolumeX className="w-5 h-5 text-white" />
          </div>

          {/* Text Overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 p-4 pt-12 pb-14 
                       bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                       text-white pointer-events-none transition-opacity duration-300 z-20"
          >
            <h3 className="font-semibold text-xl leading-tight mb-1 drop-shadow-md">
              {title}
            </h3>
            <div className="flex items-center text-xs text-white/90 font-medium">
              {views && (
                <span className="flex items-center mr-4">
                  <Eye className="w-3 h-3 mr-1" /> {views}
                </span>
              )}
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-1" /> {time}
              </span>
            </div>
          </div>
          
          {/* Hover Play Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
             <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                <Play className="w-8 h-8 text-white fill-white" />
             </div>
          </div>
        </>
      )}
    </div>
  );
};

// --- Story Video Player Component (Vimeo Version) ---
const StoryVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const vimeoId = "1146380951"; // Using the 2nd video link for the Story section

  const previewUrl = `https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0`;
  const activeUrl = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`;

  return (
    <div 
      className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black cursor-pointer group border border-white/10"
      onClick={() => setIsPlaying(true)}
    >
      
      <iframe
        src={isPlaying ? activeUrl : previewUrl}
        className="w-full h-full object-cover"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        style={{ pointerEvents: isPlaying ? 'auto' : 'none' }}
        title="My Story"
      ></iframe>
      {/* "Click for Sound" Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-2xl flex items-center gap-3 animate-pulse group-hover:bg-black/60 transition-colors">
            <Volume2 className="w-6 h-6 text-[#FFE600]" />
            <span className="text-white text-lg font-semibold tracking-wide">
              Tap for Sound
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Featured Videos Section Component ---
const FeaturedVideos = () => {
  const videos = [
    {
      title: "Against All Odds – My Journey",
      time: "2:31",
      vimeoId: "1146380926",
    },
    {
      title: "The Silence Behind the Stage",
      time: "7:33",
      vimeoId: "1146380951",
    },
    {
      title: "The Cottage That Changed Everything",
      time: "1:45",
      vimeoId: "1146381001",
    },
    {
      title: "The Million-Pound Life I Never Lived",
      time: "2:56",
      vimeoId: "1146381016",
    },
  ];

  return (
    <div className="py-1">
      <div className="flex space-x-6 pb-6 overflow-x-auto scrollbar-hide snap-x">
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

// --- Main App Component ---
const App = () => {
  return (
    <div className="min-h-screen w-full font-sans selection:bg-yellow-400 selection:text-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Montserrat:wght@300;400;500;600;700;800&family=Oswald:wght@400;500;600&family=Playfair+Display:ital,wght@1,700;1,900&display=swap');
        .font-script { font-family: 'Dancing Script', cursive; }
        .font-serif-header { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Montserrat', sans-serif; }
        .font-nav { font-family: 'Oswald', sans-serif; }
        .vertical-dashed-line {
            background-image: linear-gradient(to bottom, rgba(255,255,255,0.5) 50%, transparent 0%);
            background-position: center; background-size: 1px 12px; background-repeat: repeat-y;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Header Section */}
      <header className="bg-[#FFE600] text-slate-900 py-4 px-4 md:px-8 top-0 overflow-x-auto no-scrollbar z-50 shadow-sm">
        <div className="max-w-7xl overflow-auto mx-auto flex flex-wrap items-center justify-between font-nav overflow-x-auto no-scrollbar tracking-wider text-sm md:text-base font-semibold uppercase">
          <nav className="w-full flex justify-between items-center gap-2 text-center md:text-left overflow-x-auto no-scrollbar">
            <a href="#donate" className="hover:opacity-70 whitespace-nowrap px-2">Donate</a>
            <a href="#" className="leading-tight hover:opacity-70 px-2 flex flex-col"><span>Motivation</span><span>Speaker</span></a>
            <a href="#" className="hover:opacity-70 whitespace-nowrap px-2">Mentor</a>
            <a href="#" className="hover:opacity-70 whitespace-nowrap px-2">Writer</a>
            <a href="#" className="hover:opacity-70 whitespace-nowrap px-2">Explorer</a>
            <a href="#" className="hover:opacity-70 whitespace-nowrap px-2">Author</a>
            <a href="#" className="hover:opacity-70 whitespace-nowrap px-2">Writer</a>
          </nav>
        </div>
      </header>

      {/* Main Content Area - Blue Background */}
      <main className="bg-gradient-to-r from-[#1e5f99] via-[#0c4a85] to-[#053366] min-h-screen w-full pb-4 text-white relative overflow-hidden">
        {/* Title Section */}
        <div className="text-center pt-12 pb-10">
          <h1 className="font-serif-header italic text-5xl md:text-6xl text-[#FFE600] inline-block relative pb-2">
            Why Choose us!
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjIiPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSIjRkZFNjAwIi8+PC9sZnN2Zz+')] opacity-80"></div>
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Top Text Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-start">
            <div className="font-body text-sm md:text-[15px] leading-relaxed text-white/90 max-w-xl">
              <p>
                At the heart of our work is a belief that real success comes
                from mindset, persistence, and excellence. We're not just
                another team offering services—
                <span className="font-bold text-white italic">
                  we are a team that has grown through experience, challenges,
                  and a commitment to never giving up.
                </span>
              </p>
            </div>
            {/* ... (SVG and Text content same as previous) ... */}
            <div className="flex gap-2 justify-end md:justify-start md:pl-10">
              <span className="flex">
                 {/* Reusing existing SVGs from your code */}
                 <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.2913 8.81896L6.98229 8.80288C14.551 8.67432 12.0281 -2.44584 3.9291 0.494884C-2.04872 2.66427 -0.939933 12.6435 5.45569 14.2826C8.28391 15.0057 11.4335 14.4915 9.08738 13.688C7.0787 13.0131 5.45569 11.0687 5.56818 9.47783C5.60032 9.1243 5.90564 8.81896 6.2913 8.81896Z" fill="#FCE300"/></svg>
                 <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.2913 8.81896L6.98229 8.80288C14.551 8.67432 12.0281 -2.44584 3.9291 0.494884C-2.04872 2.66427 -0.939933 12.6435 5.45569 14.2826C8.28391 15.0057 11.4335 14.4915 9.08738 13.688C7.0787 13.0131 5.45569 11.0687 5.56818 9.47783C5.60032 9.1243 5.90564 8.81896 6.2913 8.81896Z" fill="#FCE300"/></svg>
              </span>
              <div className="font-script text-2xl flex flex-wrap md:text-3xl text-white leading-tight max-w-md">
                <div>Success is always one plan away—built on expertise, resilience, and the right mindset </div> 
                <span className="flex">
                   <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.02735 15.5645C14.3068 12.7684 11.35 0.555539 3.26713 0.0252438C1.16203 -0.119381 0.615658 0.378775 2.20653 0.973349C3.74919 1.55185 5.69359 4.28368 5.90249 6.13168C5.9507 6.50128 5.66149 6.80663 5.29189 6.80663C3.17073 6.80663 2.28688 6.80657 1.04953 8.50994C-1.98759 12.7202 2.04584 17.4768 7.02735 15.5645Z" fill="#FCE300"/></svg>
                   <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.02735 15.5645C14.3068 12.7684 11.35 0.555539 3.26713 0.0252438C1.16203 -0.119381 0.615658 0.378775 2.20653 0.973349C3.74919 1.55185 5.69359 4.28368 5.90249 6.13168C5.9507 6.50128 5.66149 6.80663 5.29189 6.80663C3.17073 6.80663 2.28688 6.80657 1.04953 8.50994C-1.98759 12.7202 2.04584 17.4768 7.02735 15.5645Z" fill="#FCE300"/></svg>
                </span>
              </div>
            </div>
          </div>

          {/* Main Hero Image Banner Wrapper */}
          <div className="relative w-full max-w-8xl mx-auto mb-18 mt-12 md:mt-40 group px-4 md:px-8">
            <div className="w-full aspect-[4/3] md:aspect-auto md:h-[450px] relative shadow-2xl rounded-xl bg-neutral-800">
              <img src="/background.jpg" alt="Banner Background" className="absolute inset-0 w-full h-full object-cover z-0 rounded-xl opacity-90 md:opacity-100" />
              <img src="/allan-roberts-portrait.png" alt="Model Portrait" className="absolute bottom-0 left-1/2 md:left-[55%] transform -translate-x-1/2 h-[110%] md:h-[135%] w-auto z-10 pointer-events-none drop-shadow-2xl object-cover" />
              {/* Name Overlay - Left */}
              <div className="absolute top-8 left-4 md:top-1/2 md:-translate-y-1/2 md:left-16 z-20">
                <h2 className="font-serif-header text-3xl sm:text-4xl md:text-6xl text-[#D4B89C] leading-none tracking-wide drop-shadow-lg">
                  ALLAN <span className="font-script text-4xl sm:text-5xl md:text-7xl ml-2 text-white/90">L</span>
                  <br /><span className="text-white/90">ROBERTS</span>
                </h2>
              </div>
              {/* CTA Button */}
              <div className="absolute bottom-4 right-4 md:top-12 md:right-16 md:bottom-auto z-30">
                <a href="https://www.linkedin.com/in/allan-roberts-183a49104?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <button className="border border-white/40 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-6 md:py-2 rounded-full text-white font-body text-xs md:text-sm hover:bg-white/20 transition flex items-center gap-2 shadow-lg">
                    <span className="whitespace-nowrap">Get in Touch</span><span className="text-base md:text-lg">&rsaquo;</span>
                  </button>
                </a>
              </div>
            </div>
            {/* The Curvy Arrow */}
            <div className="hidden md:block absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-20 text-white w-16 h-16 opacity-80">
              <svg width="115" height="90" viewBox="0 0 115 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M50.0698 89.2086C54.0799 87.3263 47.3502 83.2893 37.5309 81.6824L32.4549 80.8625C47.5118 73.5111 61.7358 66.8825 71.4507 53.1799C74.0182 49.5644 74.7969 48.8455 77.007 48.0846C92.156 42.891 108.926 25.0456 113.639 9.18612C115.394 3.35056 114.836 0.836024 111.705 0.216631C108.35 -0.442904 107.724 0.0989607 105.161 6.21156C99.1424 20.7173 83.8901 39.7913 78.0143 40.1913C77.9044 40.1988 78.1151 39.2406 78.4205 38.0546C83.0262 21.4258 66.5458 11.1154 50.0716 20.3394C36.0441 28.231 42.7524 48.9735 59.6554 50.0982C67.0267 50.5953 49.9098 64.9681 31.1609 74.0136C26.9943 76.0177 23.3542 77.6529 23.0794 77.6716C22.75 77.694 25.0846 74.705 28.26 71.1036C38.0303 59.839 40.2402 55.0269 36.4446 53.565C33.1618 52.3456 29.7603 54.2419 26.1956 59.4236C19.6189 68.9724 13.2775 75.5088 4.60756 81.8704C-5.69272 89.3975 3.65705 90.5921 9.60556 88.0229C18.0678 84.2837 36.95 84.4967 43.5113 88.4896C45.3001 89.6442 48.4677 89.9836 50.0698 89.2086ZM57.4994 44.3623C48.5457 39.2557 51.5007 25.1257 62.2595 21.8962C69.0186 19.8822 71.3599 33.2077 66.0699 43.8348C64.855 46.248 61.2306 46.4947 57.4994 44.3623Z" fill="white"/></svg>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3">
             {/* ... (Kept existing features logic to save space in this response, but ensure you keep them in your file) ... */}
             <div className="relative pl-8 border-l-0">
               <div className="hidden md:block absolute top-[-3rem] bottom-0 left-0 w-[1px] vertical-dashed-line opacity-40"></div>
               <div className="hidden md:block absolute bottom-0 left-[-2px] w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
               <div className="bg-[#FFE1E1] w-14 h-14 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                 <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.89333 15.2929C9.77333 15.2929 11.28 16.8143 11.28 18.7076V23.2529C11.28 25.1329 9.77333 26.6663 7.89333 26.6663H3.38667C1.52 26.6663 0 25.1329 0 23.2529V18.7076C0 16.8143 1.52 15.2929 3.38667 15.2929H7.89333ZM23.2801 15.2929C25.1468 15.2929 26.6668 16.8143 26.6668 18.7076V23.2529C26.6668 25.1329 25.1468 26.6663 23.2801 26.6663H18.7735C16.8935 26.6663 15.3868 25.1329 15.3868 23.2529V18.7076C15.3868 16.8143 16.8935 15.2929 18.7735 15.2929H23.2801ZM7.89333 0C9.77333 0 11.28 1.53333 11.28 3.41467V7.96C11.28 9.85333 9.77333 11.3733 7.89333 11.3733H3.38667C1.52 11.3733 0 9.85333 0 7.96V3.41467C0 1.53333 1.52 0 3.38667 0H7.89333ZM23.2801 0C25.1468 0 26.6668 1.53333 26.6668 3.41467V7.96C26.6668 9.85333 25.1468 11.3733 23.2801 11.3733H18.7735C16.8935 11.3733 15.3868 9.85333 15.3868 7.96V3.41467C15.3868 1.53333 16.8935 0 18.7735 0H23.2801Z" fill="#FF6A58"/></svg>
               </div>
               <h3 className="font-body font-bold text-lg mb-3">Expertise You Can Trust</h3>
               <p className="font-body text-xs md:text-sm leading-relaxed text-white/80 pr-4">Years of hands-on experience and continuous learning ensure we deliver solutions that are practical, reliable, and effective.</p>
             </div>
             
             {/* Feature 2 & 3 (Shortened for brevity but present in logic) */}
             <div className="relative pl-8 pt-6 md:pt-24">
               <div className="hidden md:block absolute top-[-3rem] bottom-0 left-0 w-[1px] vertical-dashed-line opacity-40"></div>
               <div className="hidden md:block absolute bottom-0 left-[-2px] w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
               <div className="bg-[#F3E5F5] w-14 h-14 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                 <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16C12.3778 16 12.6947 15.872 12.9507 15.616C13.2067 15.36 13.3342 15.0436 13.3333 14.6667V8C13.3333 7.62222 13.2053 7.30578 12.9493 7.05067C12.6933 6.79556 12.3769 6.66756 12 6.66667C11.6231 6.66578 11.3067 6.79378 11.0507 7.05067C10.7947 7.30756 10.6667 7.624 10.6667 8V14.6667C10.6667 15.0444 10.7947 15.3613 11.0507 15.6173C11.3067 15.8733 11.6231 16.0009 12 16ZM16 14C16.3778 14 16.6947 13.872 16.9507 13.616C17.2067 13.36 17.3342 13.0436 17.3333 12.6667V9.33333C17.3333 8.95556 17.2053 8.63911 16.9493 8.384C16.6933 8.12889 16.3769 8.00089 16 8C15.6231 7.99911 15.3067 8.12711 15.0507 8.384C14.7947 8.64089 14.6667 8.95733 14.6667 9.33333V12.6667C14.6667 13.0444 14.7947 13.3613 15.0507 13.6173C15.3067 13.8733 15.6231 14.0009 16 14ZM8 13.3333C8.37778 13.3333 8.69467 13.2053 8.95067 12.9493C9.20667 12.6933 9.33422 12.3769 9.33333 12V9.33333C9.33333 8.95556 9.20533 8.63911 8.94933 8.384C8.69333 8.12889 8.37689 8.00089 8 8C7.62311 7.99911 7.30667 8.12711 7.05067 8.384C6.79467 8.64089 6.66667 8.95733 6.66667 9.33333V12C6.66667 12.3778 6.79467 12.6947 7.05067 12.9507C7.30667 13.2067 7.62311 13.3342 8 13.3333ZM5.33333 26.6667C4.95556 26.6667 4.63911 26.5387 4.384 26.2827C4.12889 26.0267 4.00089 25.7102 4 25.3333V20.9333C2.73333 19.7778 1.75022 18.428 1.05067 16.884C0.351111 15.34 0.000888889 13.712 0 12C0 8.66667 1.16667 5.83333 3.5 3.5C5.83333 1.16667 8.66667 0 12 0C14.7778 0 17.2391 0.816889 19.384 2.45067C21.5289 4.08444 22.9231 6.212 23.5667 8.83333L25.3 15.6667C25.4111 16.0889 25.3333 16.4724 25.0667 16.8173C24.8 17.1622 24.4444 17.3342 24 17.3333H21.3333V21.3333C21.3333 22.0667 21.0724 22.6947 20.5507 23.2173C20.0289 23.74 19.4009 24.0009 18.6667 24H16V25.3333C16 25.7111 15.872 26.028 15.616 26.284C15.36 26.54 15.0436 26.6676 14.6667 26.6667H5.33333Z" fill="#C167A6"/></svg>
               </div>
               <h3 className="font-body font-bold text-lg mb-3">Problem-Solving Mindset</h3>
               <p className="font-body text-xs md:text-sm leading-relaxed text-white/80 pr-4">We turn challenges into opportunities with resilience, precision, and a commitment to finding the best outcome every time.</p>
             </div>

             <div className="relative pl-8 pb-12 pt-6 md:pt-48">
               <div className="hidden md:block absolute top-[-3rem] bottom-0 left-0 w-[1px] vertical-dashed-line opacity-40"></div>
               <div className="hidden md:block absolute bottom-0 left-[-2px] w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
               <div className="bg-[#E0F7FA] w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                 <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.28006 3.39339L11.4867 9.59872C12.4402 9.00042 13.5431 8.68306 14.6687 8.68306C15.7944 8.68306 16.8972 9.00042 17.8507 9.59872L24.0534 3.39606C21.4182 1.20164 18.0973 0 14.6681 0C11.2388 0 7.91794 1.20164 5.28272 3.39606M25.9387 5.27872L19.7334 11.4854C20.3314 12.4387 20.6486 13.5413 20.6486 14.6667C20.6486 15.7921 20.3314 16.8947 19.7334 17.8481L25.9374 24.0521C28.1318 21.4168 29.3334 18.096 29.3334 14.6667C29.3334 11.2375 28.1318 7.91661 25.9374 5.28139M24.0534 25.9374L17.8494 19.7321C16.8959 20.3304 15.793 20.6477 14.6674 20.6477C13.5417 20.6477 12.4389 20.3304 11.4854 19.7321L5.28006 25.9387C7.91538 28.1335 11.2365 29.3353 14.6661 29.3353C18.0956 29.3353 21.4167 28.1335 24.0521 25.9387M3.39606 24.0521L9.60006 17.8454C9.00202 16.892 8.68481 15.7894 8.68481 14.6641C8.68481 13.5387 9.00202 12.4361 9.60006 11.4827L3.39606 5.27872C1.20164 7.91394 0 11.2348 0 14.6641C0 18.0933 1.20164 21.4142 3.39606 24.0494" fill="#019CB6"/></svg>
               </div>
               <h3 className="font-body font-bold text-lg mb-3">Supportive Partnership</h3>
               <p className="font-body text-xs md:text-sm leading-relaxed text-white/80 pr-4">Beyond just services, we work alongside you—guiding, supporting, and ensuring your growth and success.</p>
             </div>
          </div>
        </div>
      </main>

      {/* NEW SECTION: Video Player (Using the new StoryVideoPlayer component) */}
      <section className="bg-gradient-to-r from-[#1e5f99] via-[#0c4a85] to-[#053366] py-2 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif-header italic text-5xl md:text-5xl text-[#FFE600] inline-block relative pb-2 mb-8">
            My story...
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjIiPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSIjRkZFNjAwIi8+PC9zdmc+')] opacity-80"></div>
          </h2>
          
          {/* Replaced standard div/video with the interactive component */}
          <StoryVideoPlayer />
          
        </div>
      </section>

      {/* NEW SECTION: Living Through Giving Banner */}
      <section id="donate" className="py-20 bg-gradient-to-r from-[#1e5f99] via-[#0c4a85] to-[#053366] text-white">
        <div className="w-[85%] mx-auto py-16 px-6 md:px-12 rounded-3xl shadow-2xl" style={{ backgroundColor: "#003FDB" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="flex flex-col gap-6 pr-0 md:pr-8">
              <h2 className="font-serif-header text-5xl md:text-6xl leading-tight">
                <span className="inline-block relative pb-2">Living <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjIiPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSIjNkVCOERCIi8+PC9zdmc+')] opacity-80"></div></span>
                <span className="font-script text-white/90 text-6xl md:text-7xl"> Through Giving</span>
              </h2>
              <p className="font-body text-sm md:text-base leading-relaxed text-white/80 max-w-lg">Empowering humanity with the tools to create & benefit from organized acts of Love.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button className="border border-white/40 bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full text-white font-body text-sm hover:bg-white/20 transition shadow-sm relative overflow-hidden group">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2b70a8] to-[#1e6096] opacity-90 border border-cyan-200/40 shadow-[0_0_15px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300"></div>
                  <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  <HashLink to="/ngo#topNGO"><span className="relative z-10 tracking-wide drop-shadow-sm">Join The Movement</span></HashLink>
                </button>
                <HashLink to="/ngo#Donation"><button className="bg-[#FF4A61] px-8 py-3 rounded-full text-white font-body text-sm hover:bg-[#E03A50] transition shadow-lg w-full sm:w-auto">Donate</button></HashLink>
              </div>
            </div>
            <div className="relative order-first md:order-last w-full h-[300px] md:h-[450px]">
              <div className="absolute inset-0 bg-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
                <img src="/children-smiling.jpg" alt="Children smiling" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-[-20px] right-[-20px] w-36 h-36 bg-[#FFE600] rounded-full flex items-center justify-center p-4 shadow-xl">
                <div className="w-24 h-24 bg-[#FF4A61] rounded-full flex items-center justify-center">
                  <HashLink to="/ngo#Donation">
                    <svg className="w-10 h-10 text-white transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </HashLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#1e5f99] via-[#0c4a85] to-[#053366] flex justify-center py-16 px-6 md:px-12">
        <div className="w-[90%]">
          <FeaturedVideos />
        </div>
      </section>
    </div>
  );
};

export default App;