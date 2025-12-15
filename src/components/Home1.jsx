import React from "react";
import { HashLink } from "react-router-hash-link";
import {
  ChevronRight,
  Heart,
  HeartHandshake,
  DollarSign,
  HandCoins,
  User,
  Hand,
  Smile,
  Sparkles,
} from "lucide-react";

// --- NEW HERO COMPONENT (Allan L Roberts Design) ---
const AllanBioHero = () => {
  return (
    <div className="w-full flex items-center relative overflow-hidden font-sans selection:bg-yellow-400 selection:text-blue-900">
      {/* Background - Solid Blue with Gradient overlay matching the image */}
      <div id="topHome" className="absolute inset-0 bg-[#1e568f] z-0">
        {/* Vertical Divider Line Effect */}
        <div className="absolute top-0 bottom-0 right-1/3 w-px bg-white/10 hidden lg:block"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e5f99] via-[#0c4a85] to-[#053366]"></div>
      </div>

      {/* Inject Fonts and custom animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }

        @keyframes float {
          0% { transform: translate(0, 0px) rotate(-6deg); }
          50% { transform: translate(0, 8px) rotate(-6deg); }
          100% { transform: translate(0, 0px) rotate(-6deg); }
        }
        @keyframes float-slow {
          0% { transform: translate(0, 0px) rotate(-12deg); }
          50% { transform: translate(0, -6px) rotate(-12deg); }
          100% { transform: translate(0, 0px) rotate(-12deg); }
        }
        @keyframes float-delayed {
          0% { transform: translate(0, 0px) rotate(12deg); }
          50% { transform: translate(0, 10px) rotate(12deg); }
          100% { transform: translate(0, 0px) rotate(12deg); }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 0.5s; }
      `}</style>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-20 px-6 lg:px-8 pt-12 pb-20">
        {/* Left Side: Text Content (Span 7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
          {/* Laurel Badge */}
          <div className="mb-8 relative inline-block">
            <div className="flex items-center gap-3 text-white/90">
              {/* Left Laurel */}
              <svg
                width="36"
                height="74"
                viewBox="0 0 36 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.50188 50.2898C9.12644 52.1196 9.55155 54.1342 9.62548 54.6887C10.0506 54.929 10.4387 55.1508 10.7899 55.3541C10.2354 54.43 9.69941 53.4873 9.21886 52.5077C8.40561 50.8628 7.72175 49.1623 7.1303 47.425C7.05636 47.2401 7.00092 47.0368 6.94547 46.852C6.4834 45.4288 5.8365 44.0796 4.94932 42.8597C4.89387 42.7858 4.83842 42.6933 4.78297 42.6194C-2.61017 38.5717 0.772191 30.3468 0.772191 30.3468C0.661294 32.1581 2.41717 33.5443 4.21 36.8712C5.74408 39.6991 5.22656 41.6768 5.04173 42.1943C5.41139 42.7858 5.76256 43.2848 6.07677 43.7099C5.94739 43.1739 5.8365 42.6564 5.74408 42.1204C5.39291 40.3275 5.20808 38.4977 5.11566 36.6864L5.0787 36.0025C5.0787 35.7808 5.06021 35.5405 5.0787 35.3187V33.9509C5.0787 33.4889 5.11566 33.0453 5.13415 32.5832C5.13415 32.3614 5.13415 32.1211 5.17111 31.8994L5.22656 31.2155C5.26353 30.7719 5.22656 30.3098 5.15263 29.8662L4.61663 27.2602C-0.761886 20.7912 5.41139 14.3776 5.41139 14.3776C4.63511 16.0226 5.76256 17.9633 6.22464 21.7153C6.61278 24.8943 5.41139 26.5578 5.04173 26.9829C5.1896 27.7407 5.35594 28.4061 5.48532 28.9421L5.54077 28.517C5.59622 28.0734 5.70712 27.6298 5.78105 27.1677L5.91043 26.5024C5.94739 26.2806 6.00284 26.0588 6.05829 25.837C6.28008 24.9498 6.4834 24.0626 6.76064 23.1939L6.96395 22.547L7.05636 22.2143L7.16726 21.9001L7.62933 20.6248C7.92506 19.8855 8.22078 19.1462 8.55348 18.4069C9.12644 17.0946 9.4961 15.6899 9.57003 14.2667C9.57003 13.934 9.607 13.6013 9.64396 13.2871C6.76064 5.37644 14.7268 1.40263 14.7268 1.40263C13.4514 2.69643 13.8581 4.89589 13.0263 8.57398C12.324 11.7161 10.642 12.862 10.143 13.1392C9.99514 14.2112 9.90273 15.1169 9.86576 15.7453C9.86576 15.7453 9.86576 15.7084 9.90272 15.6714L10.2169 15.0799C10.3278 14.8766 10.4572 14.6918 10.5681 14.4885L11.2705 13.3241L12.0283 12.1966C12.1576 12.0118 12.287 11.827 12.4164 11.6421L12.823 11.1061C13.2481 10.5332 13.6732 9.96019 14.1353 9.42419C14.7637 8.61094 15.6509 7.44652 16.4087 6.61479C16.7599 6.22665 17.0741 5.78307 17.2959 5.30251C20.6228 -1.72098 28.7183 0.256689 28.7183 0.256689C26.907 0.367586 25.7425 2.2898 22.6744 4.48926C20.2531 6.22665 18.3309 6.11576 17.6286 6.00486C17.5361 6.00486 17.4437 6.06031 17.3513 6.09727L16.4272 7.05838C15.2258 8.38915 14.0614 9.77536 13.0448 11.254L12.6567 11.8085C12.5273 11.9933 12.4164 12.1781 12.287 12.3814L11.5662 13.5089L11.252 14.0449C12.0652 13.361 12.86 12.7696 13.6732 12.2521C18.0352 5.06223 26.1122 8.81425 26.1122 8.81425C24.3009 8.62943 22.8407 10.3114 19.4399 11.9563C16.5566 13.361 14.5974 12.7511 14.0799 12.5478C12.9154 13.2317 11.9543 13.897 11.3998 14.2852C11.0487 14.5439 10.7529 14.8581 10.5496 15.2463L10.2539 15.8377C9.42217 17.4273 8.7383 19.0907 8.12837 20.7727L7.70326 22.048L7.59237 22.3622L7.49995 22.6949L7.31512 23.3418C7.05636 24.192 6.89002 25.0792 6.68671 25.9479C6.63126 26.1697 6.59429 26.3915 6.55733 26.6133C7.09333 25.7815 7.6663 25.0237 8.25775 24.3399C10.3278 16.1889 19.1442 17.4088 19.1442 17.4088C17.3513 17.76 16.4457 19.7931 13.6917 22.3807C11.3444 24.5617 9.29279 24.5617 8.7383 24.5062C8.10989 25.1901 7.59237 25.8185 7.20423 26.2806C6.66822 26.9459 6.31705 27.7407 6.24312 28.5724L6.09526 29.9032L6.05829 30.2359V30.5686L5.98436 31.234L5.94739 31.8994V33.8955L5.98436 35.2263C5.98436 35.4481 5.98436 35.6699 6.02132 35.8916L6.07677 36.557C6.1507 37.5181 6.24312 38.4792 6.39098 39.4404C6.57581 38.6456 6.7976 37.8693 7.05636 37.167C6.07677 28.8127 14.7452 26.8166 14.7452 26.8166C13.1927 27.7777 13.0818 30.0141 11.4183 33.3965C10.0136 36.2798 8.0914 37.0006 7.5554 37.1485C7.35209 37.666 7.16726 38.1466 7.0194 38.5717C6.64974 39.6067 6.57581 40.7342 6.81609 41.8246C7.20423 43.562 7.6663 45.2809 8.27623 46.9444C8.88617 48.6079 9.607 50.2343 10.4202 51.8054C10.6605 52.2675 10.9193 52.7111 11.178 53.1546C11.0302 52.212 10.9378 51.3064 10.9008 50.4377C6.92698 43.026 14.2647 37.9802 14.2647 37.9802C13.1742 39.4404 13.895 41.5659 13.5808 45.3179C13.3221 48.5154 11.8065 49.9017 11.3629 50.2343V50.604C11.3629 52.6371 11.9913 54.6333 13.1742 56.2967C14.1907 57.7569 15.3367 59.1061 16.5566 60.3999C16.8708 60.7141 17.148 61.0468 17.4807 61.3425L18.4418 62.2667C18.1461 61.7307 17.8873 61.2132 17.647 60.7141C11.1226 55.428 15.9281 47.924 15.9281 47.924C15.4845 49.6983 16.9632 51.3803 18.1461 54.9475C19.1442 57.9972 18.2939 59.8454 18.0167 60.326C18.2015 60.7881 18.3864 61.2132 18.5712 61.5828C18.9963 62.507 19.6247 63.3202 20.4195 63.9486C21.8057 65.0391 23.2289 66.0742 24.7445 66.9613C25.6316 67.4789 26.5188 67.9779 27.443 68.4215C27.0548 68.0333 26.7036 67.6267 26.3894 67.2386C20.1422 64.3553 22.4341 57.4427 22.4341 57.4427C22.4341 58.9398 23.9497 59.9748 25.6132 62.5809C27.0179 64.7988 26.7221 66.4438 26.5927 66.8874C26.7961 67.1646 26.9809 67.4049 27.1657 67.6267C27.7572 68.366 28.5334 68.976 29.4206 69.3456C31.0471 70.0295 32.6921 70.6025 34.3925 71.0645H34.411C34.8731 71.1939 35.2058 71.6005 35.2242 72.0811C35.2427 72.8943 34.4849 73.4119 33.7826 73.1901C32.0082 72.6541 30.2708 72.0072 28.5889 71.2494C26.907 70.4916 25.2805 69.5859 23.7094 68.6063C22.7668 68.0149 21.8611 67.3864 20.974 66.7026C19.7726 65.7969 18.3309 65.2424 16.8338 65.1131C8.97858 68.1258 4.89387 60.2151 4.89387 60.2151C6.20615 61.4719 8.40561 61.0283 12.1022 61.8046C15.2443 62.4515 16.4272 64.1335 16.7044 64.614C17.4622 64.7064 18.1276 64.7804 18.6821 64.8173C18.183 64.3737 17.7025 63.9117 17.2219 63.4681L16.2423 62.4885C15.9097 62.1743 15.6139 61.8046 15.2997 61.4719C14.0799 60.1042 12.9154 58.6625 11.8989 57.1285C11.8989 57.0915 11.8619 57.073 11.8434 57.036C11.3444 56.2967 10.6605 55.6868 9.84728 55.2802C9.7179 55.2062 9.58852 55.1508 9.45914 55.0769C1.04943 54.7626 0.402534 45.8909 0.402534 45.8909C1.12337 47.5728 3.30434 48.0164 6.39098 50.1789L6.52036 50.2898H6.50188Z"
                  fill="white"
                />
              </svg>

              <div className="text-center">
                <div className="text-xs sm:text-sm font-inter tracking-wider font-light opacity-80">
                  Hi I'm <span className="text-lg sm:text-xl">👋</span>
                </div>
                <div className="text-xl sm:text-2xl font-playfair italic font-bold">
                  Allan L Roberts
                </div>
              </div>

              {/* Right Laurel */}
              <svg
                width="36"
                height="74"
                viewBox="0 0 36 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.7227 50.2898C26.0981 52.1196 25.673 54.1342 25.5991 54.6887C25.174 54.929 24.7859 55.1508 24.4347 55.3541C24.9892 54.43 25.5252 53.4873 26.0057 52.5077C26.819 50.8628 27.5028 49.1623 28.0943 47.425C28.1682 47.2401 28.2237 47.0368 28.2791 46.852C28.7412 45.4288 29.3881 44.0796 30.2753 42.8597C30.3307 42.7858 30.3862 42.6933 30.4416 42.6194C37.8348 38.5717 34.4524 30.3468 34.4524 30.3468C34.5633 32.1581 32.8074 33.5443 31.0146 36.8712C29.4805 39.6991 29.998 41.6768 30.1828 42.1943C29.8132 42.7858 29.462 43.2848 29.1478 43.7099C29.2772 43.1739 29.3881 42.6564 29.4805 42.1204C29.8317 40.3275 30.0165 38.4977 30.1089 36.6864L30.1459 36.0025C30.1459 35.7808 30.1644 35.5405 30.1459 35.3187V33.9509C30.1459 33.4889 30.1089 33.0453 30.0904 32.5832C30.0904 32.3614 30.0904 32.1211 30.0535 31.8994L29.998 31.2155C29.9611 30.7719 29.998 30.3098 30.0719 29.8662L30.608 27.2602C35.9865 20.7912 29.8132 14.3776 29.8132 14.3776C30.5895 16.0226 29.462 17.9633 28.9999 21.7153C28.6118 24.8943 29.8132 26.5578 30.1828 26.9829C30.035 27.7407 29.8686 28.4061 29.7393 28.9421L29.6838 28.517C29.6284 28.0734 29.5175 27.6298 29.4435 27.1677L29.3142 26.5024C29.2772 26.2806 29.2217 26.0588 29.1663 25.837C28.9445 24.9498 28.7412 24.0626 28.4639 23.1939L28.2606 22.547L28.1682 22.2143L28.0573 21.9001L27.5952 20.6248C27.2995 19.8855 27.0038 19.1462 26.6711 18.4069C26.0981 17.0946 25.7285 15.6899 25.6545 14.2667C25.6545 13.934 25.6176 13.6013 25.5806 13.2871C28.4639 5.37644 20.4978 1.40263 20.4978 1.40263C21.7731 2.69643 21.3665 4.89589 22.1983 8.57398C22.9006 11.7161 24.5825 12.862 25.0816 13.1392C25.2294 14.2112 25.3219 15.1169 25.3588 15.7453C25.3588 15.7453 25.3588 15.7084 25.3219 15.6714L25.0076 15.0799C24.8967 14.8766 24.7674 14.6918 24.6565 14.4885L23.9541 13.3241L23.1963 12.1966C23.0669 12.0118 22.9376 11.827 22.8082 11.6421L22.4016 11.1061C21.9765 10.5332 21.5514 9.96019 21.0893 9.42419C20.4609 8.61094 19.5737 7.44652 18.8159 6.61479C18.4647 6.22665 18.1505 5.78307 17.9287 5.30251C14.6018 -1.72098 6.5063 0.256689 6.5063 0.256689C8.31762 0.367586 9.48204 2.2898 12.5502 4.48926C14.9715 6.22665 16.8937 6.11576 17.596 6.00486C17.6884 6.00486 17.7808 6.06031 17.8733 6.09727L18.7974 7.05838C19.9988 8.38915 21.1632 9.77536 22.1798 11.254L22.5679 11.8085C22.6973 11.9933 22.8082 12.1781 22.9376 12.3814L23.6584 13.5089L23.9726 14.0449C23.1594 13.361 22.3646 12.7696 21.5514 12.2521C17.1894 5.06223 9.11238 8.81425 9.11238 8.81425C10.9237 8.62943 12.3839 10.3114 15.7847 11.9563C18.668 13.361 20.6272 12.7511 21.1447 12.5478C22.3091 13.2317 23.2703 13.897 23.8247 14.2852C24.1759 14.5439 24.4716 14.8581 24.675 15.2463L24.9707 15.8377C25.8024 17.4273 26.4863 19.0907 27.0962 20.7727L27.5213 22.048L27.6322 22.3622L27.7246 22.6949L27.9095 23.3418C28.1682 24.192 28.3346 25.0792 28.5379 25.9479C28.5933 26.1697 28.6303 26.3915 28.6673 26.6133C28.1312 25.7815 27.5583 25.0237 26.9668 24.3399C24.8967 16.1889 16.0804 17.4088 16.0804 17.4088C17.8733 17.76 18.7789 19.7931 21.5329 22.3807C23.8802 24.5617 25.9318 24.5617 26.4863 24.5062C27.1147 25.1901 27.6322 25.8185 28.0204 26.2806C28.5564 26.9459 28.9075 27.7407 28.9815 28.5724L29.1293 29.9032L29.1663 30.2359V30.5686L29.2402 31.234L29.2772 31.8994V33.8955L29.2402 35.2263C29.2402 35.4481 29.2402 35.6699 29.2033 35.8916L29.1478 36.557C29.0739 37.5181 28.9815 38.4792 28.8336 39.4404C28.6488 38.6456 28.427 37.8693 28.1682 37.167C29.1478 28.8127 20.4793 26.8166 20.4793 26.8166C22.0319 27.7777 22.1428 30.0141 23.8063 33.3965C25.211 36.2798 27.1332 37.0006 27.6692 37.1485C27.8725 37.666 28.0573 38.1466 28.2052 38.5717C28.5748 39.6067 28.6488 40.7342 28.4085 41.8246C28.0204 43.562 27.5583 45.2809 26.9483 46.9444C26.3384 48.6079 25.6176 50.2343 24.8043 51.8054C24.5641 52.2675 24.3053 52.7111 24.0465 53.1546C24.1944 52.212 24.2868 51.3064 24.3238 50.4377C28.2976 43.026 20.9599 37.9802 20.9599 37.9802C22.0504 39.4404 21.3296 41.5659 21.6438 45.3179C21.9025 48.5154 23.4181 49.9017 23.8617 50.2343V50.604C23.8617 52.6371 23.2333 54.6333 22.0504 56.2967C21.0338 57.7569 19.8879 59.1061 18.668 60.3999C18.3538 60.7141 18.0766 61.0468 17.7439 61.3425L16.7828 62.2667C17.0785 61.7307 17.3373 61.2132 17.5775 60.7141C24.102 55.428 19.2964 47.924 19.2964 47.924C19.74 49.6983 18.2614 51.3803 17.0785 54.9475C16.0804 57.9972 16.9306 59.8454 17.2079 60.326C17.0231 60.7881 16.8382 61.2132 16.6534 61.5828C16.2283 62.507 15.5999 63.3202 14.8051 63.9486C13.4189 65.0391 11.9957 66.0742 10.4801 66.9613C9.59294 67.4789 8.70576 67.9779 7.78162 68.4215C8.16976 68.0333 8.52093 67.6267 8.83514 67.2386C15.0823 64.3553 12.7905 57.4427 12.7905 57.4427C12.7905 58.9398 11.2749 59.9748 9.61142 62.5809C8.20672 64.7988 8.50245 66.4438 8.63183 66.8874C8.42852 67.1646 8.24369 67.4049 8.05886 67.6267C7.46741 68.366 6.69113 68.976 5.80396 69.3456C4.17746 70.0295 2.53249 70.6025 0.832062 71.0645H0.813583C0.351509 71.1939 0.0188179 71.6005 0.000335693 72.0811C-0.0181503 72.8943 0.739651 73.4119 1.442 73.1901C3.21635 72.6541 4.95374 72.0072 6.63568 71.2494C8.31762 70.4916 9.94411 69.5859 11.5152 68.6063C12.4578 68.0149 13.3634 67.3864 14.2506 66.7026C15.452 65.7969 16.8937 65.2424 18.3908 65.1131C26.246 68.1258 30.3307 60.2151 30.3307 60.2151C29.0184 61.4719 26.819 61.0283 23.1224 61.8046C19.9803 62.4515 18.7974 64.1335 18.5202 64.614C17.7624 64.7064 17.097 64.7804 16.5425 64.8173C17.0415 64.3737 17.5221 63.9117 18.0026 63.4681L18.9822 62.4885C19.3149 62.1743 19.6107 61.8046 19.9249 61.4719C21.1447 60.1042 22.3091 58.6625 23.3257 57.1285C23.3257 57.0915 23.3627 57.073 23.3812 57.036C23.8802 56.2967 24.5641 55.6868 25.3773 55.2802C25.5067 55.2062 25.6361 55.1508 25.7654 55.0769C34.1751 54.7626 34.822 45.8909 34.822 45.8909C34.1012 47.5728 31.9202 48.0164 28.8336 50.1789L28.7042 50.2898H28.7227Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-playfair leading-[1.1] mb-6 sm:mb-8 text-white">
            {/* Line with keyword */}
            <span className="block text-base sm:text-lg md:text-xl mb-2 opacity-90">
              Allan Roberts —{" "}
              <span className="font-semibold">Motivational Speaker</span>
            </span>
            <span className="font-bold block">
              Empowering{" "}
              <span className="text-xl sm:text-2xl md:text-3xl font-fairplay font-normal text-blue-200 align-middle ml-2 tracking-wide">
                The Next Into
              </span>
            </span>
            <span className="font-bold italic text-[#ffd700]">
              Generation To Succeed.
            </span>
          </h1>

          {/* Body Text */}
          <p className="text-base md:text-xl font-inter font-light leading-relaxed mb-8 sm:mb-10 text-blue-100 max-w-2xl opacity-90">
            Allan Roberts is a motivational speaker dedicated to inspiring young
            minds, helping them build confidence, overcome challenges, and
            achieve meaningful success through{" "}
            <span className="text-[#ffd700] font-medium italic">
              Mentorship and Guidance.
            </span>
          </p>

          {/* Button - Matches the specific outline style in image_3b92da.jpg */}
          <div className="flex  justify-start">
            <button className="mt-8 group relative px-12 py-3 rounded-full font-inter text-white text-lg font-normal transition-all duration-300 hover:scale-105">
              {/* Gradient Background & Border Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2b70a8] to-[#1e6096] opacity-90 border border-cyan-200/40 shadow-[0_0_15px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300"></div>

              {/* Inner Gloss/Highlight (Top) */}
              <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

              {/* Text Content */}
              <HashLink to={"/NGO#Donation"}>
                <span className="relative flex items-center z-10 tracking-wide drop-shadow-sm">
                  Donate Now <ChevronRight size={16} className="ml-2" />
                </span>
              </HashLink>
            </button>
          </div>

          {/* Decorative Blue Sparkles (Left side) - Hide on mobile for cleanliness */}
          <div className="absolute left-0 top-1/3 opacity-20 text-blue-300 hidden md:block">
            <Sparkles size={48} strokeWidth={1} />
          </div>
        </div>

        {/* Right Side: Image & Badges (Span 5 cols) */}
        <div className="lg:col-span-5 relative flex justify-center items-end h-full order-1 lg:order-2 mt-10 lg:mt-0 pb-12 sm:pb-0">
          {/* Background Glow behind head - Adjust size for mobile */}
          <div className="absolute top-10 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>

          {/* Main Image Container - Cutout Style - Adjust max width for mobile */}
          <div className="relative z-10 w-full max-w-[300px] sm:max-w-[450px] mx-auto">
            {/* Using grayscale filter to match the B&W photo style in the mockup */}
            <img
              src="/allan-roberts-blackandwhite-nobg.png"
              alt="Allan Roberts"
              className="w-full h-auto object-cover drop-shadow-2xl filter grayscale contrast-110 brightness-110 mask-image-gradient"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            />
          </div>

          {/* Floating Badges - Repositioned for mobile/small screen visibility */}

          {/* Speaker Badge (Purple) */}
          <div className="absolute top-1/4 -left-2 sm:left-4 transform -rotate-12 bg-[#3b0764] text-white px-4 py-1.5 rounded-full border border-[#6b21a8] shadow-lg z-20 animate-float-slow text-sm sm:text-base">
            <span className="font-inter font-medium">Speaker</span>
          </div>

          {/* Author Badge (Yellow) */}
          <div className="absolute top-1/2 -right-2 sm:right-4 transform rotate-12 bg-[#ffd700] text-[#113a69] px-4 py-1.5 rounded-full border border-yellow-300 shadow-lg z-20 animate-float-delayed text-sm sm:text-base">
            <span className="font-inter font-bold">Author</span>
          </div>

          {/* Mentor Badge (Pink) */}
          <div className="absolute bottom-1/4 -left-4 sm:left-8 transform -rotate-6 bg-[#be185d] text-white px-4 py-1.5 rounded-full border border-[#db2777] shadow-lg z-20 animate-float text-sm sm:text-base">
            <span className="font-inter font-medium">Mentor</span>
          </div>

          {/* Decorative Elements - Hide on mobile for cleanliness */}
          <div className="absolute top-1/4 right-8 text-yellow-300 animate-pulse hidden sm:block">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10z" />
            </svg>
          </div>

          {/* Green/Blue Flower Graphic (Bottom Right) - Hide on mobile */}
          <div className="absolute -bottom-10 -right-10 text-[#3d7a6f] opacity-60 z-0 hidden md:block">
            <svg
              width="120"
              height="120"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M50 0 C60 30, 90 40, 100 50 C90 60, 60 70, 50 100 C40 70, 10 60, 0 50 C10 40, 40 30, 50 0 Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- APP COMPONENT ---
const App = () => {
  return (
    <div className="relative w-full flex flex-col">
      {/* Rendering the NEW Bio Hero as requested */}
      <AllanBioHero />
    </div>
  );
};

export default App;
