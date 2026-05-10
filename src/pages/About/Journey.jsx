import TimelineItem from "./TimelineItem";
import {  timeline } from "./Skildata";

const Journey = () => {
  return (
    <div className="bg-white px-6 py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl md:px-8">
          <div className="mb-10 text-center md:mb-12 lg:mb-14">
            <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#006DFF] sm:text-[12px]">My Path</p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Learning <span className="bg-gradient-to-r from-[#006DFF] to-[#00D7FF] bg-clip-text text-transparent">Journey</span>
            </h2>
          </div>

          <div className="mx-auto max-w-2xl space-y-8">
            {timeline.map((t, i) => (
              <TimelineItem key={i} {...t} index={i} />
            ))}
          </div>
        </div>
      </div>
  )
}

export default Journey