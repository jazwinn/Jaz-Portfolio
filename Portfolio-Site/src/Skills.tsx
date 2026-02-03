import "./index.css";
import { FaCode, FaServer, FaTools, FaDatabase, FaPaintBrush, FaLayerGroup } from "react-icons/fa";

export default function Skills() {
    const skillCategories = [
        {
            icon: <FaCode className="text-4xl text-white" />,
            title: "Language",
            skills: ["C++", "C", "Java", "Python", "JavaScript"],
        },
        {
            icon: <FaPaintBrush className="text-4xl text-white" />,
            title: "Front End",
            skills: ["HTML", "CSS", "React", "Tailwind"],
        },
        {
            icon: <FaLayerGroup className="text-4xl text-white" />,
            title: "Frameworks and Libraries",
            skills: ["OpenGL", "OpenCV", "FFMPEG", "Spring Boot", "GoogleTest", "ImGui"],
        },
        {
            icon: <FaDatabase className="text-4xl text-white" />,
            title: "Database",
            skills: ["MySQL", "MongoDB"],
        },
        {
            icon: <FaTools className="text-4xl text-white" />,
            title: "Tools",
            skills: ["Github", "Bitbucket", "CI/CD", "CMake", "Docker"],
        },
        {
            icon: <FaServer className="text-4xl text-white" />,
            title: "Concepts",
            skills: ["OOP", "DSA", "Spatial Data Structure", "Graphics Pipeline", "Engine Architecture"],
        },
    ];

    return (
        <section
            id="skills"
            className="py-20 px-6 sm:px-12 md:px-20 lg:px-40 bg-white"
        >
            {/* Section Title */}
            <div className="flex flex-col items-center mb-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#1e293b] font-Satoshi text-center mb-4">
                    Skills & Expertise
                </h2>
                <p className="text-lg text-[#64748b] text-center max-w-2xl">
                    Tech stack and tools I work with to bring ideas to life
                </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fadeIn"
                    >
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-xl gradient-blue-purple flex items-center justify-center mb-4">
                            {category.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-[#1e293b] mb-3 font-Satoshi">
                            {category.title}
                        </h3>

                        {/* Skills List */}
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="text-sm text-[#64748b] bg-[#f1f5f9] px-3 py-1 rounded-lg"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
