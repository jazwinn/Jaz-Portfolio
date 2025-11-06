import "./index.css"
import ProjectCard from "./Components/ProjectCard"

export default function Project(){
    return(
        <>
            <div id="Project" className="pt-10 pb-10 px-80">
                <div className="flex flex-col w-full">
                    <div className="flex justify-center">
                        <h1 className="text-white text-5xl font-bold font-Satoshi">My Projects</h1>
                    </div>
                    <div className="flex justify-center flex-wrap pt-10 gap-10">
                        <ProjectCard projTitle='OpenCV Push-up Counter' imgLink='src\assets\PushUp.png' gitLink='https://github.com/jazwinn/OpenCV-ELISS-PushUpCounter' projDesc="A Push-Up assistant inspired by Singapore's ELISS machine, built using YOLO pose estimation, OpenCV, and custom biomechanics logic." />
                        <ProjectCard projTitle='Stock Viewer Web Application' imgLink='src\assets\StockWebApp.jpeg' gitLink='https://github.com/jazwinn/React-Web-Stock-Viewer' projDesc='A web application that calls on APIs to view stock prices, company news, and AI-generated summaries. The backend is built with Node.js, while the frontend is built with React and Tailwind.' />
                        <ProjectCard projTitle='Inventory Manager' imgLink='src\assets\InventoryManager.jpeg' gitLink='https://github.com/jazwinn/Inventory-Web-Application' projDesc='Full-stack CRUD project using Java, Spring Boot (REST API), HTML/CSS/JavaScript for the frontend, and SQL for database management.' />
                        <ProjectCard projTitle='Procedural Cave Generation' imgLink='src\assets\CaveGeneration.jpeg' gitLink='https://github.com/jazwinn/Procedural-Cave-Generation' projDesc='A cave terrain generation system developed in C++20 and OpenGL to produce a realistic 3D cave system. This system implemented complex algorithms and data structures to deliver performance and visual realism.' />
                        <ProjectCard projTitle='3D Game Engine' imgLink='src\assets\3DGameEngine.jpeg' gitLink='https://github.com/jazwinn/Kos-Engine-2.0' projDesc='Custom 3D game engine in C++ build from the first Engine. Uses Entity Component System(ECS) Architecture, C++ scripting, custom compile time reflection.' />
                        <ProjectCard projTitle='2D Game Engine' imgLink='src\assets\2DGameEngine.jpeg' gitLink='https://github.com/jazwinn/Kos-Engine' projDesc='Custom 2D game engine in C++. Uses Entity Component System(ECS) Architecture ,C# scripting, custom compile time reflection.' />
                        <ProjectCard projTitle='Camera Culling' imgLink='src\assets\CameraCulling.jpeg' gitLink='https://github.com/jazwinn/Spatial-Data-Structure-using-Bounding-Volume-Hierarchy-BVH-' projDesc='Demonstrating Improving performance for rendering 3D objects through the use of Bounding Volume Hierarchy.' />
                    </div>
                </div>
                <div className="flex flex-col w-full pt-20">
                    <div className="flex justify-center">
                        <h1 className="text-white text-5xl font-bold font-Satoshi">Smaller Works</h1>
                    </div>
                    <div className="flex justify-center flex-wrap pt-10 gap-10">
                        <ProjectCard projTitle='OpenCV Document Reader' imgLink='src\assets\DocumentReader.png' gitLink='https://github.com/jazwinn/OpenCV-Document-Reader' projDesc="Scans and converts Document to text." />
                        <ProjectCard projTitle='Portfolio Site' imgLink='src\assets\Portfolio.jpeg' gitLink='https://github.com/jazwinn/Jaz-Portfolio' projDesc='The very site in which your are looking at.' />
                    </div>
                </div>
            </div>
        </>
    )
}