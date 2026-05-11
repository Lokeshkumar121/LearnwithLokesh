import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { courseRoutes } from "./courseRoutes";
const TechCard = ({ item, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  // Dynamic Route Object


  // Current Card Data
  const currentCourse = courseRoutes[item.title];

  return (
    <div
      ref={ref}
      className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-700 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-gray-100/80 
      
      ${
        currentCourse
          ? "border-[#006DFF]/30 hover:border-[#006DFF]/50"
          : "border-gray-200 hover:border-gray-300"
      }

      bg-white 
      
      ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Top Gradient Line */}
      <div
        className={`h-1 w-full bg-gradient-to-r ${item.color} transition-all duration-500 group-hover:h-1.5`}
      ></div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* Icon */}
        <span
          className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md sm:mb-5 sm:h-14 sm:w-14`}
        >
          {item.icon}
        </span>

        {/* Title */}
        <h3
          className={`mb-2 text-base font-bold transition-colors sm:text-lg 
          
          ${
            currentCourse
              ? "text-[#006DFF]"
              : "text-gray-900 group-hover:text-[#006DFF]"
          }`}
        >
          {currentCourse ? (
            <Link
              to={currentCourse.route}
              className="underline-offset-2 hover:underline"
            >
              {item.title}
            </Link>
          ) : (
            item.title
          )}
        </h3>

        {/* Description */}
        <p className="flex-1 text-[12px] leading-relaxed text-gray-500 sm:text-[13px]">
          {item.desc}
        </p>

        {/* Dynamic Button */}
        {currentCourse && (
          <div className="mt-4 flex items-center justify-between border-t border-[#006DFF]/10 pt-4">

            <span className="text-[12px] text-[#006DFF] sm:text-[13px]">
              {currentCourse.topics}
            </span>

            <Link
              to={currentCourse.route}
              className="flex items-center gap-1.5 text-[12px] font-semibold text-[#006DFF] sm:text-[13px]"
            >
              Open Notes

              <svg
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

          </div>
        )}

      </div>
    </div>
  );
};

export default TechCard;