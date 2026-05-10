import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState("");
  const full = "Mern Stack and Java with DSA!";

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const t = setInterval(() => { setTyped(full.slice(0, i + 1)); i++; if (i >= full.length) clearInterval(t); }, 40);
    return () => clearInterval(t);
  }, [visible]);

  return (
    <div ref={ref} className="relative overflow-hidden  py-14 sm:py-20 md:py-28 lg:py-32">

      {/* BG Orbs */}
      <div className="pointer-events-none absolute -right-48 -top-48 h-[550px] w-[550px] rounded-full bg-[#006DFF]/[0.04] blur-[140px]"></div>
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#00D7FF]/[0.03] blur-[120px]"></div>

      {/* Floating snippets */}
      <div className={`pointer-events-none absolute left-[4%] top-[16%] hidden transition-all duration-1000 lg:block ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-1.5 font-mono text-[10px] text-gray-300 shadow-sm">{"const app = express();"}</div>
      </div>
      <div className={`pointer-events-none absolute right-[4%] top-[20%] hidden transition-all duration-1000 delay-200 lg:block ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-1.5 font-mono text-[10px] text-gray-300 shadow-sm">{"npm run build ✅"}</div>
      </div>
      <div className={`pointer-events-none absolute bottom-[14%] left-[6%] hidden transition-all duration-1000 delay-400 lg:block ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-1.5 font-mono text-[10px] text-gray-300 shadow-sm">{"export default App;"}</div>
      </div>
      <div className={`pointer-events-none absolute bottom-[18%] right-[5%] hidden transition-all duration-1000 delay-600 lg:block ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-1.5 font-mono text-[10px] text-gray-300 shadow-sm">{"git push origin main"}</div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">

        {/* Badge */}
        <div className={`mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 md:mb-6 md:px-5 md:py-2 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="h-2 w-2 rounded-full bg-[#006DFF] animate-pulse"></span>
          <span className="text-[12px] font-medium text-[#006DFF] md:text-[13px]">Open Source Learning Platform</span>
        </div>

        {/* Heading */}
        <h1 className={`mb-4 text-[2.25rem] font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-[3.5rem] lg:text-[4rem] transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          Welcome to{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-[#006DFF] to-[#00D7FF] bg-clip-text text-transparent">Lokesh Notes</span>
            <span className="absolute -bottom-0.5 left-0 right-0 h-2.5 rounded-full bg-[#006DFF]/10 sm:-bottom-1 sm:h-3"></span>
          </span>
        </h1>

        {/* Typing */}
        <div className={`mb-8 h-7 sm:h-8 md:mb-10 md:h-9 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="text-[14px] text-gray-400 sm:text-[16px] md:text-lg lg:text-xl">
            We can learn here{" "}
            <span className="font-mono font-medium text-gray-600">{typed}</span>
            <span className="animate-pulse text-[#006DFF]">|</span>
          </p>
        </div>

        {/* Buttons */}
        <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <a href="#courses" className="group relative inline-flex h-12 items-center gap-2.5 overflow-hidden rounded-xl bg-[#006DFF] px-7 text-[14px] font-semibold text-white shadow-lg shadow-[#006DFF]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl sm:h-13 sm:px-8 sm:text-[15px]">
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>
            <svg className="relative h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="relative">Explore Courses</span>
          </a>
          <a href="#features" className="inline-flex h-12 items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-7 text-[14px] font-semibold text-gray-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50 sm:h-13 sm:px-8 sm:text-[15px]">
            Learn More
          </a>
        </div>

        {/* Stats — Row 1: 2 items | Row 2: 1 item centered */}
        <div className={`mt-10 flex flex-col items-center md:mt-14 transition-all duration-700 delay-[400ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>

          {/* Top Row — 10K+ | 50+ */}
          <div className="flex items-center gap-8 sm:gap-12">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-[2rem]">10K+</p>
              <p className="mt-0.5 text-[12px] text-gray-400 sm:text-[13px]">Students</p>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-[2rem]">50+</p>
              <p className="mt-0.5 text-[12px] text-gray-400 sm:text-[13px]">Lessons</p>
            </div>
          </div>

          {/* Divider dot */}
          <div className="my-3 flex h-2 w-2 items-center justify-center rounded-full bg-gray-200 sm:my-4"></div>

          {/* Bottom Row — 3 Courses (centered, styled differently) */}
          <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50/80 px-6 py-2.5 sm:px-8 sm:py-3">
            <span className="text-xl sm:text-2xl md:text-[1.6rem]">📚</span>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-900 sm:text-2xl md:text-[1.6rem]">3</p>
            </div>
            <span className="text-[13px] font-medium text-gray-500 sm:text-[14px]">Discounted Course</span>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 "></div>
    </div>
  );
};

export default Hero;