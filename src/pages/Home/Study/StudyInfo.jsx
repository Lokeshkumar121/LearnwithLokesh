import { useRef, useState, useEffect } from "react";
import cards from "./Card";
import InfoCard from "./InfoCard";

const StudyInfo = () => {
  const headRef = useRef(null);
  const [headVis, setHeadVis] = useState(false);
  const [btmVis, setBtmVis] = useState(false);

  useEffect(() => {
    const obs1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeadVis(true); }, { threshold: 0.2 });
    const obs2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setBtmVis(true); }, { threshold: 0.3 });
    if (headRef.current) obs1.observe(headRef.current);
    if (btmRef.current) obs2.observe(btmRef.current);
    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  const btmRef = useRef(null);

   

  return (
    <div className="bg-gray-50/70 px-5 py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div ref={headRef} className={`mb-10 text-center md:mb-12 lg:mb-14 transition-all duration-700 ${headVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#006DFF] sm:text-[12px]">About Us</p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Why Learn with{" "}
            <span className="bg-gradient-to-r from-[#006DFF] to-[#00D7FF] bg-clip-text text-transparent">Lokesh Notes</span>?
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7">
          {cards.map((card, i) => (
            <InfoCard key={i} {...card} index={i} />
          ))}
        </div>

        {/* Bottom highlight */}
        <div ref={btmRef} className={`mt-10 text-center md:mt-12 transition-all duration-700 ${btmVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#006DFF]/10 bg-[#006DFF]/[0.03] px-6 py-3 sm:px-8 sm:py-3.5">
            <span className="text-xl sm:text-2xl">🚀</span>
            <p className="text-[14px] font-medium text-gray-700 sm:text-[15px]">
              Start your journey — master{" "}
              <span className="font-semibold text-[#006DFF]">MERN, Java & DSA</span> with us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyInfo;