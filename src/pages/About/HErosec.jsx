import { useEffect, useRef, useState } from 'react'
import Myimg from "/Images/Html/Myimg.png"
const HErosec = () => {
     const heroRef = useRef(null);
     const [heroVis, setHeroVis] = useState(false);
      useEffect(() => {
         const o1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeroVis(true); }, { threshold: 0.1 });
         
         
         if (heroRef.current) o1.observe(heroRef.current);
         
         return () => { o1.disconnect();  };
       }, []);
  return (
    <div>
        <div ref={heroRef} className="relative overflow-hidden bg-white px-6 py-14 sm:py-16 md:py-20 lg:py-24">
        {/* BG */}
        <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[#006DFF]/[0.03] blur-[120px]"></div>
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[#00D7FF]/[0.03] blur-[100px]"></div>

        <div className="relative z-10 mx-auto max-w-6xl md:px-8">
          {/* Label */}
          <div className={`mb-4 text-center transition-all duration-700 ${heroVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[#006DFF] animate-pulse"></span>
              <span className="text-[12px] font-medium text-[#006DFF]">About Me</span>
            </span>
          </div>

          <h1 className={`mb-10 text-center text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl transition-all duration-700 delay-100 ${heroVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Know About{" "}
            <span className="bg-gradient-to-r from-[#006DFF] to-[#00D7FF] bg-clip-text text-transparent">Lokesh</span>
          </h1>

          {/* Grid: Image + Text */}
          <div className="grid items-center gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">

            {/* Image */}
            <div className={`flex justify-center transition-all duration-700 delay-200 ${heroVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative">
                <div className="h-72 w-72 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-xl shadow-gray-200/50 sm:h-80 sm:w-80 md:h-96 md:w-96">
                  {/* Replace src with your actual image */}
                  <img
                    src={Myimg}
                    alt="Lokesh Kumar"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-3 -right-3 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-lg">
                  <span className="text-lg">💻</span>
                  <div>
                    <p className="text-[12px] font-bold text-gray-900">Full Stack Dev</p>
                    <p className="text-[10px] text-gray-400">MERN + Java</p>
                  </div>
                </div>
                {/* Decorative dots */}
                <div className="absolute -top-4 -left-4 grid grid-cols-3 gap-1.5">
                  {[...Array(9)].map((_, i) => (
                    <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#006DFF]/20"></span>
                  ))}
                </div>
              </div>
            </div>

            {/* Text */}
            <div className={`transition-all duration-700 delay-300 ${heroVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="mb-5 text-[15px] leading-relaxed text-gray-500 sm:text-[16px] md:text-lg">
                Hello! I'm{" "}
                <span className="font-bold text-gray-900">Lokesh</span>,
                a passionate learner and developer with strong expertise in{" "}
                <span className="font-semibold text-[#006DFF]">Java</span>,{" "}
                <span className="font-semibold text-[#006DFF]">Data Structures & Algorithms</span>, and the{" "}
                <span className="font-semibold text-[#006DFF]">MERN Stack</span>.
              </p>
              <p className="mb-5 text-[15px] leading-relaxed text-gray-500 sm:text-[16px] md:text-lg">
                My journey in technology has been focused on building scalable web applications, solving complex problems, and mastering backend as well as frontend development.
              </p>
              <p className="mb-8 text-[15px] leading-relaxed text-gray-500 sm:text-[16px] md:text-lg">
                With MERN Stack, I create full-stack applications; with Java, I handle enterprise-level solutions; and with DSA, I sharpen my problem-solving skills for competitive programming and interviews.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-6">
                {[
                  { num: "3+", label: "Technologies" },
                  { num: "10+", label: "Projects" },
                  { num: "200+", label: "DSA Problems" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold text-gray-900 sm:text-3xl">{s.num}</p>
                    <p className="text-[12px] text-gray-400 sm:text-[13px]">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HErosec