import "../index.css"

interface CardProp{
    title: string;
    skills: string[];
}

export default function Card({title, skills}: CardProp){
    return (
        <div className="p-4 rounded-2xl bg-[#1B1933] shadow-lg w-[20rem]">
            <h2 className="flex justify-center text-xl font-bold text-white mb-3">{title}</h2>
            <ul className="flex flex-wrap justify-center gap-2">
                {skills.map((skill, index) => (
                    <li 
                        key={index}
                        className="bg-[#524DD3] px-3 py-1 rounded-xl text-white text-sm"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}