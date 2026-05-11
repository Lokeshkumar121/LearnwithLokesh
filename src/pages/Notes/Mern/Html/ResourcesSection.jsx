// src/components/ResourcesSection.jsx

import resourcesData from "./resourcesData";

const ResourcesSection = () => {
  return (
    <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Assignments & Projects html 
      </h2> 

      <div className="grid gap-5 sm:grid-cols-2">
        
        {resourcesData.map((item, index) => (
          
          <div
            key={index}
            className="rounded-2xl border border-gray-200 p-5 transition-all hover:-translate-y-1 hover:border-[#006DFF]/40 hover:shadow-lg"
          >
            
            <div className="mb-3 flex items-center justify-between">
              
              <span className="rounded-full bg-[#006DFF]/10 px-3 py-1 text-xs font-semibold text-[#006DFF]">
                {item.type}
              </span>

            </div>

            <h3 className="mb-4 text-lg font-bold text-gray-900">
              {item.title}
            </h3>

            <a
              href={item.pdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#006DFF] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#0057cc]"
            >
              Open PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourcesSection;