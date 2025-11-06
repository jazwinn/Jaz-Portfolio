import "./index.css"
import SkillCard from "./Components/SkillCard"

export default function About(){
    return(
        <>
            <div id="About" className="pt-10 pb-10 px-80">
                <div className="flex w-full">
                    <div className="pl-8 pr-8 flex justify-center w-1/2">
                        <img src="src/assets/Me2.JPG" className="w-[100%] h-auto object-cover animate-slideInRight"></img>
                    </div>
                    <div className="flex flex-col justify-center text-white w-1/2 pl-4 pr-4 animate-slideInLeft">

                        <h1 className="text-5xl mb-4 font-bold font-Satoshi">About Me</h1>
                        <p className="text-2xl text-[#c7c7c7] mb-5 font-semibold">I'm a developer passionate about building software that is intuitive, efficient, and meaningful. I enjoy exploring new tools, improving my skills, and creating projects that challenge and inspire me.</p>
                    </div>
                </div>
                <div className="flex flex-col w-full pt-10">
                    <div className="flex justify-center">
                        <h1 className="text-white text-5xl font-bold font-Satoshi">My Tech Stack and Skills</h1>
                    </div>
                    <div className="flex justify-center flex-wrap pt-10 gap-10">
                        <SkillCard title="Language" skills={["C++", "C","Java", "Python" ,"JavaScript"]}/>
                        <SkillCard title="Front End" skills={["HTML", "CSS", "React", "Tailwind"]}/>
                        <SkillCard title="Back End" skills={["REST API", "Spring Boot"]}/>
                        <SkillCard title="Frameworks and Libraries" skills={["OpenGL", "FFMPEG","OpenCV", "GoogleTest"]}/>
                        <SkillCard title="Tools" skills={["Github", "Bitbucket", "Cmake", "Docker"]}/>
                        <SkillCard title="Concepts" skills={["OOP", "DSA", "Spatial Data Structure", "Graphics Pipeline","Engine Architecture"]}/>
                    </div>
                </div>
            </div>
        </>
    )
}