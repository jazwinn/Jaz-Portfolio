import "./index.css";
import Me2 from "./assets/Me3.jpg";

export default function About() {
  const skills = ["React", "TypeScript", "Node.js", "Python", "C++", "Java"];

  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-12 md:px-20 lg:px-40 bg-[#f8f9fa]"
    >
      {/* Section Title */}
      <div className="flex justify-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1e293b] font-Satoshi text-center">
          About Me
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
        {/* Image/Code Screenshot */}
        <div className="w-full md:w-1/2 animate-slideInRight">
          <img
            src={Me2}
            alt="About Me"
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 animate-slideInLeft">
          <p className="text-lg text-[#64748b] mb-6 leading-relaxed">
            I'm a <strong className="text-[#1e293b]">Full Stack Developer</strong>{" "}
            with over <strong className="text-[#1e293b]">2 years</strong> of hands-on
            experience in building efficient and scalable applications. I specialize
            in crafting elegant solutions that bridge design and engineering.
          </p>

          <p className="text-lg text-[#64748b] mb-6 leading-relaxed">
            When I'm not coding, you'll find me tinkering with new tools, exploring
            innovative frameworks, or challenging myself with algorithmic puzzles.
            I believe in continuous learning and pushing the boundaries of what's
            possible.
          </p>

          <p className="text-lg text-[#64748b] mb-6 leading-relaxed">
            My passion lies in creating software that is not only{" "}
            <strong className="text-[#1e293b]">functional</strong> and{" "}
            <strong className="text-[#1e293b]">performant</strong>, but also{" "}
            <strong className="text-[#1e293b]">intuitive</strong> and{" "}
            <strong className="text-[#1e293b]">meaningful</strong> to users.
          </p>

          {/* Skill Badges */}
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-[#6366f1] text-white text-sm font-medium hover:bg-[#4f46e5] transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

