import "../index.css";

interface ProjectProp {
    imgLink: string;
    projTitle: string;
    projDesc: string;
    gitLink: string;
    technologies?: string[];
    liveLink?: string;
}

export default function ProjectCard({
    imgLink,
    projTitle,
    projDesc,
    gitLink,
    technologies = [],
    liveLink,
}: ProjectProp) {
    return (
        <div className="rounded-2xl flex flex-col bg-white border border-[#e2e8f0] shadow-sm hover:shadow-xl transition-all duration-300 w-full max-w-sm overflow-hidden">
            <img
                src={imgLink}
                alt={projTitle}
                className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#1e293b] mb-3 font-Satoshi">
                    {projTitle}
                </h3>
                <p className="text-[#64748b] mb-4 leading-relaxed flex-1">
                    {projDesc}
                </p>

                {/* Technology Tags */}
                {technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="text-xs text-[#6366f1] bg-[#eef2ff] px-2 py-1 rounded-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* Links */}
                <div className="flex gap-3">
                    {liveLink && (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={liveLink}
                            className="flex-1 text-center px-4 py-2 bg-[#6366f1] text-white rounded-lg font-medium hover:bg-[#4f46e5] transition-colors duration-300"
                        >
                            Visit Site
                        </a>
                    )}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={gitLink}
                        className={`${liveLink ? "flex-1" : "w-full"
                            } text-center px-4 py-2 border-2 border-[#6366f1] text-[#6366f1] rounded-lg font-medium hover:bg-[#eef2ff] transition-colors duration-300`}
                    >
                        View Code
                    </a>
                </div>
            </div>
        </div>
    );
}
