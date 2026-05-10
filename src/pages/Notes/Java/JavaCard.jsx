import { useRef, useState, useEffect } from "react";
const JavaCard = ({ item, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-700 hover:-translate-y-1.5 hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-100/80 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${item.color} transition-all duration-500 group-hover:h-1.5`}></div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md sm:mb-5 sm:h-14 sm:w-14`}>
          {item.icon}
        </span>

        <h3 className="mb-2 text-base font-bold text-gray-900 transition-colors group-hover:text-[#006DFF] sm:text-lg">
          {item.title}
        </h3>

        <p className="flex-1 text-[12px] leading-relaxed text-gray-500 sm:text-[13px]">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default JavaCard;