import { useRef, useState, useEffect } from "react";
import materials from "./Materials";
import MaterialCard from "./MaterialCard";

const Modal = ({ item, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setVisible(true), 10);
    return () => { clearTimeout(t); document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl transition-all duration-300 ${visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${item.color}`}></div>
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#006DFF]/[0.06] text-[#006DFF]">
              {item.icon}
            </span>
            <div>
              <h3 className="text-base font-bold text-gray-900 sm:text-lg">{item.title}</h3>
              <p className="text-[12px] text-gray-400">{item.topics} Topics</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8" style={{ maxHeight: 'calc(85vh - 80px)' }}>
          <div className="space-y-7">
            {item.content.map((section, i) => (
              <div key={i}>
                <h4 className="mb-3 text-[15px] font-bold text-gray-900 sm:text-base">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#006DFF]/[0.07] text-[11px] font-bold text-[#006DFF]">{i + 1}</span>
                  {section.heading}
                </h4>
                <ul className="space-y-2">
                  {section.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-gray-600 sm:text-[14px]">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#006DFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Notes = () => {
  const headRef = useRef(null);
  const [headVis, setHeadVis] = useState(false);
  const [selected, setSelected] = useState(null);

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

        {/* 3 Cards — onView prop add kiya */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {materials.map((item, i) => (
            <MaterialCard key={i} item={item} index={i} onView={setSelected} />
          ))}
        </div>

      </div>

      {/* Modal — selected hone par dikhega */}
      {selected && <Modal item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default Notes;