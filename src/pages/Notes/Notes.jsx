import { useRef, useState, useEffect } from "react";
import materials from "./Materials";
import MaterialCard from "./MaterialCard";
const Notes = () => {
  const headRef = useRef(null);
  const [headVis, setHeadVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeadVis(true); }, { threshold: 0.2 });
    if (headRef.current) obs.observe(headRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-white px-6 py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl md:px-8">

        {/* Heading */}
        <div ref={headRef} className={`mb-10 text-center md:mb-12 lg:mb-14 transition-all duration-700 ${headVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#006DFF] sm:text-[12px]">Resources</p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Study <span className="bg-gradient-to-r from-[#006DFF] to-[#00D7FF] bg-clip-text text-transparent">Material</span>
          </h2>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {materials.map((item, i) => (
            <MaterialCard key={i} item={item} index={i} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Notes;