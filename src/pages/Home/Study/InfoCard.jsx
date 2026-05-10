import { useRef, useState, useEffect } from "react";
const InfoCard = ({ icon, title, text, index }) => {
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
      className={`group flex flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-700 hover:-translate-y-1.5 hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-100/80 sm:p-8 md:p-9 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <span className="mb-4 text-3xl sm:mb-5 sm:text-4xl">{icon}</span>
      <h3 className="mb-3 text-lg font-bold text-gray-900 transition-colors group-hover:text-[#006DFF] sm:text-xl md:text-2xl">
        {title}
      </h3>
      <p className="flex-1 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
        {text}
      </p>
    </div>
  );
};

export default InfoCard;