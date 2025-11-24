import "./index.css";
import SkillCard from "./Components/SkillCard";
import Me2 from "./assets/Me3.jpg";

export default function About() {
  return (
    <section
      id="About"
      className="pt-10 pb-10 px-6 sm:px-12 md:px-20 lg:px-40 xl:px-80"
    >
      {/* About Section */}
      <div className="flex flex-col md:flex-row w-full items-center text-center md:text-left">
        {/* Image */}
        <div className="pl-0 md:pl-8 pr-0 md:pr-8 flex justify-center w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={Me2}
            alt="Portrait"
            className="w-3/4 sm:w-2/3 md:w-full h-auto object-cover rounded-2xl animate-slideInRight"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center text-white w-full md:w-1/2 pl-0 md:pl-4 pr-0 md:pr-4 animate-slideInLeft">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold font-Satoshi">
            No Limits
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-[#c7c7c7] mb-5 font-semibold">
            I'm a developer passionate about building software that is
            intuitive, efficient, and meaningful. I enjoy exploring new tools,
            improving my skills, and creating projects that challenge and
            inspire me.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col w-full pt-16 sm:pt-20">
        <div className="flex justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-Satoshi text-center">
            My Tech Stack and Skills
          </h1>
        </div>

        <div className="flex justify-center flex-wrap pt-10 gap-6 sm:gap-8 md:gap-10">
          <SkillCard
            title="Language"
            skills={["C++", "C", "Java", "Python", "JavaScript"]}
          />
          <SkillCard
            title="Front End"
            skills={["HTML", "CSS", "React", "Tailwind"]}
          />
          <SkillCard
            title="Back End"
            skills={["REST API", "Spring Boot"]}
          />
          <SkillCard
            title="Frameworks and Libraries"
            skills={["OpenGL", "OpenCV", "FFMPEG", "OpenCV", "GoogleTest"]}
          />
          <SkillCard
            title="Database"
            skills={["MySQL", "MongoDB"]}
          />
          <SkillCard
            title="Tools"
            skills={["Github", "Bitbucket", "CI/CD","CMake", "Docker"]}
          />
          <SkillCard
            title="Concepts"
            skills={[
              "OOP",
              "DSA",
              "Spatial Data Structure",
              "Graphics Pipeline",
              "Engine Architecture",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
