import { useRef, useState, useEffect } from "react";
const CourseCard = ({ course, index }) => {
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
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Top color bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${course.color} transition-all duration-500 group-hover:h-2`}></div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        {/* Icon + Level */}
        <div className="mb-5 flex items-start justify-between">
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-gray-100 sm:h-16 sm:w-16 sm:text-4xl">
            {course.icon}
          </span>
          <span className="rounded-lg bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-500 sm:px-3 sm:py-1.5 sm:text-[12px]">
            {course.level}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-lg font-bold text-gray-900 transition-colors group-hover:text-[#006DFF] sm:text-xl">
          {course.title}
        </h3>

        {/* Description */}
        <p className="mb-5 flex-1 text-[13px] leading-relaxed text-gray-500 sm:text-[14px]">
          {course.description}
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="flex items-center gap-1.5 text-[12px] text-gray-400 sm:text-[13px]">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {course.lessons} Lessons
          </span>
          <button className="flex items-center gap-1.5 text-[13px] font-semibold text-[#006DFF] sm:text-[14px]">
            Start
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;