import "../index.css"

interface ProjectProp{
    imgLink: string;
    projTitle: string;
    projDesc: string;
    gitLink: string;
}

export default function ProjectCard({imgLink, projTitle ,projDesc, gitLink}: ProjectProp){
    return (
        <div className=" rounded-2xl flex flex-col bg-[#1B1933] shadow-lg w-[25%]">
            <img src={imgLink} alt={projTitle} className="w-full h-48 object-cover rounded-t-2xl"/>
            <div className="p-4 flex flex-col flex-1 text-white">
                <h2 className="flex justify-center text-xl font-bold mb-3">{projTitle}</h2>
                <p className="">
                  {projDesc}  
                </p>
                <a
                target="_blank"
                href={gitLink}
                className="text-[#A68EFF] flex justify-end font-medium hover:underline mt-auto">View on Github →
                </a>
            </div>
        </div>
    );
}