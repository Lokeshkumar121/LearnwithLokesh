import { useRef, useState, useEffect } from "react";


const Goal = () => {
     const goalRef = useRef(null);
  const [goalVis, setGoalVis] = useState(false);
  useEffect(() => {
    const o2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setGoalVis(true); }, { threshold: 0.2 });
   
    if (goalRef.current) o2.observe(goalRef.current);
    return () => { o2.disconnect(); };
  }, []);
  return (
    <div>
         <div ref={goalRef} className="bg-gray-50/70 px-6 py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl md:px-8">
          <div className={`overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white px-8 py-10 text-center shadow-sm sm:px-14 sm:py-14 md:px-16 md:py-16 lg:rounded-3xl transition-all duration-700 ${goalVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#006DFF]/[0.03] blur-sm sm:h-64 sm:w-64"></div>
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#00D7FF]/[0.03] blur-sm sm:h-52 sm:w-52"></div>

            <div className="relative">
              <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#006DFF]/[0.07] text-2xl sm:mb-6 sm:h-16 sm:w-16 sm:text-3xl">🚀</span>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">My Goal</h2>
              <p className="mx-auto mb-8 max-w-xl text-[15px] leading-relaxed text-gray-500 sm:mb-10 sm:text-[17px] md:text-lg">
                To keep learning, building, and sharing knowledge to help others grow in tech. I believe in community-driven learning and want to make quality education accessible to everyone.
              </p>
              <a href="/" className="group relative inline-flex h-13 items-center gap-2.5 overflow-hidden rounded-xl bg-[#006DFF] px-8 text-[15px] font-semibold text-white shadow-lg shadow-[#006DFF]/15 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#006DFF]/20 sm:h-14 sm:px-10">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>
                <svg className="relative h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                <span className="relative">Back to Home</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Goal