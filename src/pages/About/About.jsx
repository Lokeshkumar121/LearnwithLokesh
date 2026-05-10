import HErosec from "./HErosec";
import Goal from "./Goal";
import Skils from "./Skils";
import Journey from "./Journey";
const About = () => {
  return (
    <div className="bg-white">

      {/* ===== HERO SECTION ===== */}
      <HErosec />


      {/* ===== SKILLS SECTION ===== */}
      <Skils />


      {/* ===== JOURNEY TIMELINE ===== */}
      <Journey />


      {/* ===== GOAL SECTION ===== */}
      <Goal />

    </div>
  );
};

export default About;