import { useRef, useState, useEffect } from "react";
const TimelineItem = ({ year, title, desc, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative pl-8 before:absolute before:left-0 before:top-2 before:h-2.5 before:w-2.5 before:rounded-full before:bg-[#006DFF] after:absolute after:left-[4px] after:top-5 after:h-[calc(100%+8px)] after:w-px after:bg-gray-200 last:after:hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#006DFF] sm:text-[12px]">{year}</p>
      <p className="mb-1 text-[15px] font-bold text-gray-900 sm:text-base">{title}</p>
      <p className="text-[13px] leading-relaxed text-gray-500 sm:text-[14px]">{desc}</p>
    </div>
  );
};

export default TimelineItem;