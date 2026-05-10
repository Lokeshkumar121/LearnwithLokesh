import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MaterialCard = ({ item, index, onView }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-700 hover:-translate-y-1.5 hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-100/80 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${item.color} transition-all duration-500 group-hover:h-2`}></div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#006DFF]/[0.06] text-[#006DFF] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#006DFF]/[0.1] sm:mb-6 sm:h-16 sm:w-16">
          {item.icon}
        </span>

        <h3 className="mb-2.5 text-lg font-bold text-gray-900 transition-colors group-hover:text-[#006DFF] sm:text-xl">
          {item.title}
        </h3>

        <p className="mb-5 flex-1 text-[13px] leading-relaxed text-gray-500 sm:text-[14px]">
          {item.desc}
        </p>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="flex items-center gap-1.5 text-[12px] text-gray-400 sm:text-[13px]">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            {item.topics} Topics
          </span>
            {/* MERN = page redirect, Java = page redirect, Interview = modal */}
          {item.title === "MERN Stack Notes" ? (
            <Link to="/mern-stack" className="flex items-center gap-1.5 text-[12px] font-semibold text-[#006DFF] sm:text-[13px]">
              View All
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          ) : item.title === "Java & DSA Notes" ? (
            <Link to="/java-stack" className="flex items-center gap-1.5 text-[12px] font-semibold text-[#006DFF] sm:text-[13px]">
              View All
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          ) : (
            <button onClick={() => onView(item)} className="flex items-center gap-1.5 text-[12px] font-semibold text-[#006DFF] sm:text-[13px]">
              View
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MaterialCard;