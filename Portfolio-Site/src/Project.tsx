import "./index.css";
import ProjectCard from "./Components/ProjectCard";

import PushUpImg from "./assets/PushUp.png";
import StockWebAppImg from "./assets/StockWebApp.jpeg";
import InventoryManagerImg from "./assets/InventoryManager.jpeg";
import CaveGenerationImg from "./assets/CaveGeneration.jpeg";
import GameEngine3DImg from "./assets/3DGameEngine.jpeg";
import GameEngine2DImg from "./assets/2DGameEngine.jpeg";
import CameraCullingImg from "./assets/CameraCulling.jpeg";
import DocumentReaderImg from "./assets/DocumentReader.png";
import GraphicEngineImg from "./assets/3dEngine.jpeg";

export default function Project() {
    return (
        <section
            id="projects"
            className="py-20 px-6 sm:px-12 md:px-20 lg:px-40 bg-[#f8f9fa]"
        >
            {/* Featured Projects */}
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-6">
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#1e293b] font-Satoshi text-center mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-[#64748b] text-center max-w-2xl">
                        A selection of projects I've created and contributed to
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    <ProjectCard
                        projTitle="OpenCV Push-up Counter"
                        imgLink={PushUpImg}
                        gitLink="https://github.com/jazwinn/OpenCV-ELISS-PushUpCounter"
                        projDesc="A Push-Up assistant inspired by Singapore's ELISS machine, built using YOLO pose estimation, OpenCV, and custom biomechanics logic."
                        technologies={["Python", "OpenCV", "YOLO", "Computer Vision"]}
                    />
                    <ProjectCard
                        projTitle="Stock Viewer Web App"
                        imgLink={StockWebAppImg}
                        gitLink="https://github.com/jazwinn/React-Web-Stock-Viewer"
                        projDesc="Web application that calls APIs to view stock prices, company news, and AI-generated summaries."
                        technologies={["React", "Node.js", "Tailwind", "APIs"]}
                    />
                    <ProjectCard
                        projTitle="Inventory Manager"
                        imgLink={InventoryManagerImg}
                        gitLink="https://github.com/jazwinn/Inventory-Web-Application"
                        projDesc="Full-stack CRUD project using Spring Boot REST API with SQL database management."
                        technologies={["Java", "Spring Boot", "MySQL", "REST"]}
                    />
                    <ProjectCard
                        projTitle="Procedural Cave Generation"
                        imgLink={CaveGenerationImg}
                        gitLink="https://github.com/jazwinn/Procedural-Cave-Generation"
                        projDesc="Cave terrain generation system in C++ and OpenGL producing realistic 3D cave systems."
                        technologies={["C++", "OpenGL", "Algorithms"]}
                    />
                    <ProjectCard
                        projTitle="3D Graphics Engine"
                        imgLink={GraphicEngineImg}
                        gitLink="https://github.com/jazwinn/Graphics-Engine"
                        projDesc="Custom 3D graphics engine built with OpenGL supporting point, spot and directional lighting."
                        technologies={["C++", "OpenGL", "GLSL"]}
                    />
                    <ProjectCard
                        projTitle="3D Game Engine"
                        imgLink={GameEngine3DImg}
                        gitLink="https://github.com/jazwinn/Kos-Engine-2.0"
                        projDesc="Custom 3D game engine using ECS Architecture and C++ scripting with compile-time reflection."
                        technologies={["C++", "ECS", "Game Dev"]}
                    />
                </div>
            </div>

            {/* Smaller Works */}
            <div className="max-w-6xl mx-auto mt-20">
                <div className="flex justify-center mb-12">
                    <h3 className="text-3xl sm:text-4xl font-bold text-[#1e293b] font-Satoshi">
                        Smaller Works
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProjectCard
                        projTitle="2D Game Engine"
                        imgLink={GameEngine2DImg}
                        gitLink="https://github.com/jazwinn/Kos-Engine"
                        projDesc="Custom 2D game engine using ECS Architecture and C# scripting."
                        technologies={["C++", "C#", "ECS"]}
                    />
                    <ProjectCard
                        projTitle="Camera Culling"
                        imgLink={CameraCullingImg}
                        gitLink="https://github.com/jazwinn/Spatial-Data-Structure-using-Bounding-Volume-Hierarchy-BVH-"
                        projDesc="Improving 3D rendering performance through Bounding Volume Hierarchy."
                        technologies={["C++", "BVH", "Optimization"]}
                    />
                    <ProjectCard
                        projTitle="Document Reader"
                        imgLink={DocumentReaderImg}
                        gitLink="https://github.com/jazwinn/OpenCV-Document-Reader"
                        projDesc="Scans and converts documents to text using OpenCV."
                        technologies={["Python", "OpenCV", "OCR"]}
                    />
                </div>
            </div>
        </section>
    );
}
