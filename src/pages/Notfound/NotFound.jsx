import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NotFound = () => {
  const [typed, setTyped] = useState("");
  const fullCode = '{\n  status: 404,\n  message: "Document not found."\n}';

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTyped(fullCode.slice(0, i + 1));
      i++;
      if (i >= fullCode.length) clearInterval(t);
    }, 35);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative flex min-h-screen min-h-[100dvh] flex-col overflow-hidden bg-white">

      {/* Subtle grid bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Soft orb */}
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#006DFF]/[0.03] blur-[120px]"></div>


      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-8 md:px-8 md:py-10">

        <div className="grid w-full max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-20">

          {/* ===== LEFT — SAD LAPTOP ===== */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">

              {/* Laptop SVG */}
              <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-xl">

                {/* Laptop Base */}
                <path d="M30 280 L370 280 L390 310 C395 318 390 326 382 326 L18 326 C10 326 5 318 10 310 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" />
                <path d="M160 280 L240 280 L245 310 C247 318 240 324 232 324 L168 324 C160 324 153 318 155 310 Z" fill="#cbd5e1" />

                {/* Laptop Screen Bezel */}
                <rect x="40" y="20" width="320" height="260" rx="16" fill="#1e293b" />
                <rect x="52" y="32" width="296" height="236" rx="8" fill="#f8fafc" />

                {/* Screen Content — Sad Face */}
                <g transform="translate(200, 150)">
                  {/* Face circle */}
                  <circle cx="0" cy="0" r="80" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="2" />

                  {/* Left eye — sad droop */}
                  <g>
                    <circle cx="-25" cy="-12" r="6" fill="#94a3b8" />
                    <path d="M-38 -22 Q-25 -28 -12 -22" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </g>

                  {/* Right eye — sad droop */}
                  <g>
                    <circle cx="25" cy="-12" r="6" fill="#94a3b8" />
                    <path d="M12 -22 Q25 -28 38 -22" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </g>

                  {/* Sad mouth */}
                  <path d="M-22 28 Q0 12 22 28" stroke="#94a3b8" strokeWidth="3.5" strokeLinecap="round" fill="none" />

                  {/* Tear drop left */}
                  <g className="animate-tear-l">
                    <ellipse cx="-32" cy="4" rx="3.5" ry="5" fill="#93c5fd" opacity="0.7" />
                  </g>

                  {/* Tear drop right */}
                  <g className="animate-tear-r">
                    <ellipse cx="32" cy="8" rx="3" ry="4.5" fill="#93c5fd" opacity="0.6" />
                  </g>

                  {/* 404 text on screen */}
                  <text x="0" y="68" textAnchor="middle" fontFamily="monospace" fontSize="18" fontWeight="700" fill="#cbd5e1">404</text>
                </g>

                {/* Screen glare */}
                <rect x="52" y="32" width="296" height="236" rx="8" fill="url(#glare)" />
                <defs>
                  <linearGradient id="glare" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="white" stopOpacity="0.06" />
                    <stop offset="50%" stopColor="white" stopOpacity="0" />
                    <stop offset="100%" stopColor="white" stopOpacity="0.02" />
                  </linearGradient>
                </defs>

                {/* Webcam dot */}
                <circle cx="200" cy="26" r="3" fill="#334155" />
                <circle cx="200" cy="26" r="1.5" fill="#475569" />
              </svg>

              {/* Shadow under laptop */}
              <div className="mx-auto mt-1 h-4 w-3/4 rounded-full bg-gray-200/60 blur-md"></div>
            </div>
          </div>


          {/* ===== RIGHT — CODE BLOCK + TEXT ===== */}
          <div className="flex w-full flex-col items-center lg:items-start">

            {/* Code Editor */}
            <div className="mb-7 w-full overflow-hidden rounded-2xl border border-gray-200 shadow-lg shadow-gray-200/50">
              {/* Editor bar */}
              <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
                <span className="ml-3 font-mono text-[11px] text-gray-400">response.json</span>
              </div>
              {/* Code */}
              <div className="bg-[#fafbfc] px-5 py-5 sm:px-6 sm:py-6">
                <pre className="font-mono text-[13px] leading-[1.8] text-gray-700 sm:text-[14px]">
                  <code>
                    <span className="text-gray-400 select-none mr-4 inline-block w-5 text-right text-[12px]">1</span>
                    <span className="text-gray-800">{"{"}</span>{"\n"}
                    <span className="text-gray-400 select-none mr-4 inline-block w-5 text-right text-[12px]">2</span>
                    {"  "}<span className="text-[#006DFF] font-semibold">status</span><span className="text-gray-400">:</span>{" "}
                    <span className="text-[#E36209] font-semibold">404</span><span className="text-gray-400">,</span>{"\n"}
                    <span className="text-gray-400 select-none mr-4 inline-block w-5 text-right text-[12px]">3</span>
                    {"  "}<span className="text-[#006DFF] font-semibold">message</span><span className="text-gray-400">:</span>{" "}
                    <span className="text-[#00994D]">"Document not found."</span>{"\n"}
                    <span className="text-gray-400 select-none mr-4 inline-block w-5 text-right text-[12px]">4</span>
                    <span className="text-gray-800">{"}"}</span>
                    <span className="animate-pulse text-[#006DFF] ml-1">│</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Oops Text */}
            <div className="mb-7 text-center lg:text-left">
              <h1 className="mb-2.5 text-2xl font-bold text-gray-900 sm:text-3xl">
                Oops! We can't find the page
              </h1>
              <p className="text-[14px] leading-relaxed text-gray-400 sm:text-[15px]">
                The page you were looking for doesn't exist or has been moved.
              </p>
            </div>

            {/* Search Bar */}
            <div className="mb-5 w-full max-w-md">
              <div className="flex items-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all focus-within:border-[#006DFF] focus-within:ring-2 focus-within:ring-[#006DFF]/10">
                <svg className="ml-4 h-4 w-4 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search for articles..."
                  className="h-12 flex-1 bg-transparent px-3 text-[14px] text-gray-700 outline-none placeholder:text-gray-400"
                />
                <button className="mr-1.5 h-9 rounded-lg bg-[#006DFF] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#005acc]">
                  Search
                </button>
              </div>
            </div>

            {/* Hint */}
            <p className="text-center text-[13px] text-gray-400 lg:text-left">
              Or use the{" "}
              <Link to="/" className="font-medium text-[#006DFF] underline underline-offset-2 hover:text-[#005acc]">
                navigation bar
              </Link>
              {" "}above to find your way back.
            </p>

          </div>
        </div>
      </div>


      {/* ===== FOOTER BAR ===== */}
      <div className="relative z-10 border-t border-gray-100 bg-white/90 px-5 py-3.5 text-center backdrop-blur-sm md:px-8">
        <p className="font-mono text-[11px] text-gray-300">DevBlog © 2025</p>
      </div>


      {/* ===== ANIMATIONS ===== */}
      <style>{`
        @keyframes tearL {
          0% { transform: translateY(0); opacity: 0.7; }
          80% { transform: translateY(35px); opacity: 0.5; }
          100% { transform: translateY(42px); opacity: 0; }
        }
        @keyframes tearR {
          0% { transform: translateY(0); opacity: 0.6; }
          80% { transform: translateY(30px); opacity: 0.4; }
          100% { transform: translateY(38px); opacity: 0; }
        }
        .animate-tear-l ellipse {
          animation: tearL 2.5s ease-in infinite;
          animation-delay: 0.5s;
        }
        .animate-tear-r ellipse {
          animation: tearR 2.8s ease-in infinite;
          animation-delay: 1.2s;
        }
      `}</style>
    </div>
  );
};

export default NotFound;