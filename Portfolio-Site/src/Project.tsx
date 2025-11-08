import "./index.css"
import ProjectCard from "./Components/ProjectCard"

import PushUpImg from "./assets/PushUp.png";
import StockWebAppImg from "./assets/StockWebApp.jpeg";
import InventoryManagerImg from "./assets/InventoryManager.jpeg";
import CaveGenerationImg from "./assets/CaveGeneration.jpeg";
import GameEngine3DImg from "./assets/3DGameEngine.jpeg";
import GameEngine2DImg from "./assets/2DGameEngine.jpeg";
import CameraCullingImg from "./assets/CameraCulling.jpeg";
import DocumentReaderImg from "./assets/DocumentReader.png";
import PortfolioImg from "./assets/Portfolio.jpeg";

export default function Project(){
    return(
        <>
            <div id="Project" className="pt-10 pb-10 px-6 sm:px-12 md:px-20 lg:px-40 xl:px-80">
                <div className="flex flex-col w-full">
                    <div className="flex justify-center">
                        <h1 className="text-white text-5xl font-bold font-Satoshi">My Projects</h1>
                    </div>
                    <div className="flex justify-center flex-wrap pt-10 gap-10">
                        <ProjectCard projTitle='OpenCV Push-up Counter' imgLink={PushUpImg} gitLink='https://github.com/jazwinn/OpenCV-ELISS-PushUpCounter' projDesc="A Push-Up assistant inspired by Singapore's ELISS machine, built using YOLO pose estimation, OpenCV, and custom biomechanics logic." />
                        <ProjectCard projTitle='Stock Viewer Web Application' imgLink={StockWebAppImg} gitLink='https://github.com/jazwinn/React-Web-Stock-Viewer' projDesc='A web application that calls on APIs to view stock prices, company news, and AI-generated summaries. The backend is built with Node.js, while the frontend is built with React and Tailwind.' />
                        <ProjectCard projTitle='Inventory Manager' imgLink={InventoryManagerImg} gitLink='https://github.com/jazwinn/Inventory-Web-Application' projDesc='Full-stack CRUD project using Java, Spring Boot (REST API), HTML/CSS/JavaScript for the frontend, and SQL for database management.' />
                        <ProjectCard projTitle='Procedural Cave Generation' imgLink={CaveGenerationImg} gitLink='https://github.com/jazwinn/Procedural-Cave-Generation' projDesc='A cave terrain generation system developed in C++20 and OpenGL to produce a realistic 3D cave system. This system implemented complex algorithms and data structures to deliver performance and visual realism.' />
                        <ProjectCard projTitle='3D Game Engine' imgLink={GameEngine3DImg} gitLink='https://github.com/jazwinn/Kos-Engine-2.0' projDesc='Custom 3D game engine in C++ build from the first Engine. Uses Entity Component System(ECS) Architecture, C++ scripting, custom compile time reflection.' />
                        <ProjectCard projTitle='2D Game Engine' imgLink={GameEngine2DImg} gitLink='https://github.com/jazwinn/Kos-Engine' projDesc='Custom 2D game engine in C++. Uses Entity Component System(ECS) Architecture ,C# scripting, custom compile time reflection.' />
                        <ProjectCard projTitle='Camera Culling' imgLink={CameraCullingImg} gitLink='https://github.com/jazwinn/Spatial-Data-Structure-using-Bounding-Volume-Hierarchy-BVH-' projDesc='Demonstrating Improving performance for rendering 3D objects through the use of Bounding Volume Hierarchy.' />
                    </div>
                </div>
                <div className="flex flex-col w-full pt-20">
                    <div className="flex justify-center">
                        <h1 className="text-white text-5xl font-bold font-Satoshi">Smaller Works</h1>
                    </div>
                    <div className="flex justify-center flex-wrap pt-10 gap-10">
                        <ProjectCard projTitle='OpenCV Document Reader' imgLink={DocumentReaderImg} gitLink='https://github.com/jazwinn/OpenCV-Document-Reader' projDesc="Scans and converts Document to text." />
                        <ProjectCard projTitle='Portfolio Site' imgLink={PortfolioImg} gitLink='https://github.com/jazwinn/Jaz-Portfolio' projDesc='The very site in which your are looking at.' />
                    </div>
                </div>
            </div>
        </>
    )
}