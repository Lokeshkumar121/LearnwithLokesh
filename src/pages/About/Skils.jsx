import { skills } from "./Skildata";
import SkillCard from "./SkillCard";
const Skils = () => {
  return (
        <div className="bg-gray-50/70 px-6 py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl md:px-8">
          <div className="mb-10 text-center md:mb-12 lg:mb-14">
            <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#006DFF] sm:text-[12px]">My Expertise</p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Core <span className="bg-gradient-to-r from-[#006DFF] to-[#00D7FF] bg-clip-text text-transparent">Skills</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
            {skills.map((s, i) => (
              <SkillCard key={i} {...s} index={i} />
            ))}
          </div>
        </div>
      </div>
  )
}

export default Skils