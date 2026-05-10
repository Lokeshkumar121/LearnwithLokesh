import { useRef, useState, useEffect } from "react";
const FeatureCard = ({ feature, index }) => {
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
      className={`group flex flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-700 hover:-translate-y-1.5 hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-100/80 sm:p-8 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#006DFF]/[0.06] text-[#006DFF] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#006DFF]/[0.1] sm:mb-6 sm:h-16 sm:w-16">
        {feature.icon}
      </span>

      {/* Title */}
      <h3 className="mb-3 text-lg font-bold text-gray-900 transition-colors group-hover:text-[#006DFF] sm:text-xl">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="flex-1 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
        {feature.desc}
      </p>
    </div>
  );
};

export default FeatureCard;