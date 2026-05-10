
import Course from "./Course/Course";
import Cta from "./Cta/Cta";
import Feature from "./Feature/Feature";
import Hero from "./Hero/Hero";
import StudyInfo from "./Study/StudyInfo";
const Home = () => {
    return (
        <div className="bg-gray-50 min-h-screen mt-20 flex flex-col justify-center items-center text-center px-6">
            {/* Hero Section */}
            <Hero />
            {/* CTA Buttons */}
            <Cta />
            {/* Course Section */}
            <Course />
            {/* Feature Section */}
            <Feature />
            {/* Footer Section  */}
            <StudyInfo />
        </div>
    );
};

export default Home;
