import { useRef, useState, useEffect } from "react";
import JsSection from "./JsSections";

import ResourcesSection from "./ResourcesSection";
const Js = () => {
    const contentRef = useRef(null);
    const [scrollDir, setScrollDir] = useState("down");
    const [activeSection, setActiveSection] = useState("intro");


    useEffect(() => {
        const handleScroll = () => {
            if (!contentRef.current) return;
            const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
            setScrollDir(scrollTop < 200 ? "down" : "up");

            const sections = contentRef.current.querySelectorAll("[data-section]");
            let current = "intro";
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150) {
                    current = section.getAttribute("data-section");
                }
            });
            setActiveSection(current);
        };
        contentRef.current?.addEventListener("scroll", handleScroll);
        return () => contentRef.current?.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleScrollToggle = () => {
        if (!contentRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        if (scrollTop < 200) {
            contentRef.current.scrollTo({ top: scrollHeight - clientHeight, behavior: "smooth" });
        } else {
            contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="bg-[#f8fafc] min-h-screen">
            {/* ===== CONTENT AREA ===== */}
            <div
                ref={contentRef}
                className="mx-auto max-w-6xl px-4 py-8 md:px-6 lg:px-8 mt-15 "
                style={{ maxHeight: "calc(100vh - 140px)", overflowY: "auto" }}
            >

                {JsSection.map((section) => (
  <section
    key={section.id}
    data-section={section.id}
    id={section.id}
    className={`mb-8 ${
      section.isFinish
        ? ""
        : "rounded-2xl bg-white p-6 shadow-sm sm:p-8"
    }`}
  >

    {/* ===== FINISH SECTION ===== */}
    {section.isFinish ? (
      <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-[#6a11cb] to-[#2575fc] py-20 px-6 text-center">

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          {section.title}
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-white/90 leading-relaxed mb-10">
          {section.description}
        </p>

        <a
  href={section.buttonLink}
  className="relative z-20 inline-block bg-white text-[#2575fc] font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 shadow-xl"
>
  {section.buttonText}
</a>

        {/* SVG WAVE */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,256L60,224C120,192,240,128,360,112C480,96,600,128,720,165.3C840,203,960,245,1080,240C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    ) : (
      <>
        {/* ===== NORMAL SECTION ===== */}
        <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
          {section.title}
        </h2>

        <p className="mb-6 text-[14px] leading-relaxed text-gray-600 sm:text-[15px]">
          {section.description}
        </p>

        {/* Images */}
        <div className="space-y-4">
          {section.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={section.title}
              className="w-full rounded-xl"
            />
          ))}
        </div>

        {/* Code Block */}
        {section.code && (
          <div className="mt-6 rounded-xl bg-[#1e293b] p-5 overflow-x-auto">
            <pre className="text-[13px] leading-relaxed sm:text-sm text-[#f1f5f9] font-mono">
              {section.code}
            </pre>
          </div>
        )}
      </>
    )}
  </section>
))}
<ResourcesSection />
            </div>
            

            {/* ===== SCROLL TOGGLE BUTTON ===== */}
            <button
                onClick={handleScrollToggle}
                className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#0f172a] text-white text-xl shadow-xl transition-all hover:scale-110 hover:bg-[#2563eb] sm:bottom-8 sm:right-8 sm:h-14 sm:w-14 sm:text-2xl"
            >
                {scrollDir === "down" ? (
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7v-10" /></svg>
                ) : (
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v10" /></svg>
                )}
            </button>

        </div>
    );
};

export default Js;