import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const Cta = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="px-5 py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div
          className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white px-6 py-10 text-center shadow-sm sm:px-10 sm:py-14 md:px-16 md:py-16 lg:rounded-3xl`}
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#006DFF]/[0.03] blur-sm sm:h-64 sm:w-64"></div>
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#00D7FF]/[0.03] blur-sm sm:h-52 sm:w-52"></div>

          <div className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#006DFF]/[0.07] text-xl sm:mb-6 sm:h-14 sm:w-14 sm:text-2xl">
              🚀
            </span>
            <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Ready to Start Learning?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-[14px] leading-relaxed text-gray-500 sm:mb-10 sm:text-[16px] md:text-lg">
              Join thousands of students already learning MERN, Java & DSA with structured notes and hands-on projects.
            </p>
          </div>

          <div className={`relative flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <Link
              to="/get-started"
              className="group relative inline-flex h-12 w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#006DFF] px-7 text-[14px] font-semibold text-white shadow-lg shadow-[#006DFF]/15 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#006DFF]/20 sm:h-13 sm:w-auto sm:px-9 sm:text-[15px]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>
              <svg className="relative h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              <span className="relative">Get Started</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-gray-200 bg-white px-7 text-[14px] font-semibold text-gray-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 sm:h-13 sm:w-auto sm:px-9 sm:text-[15px]"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;