import { useRef, useState, useEffect } from "react";
import techData from "./techData";
import TechCard from "./TechCard";

const MernStack = () => {
  const headRef = useRef(null);
  const [headVis, setHeadVis] = useState(false);
  const dividerRef = useRef(null);
  const [dividerVis, setDividerVis] = useState(false);
  const bottomRef = useRef(null);
  const [bottomVis, setBottomVis] = useState(false);

  useEffect(() => {
    const o1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeadVis(true); }, { threshold: 0.15 });
    const o2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setDividerVis(true); }, { threshold: 0.3 });
    const o3 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setBottomVis(true); }, { threshold: 0.2 });
    if (headRef.current) o1.observe(headRef.current);
    if (dividerRef.current) o2.observe(dividerRef.current);
    if (bottomRef.current) o3.observe(bottomRef.current);
    return () => { o1.disconnect(); o2.disconnect(); o3.disconnect(); };
  }, []);

  return (
    <div className="bg-white px-6 py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl md:px-8">

        {/* Heading */}
        <div ref={headRef} className={`mb-10 text-center md:mb-12 lg:mb-14 transition-all duration-700 ${headVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#006DFF] sm:text-[12px]">Full Stack</p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            MERN Stack <span className="bg-gradient-to-r from-[#006DFF] to-[#00D7FF] bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-gray-500 sm:text-[15px] md:text-base">
            Every technology you need to master full-stack web development — from frontend to deployment.
          </p>
        </div>

        {/* 12 Cards Grid — 2 col mobile, 3 col tablet, 4 col desktop */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:gap-5 lg:grid-cols-4 lg:gap-6">
          {techData.map((item, i) => (
            <TechCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Flow Diagram */}
        <div ref={dividerRef} className={`mt-14 md:mt-16 lg:mt-20 transition-all duration-700 ${dividerVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/80 p-6 sm:p-8 md:p-10">
            <p className="mb-6 text-center text-[12px] font-semibold uppercase tracking-[0.15em] text-gray-400 sm:text-[13px]">How It Connects</p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
              {[
                { name: "HTML/CSS", color: "bg-orange-100 text-orange-600 border-orange-200" },
                { name: "JavaScript", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
                { name: "React", color: "bg-cyan-100 text-cyan-600 border-cyan-200" },
                { name: "Node.js", color: "bg-green-100 text-green-600 border-green-200" },
                { name: "Express", color: "bg-gray-200 text-gray-600 border-gray-300" },
                { name: "MongoDB", color: "bg-emerald-100 text-emerald-600 border-emerald-200" },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <span className={`rounded-lg border px-3 py-1.5 text-[11px] font-semibold sm:px-4 sm:py-2 sm:text-[12px] md:text-[13px] ${step.color}`}>
                    {step.name}
                  </span>
                  {i < 5 && (
                    <svg className="h-4 w-4 flex-shrink-0 text-gray-300 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-[12px] text-gray-400 sm:mt-6 sm:text-[13px]">
              Frontend <span className="mx-1">→</span> Backend <span className="mx-1">→</span> Database <span className="mx-1">→</span> Deployment
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div ref={bottomRef} className={`mt-10 text-center md:mt-12 transition-all duration-700 ${bottomVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-gray-50 px-5 py-2.5 sm:px-6 sm:py-3">
            <span className="text-base sm:text-lg">💡</span>
            <p className="text-[13px] font-medium text-gray-600 sm:text-[14px]">
              Master all <span className="font-semibold text-[#006DFF]">12 technologies</span> to become a complete MERN Stack developer
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MernStack;