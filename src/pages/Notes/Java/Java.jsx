import { useRef, useState, useEffect } from "react";
import javaData from "./JavaData";

import JavaCard from "./JavaCard";

const JavaStack = () => {
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
          <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#006DFF] sm:text-[12px]">Backend</p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Java <span className="bg-gradient-to-r from-[#006DFF] to-[#00D7FF] bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-gray-500 sm:text-[15px] md:text-base">
            From core fundamentals to enterprise-level frameworks — everything you need to master Java development.
          </p>
        </div>

        {/* 12 Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:gap-5 lg:grid-cols-4 lg:gap-6">
          {javaData.map((item, i) => (
            <JavaCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Learning Path */}
        <div ref={dividerRef} className={`mt-14 md:mt-16 lg:mt-20 transition-all duration-700 ${dividerVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/80 p-6 sm:p-8 md:p-10">
            <p className="mb-6 text-center text-[12px] font-semibold uppercase tracking-[0.15em] text-gray-400 sm:text-[13px]">Learning Path</p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
              {[
                { name: "Core Java", color: "bg-red-100 text-red-600 border-red-200" },
                { name: "OOP", color: "bg-orange-100 text-orange-600 border-orange-200" },
                { name: "Collections", color: "bg-blue-100 text-blue-600 border-blue-200" },
                { name: "JDBC", color: "bg-cyan-100 text-cyan-600 border-cyan-200" },
                { name: "Threads", color: "bg-green-100 text-green-600 border-green-200" },
                { name: "Spring Boot", color: "bg-lime-100 text-lime-600 border-lime-200" },
                { name: "Hibernate", color: "bg-purple-100 text-purple-600 border-purple-200" },
                { name: "Microservices", color: "bg-pink-100 text-pink-600 border-pink-200" },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <span className={`rounded-lg border px-3 py-1.5 text-[11px] font-semibold sm:px-4 sm:py-2 sm:text-[12px] md:text-[13px] ${step.color}`}>
                    {step.name}
                  </span>
                  {i < 7 && (
                    <svg className="h-4 w-4 flex-shrink-0 text-gray-300 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-[12px] text-gray-400 sm:mt-6 sm:text-[13px]">
              Basics <span className="mx-1">→</span> Advanced <span className="mx-1">→</span> Frameworks <span className="mx-1">→</span> Enterprise Level
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div ref={bottomRef} className={`mt-10 text-center md:mt-12 transition-all duration-700 ${bottomVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-gray-50 px-5 py-2.5 sm:px-6 sm:py-3">
            <span className="text-base sm:text-lg">☕</span>
            <p className="text-[13px] font-medium text-gray-600 sm:text-[14px]">
              Master all <span className="font-semibold text-[#006DFF]">12 Java technologies</span> to become a backend expert
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JavaStack;