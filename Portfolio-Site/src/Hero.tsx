import "./index.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 sm:px-12 md:px-20 lg:px-40 bg-white"
    >
      <div className="flex flex-col items-center text-center max-w-4xl">
        {/* Circular Avatar with Initials */}
        <div className="mb-6 animate-fadeIn">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full gradient-blue-purple flex items-center justify-center shadow-lg">
            <span className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-Satoshi">
              JW
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1e293b] mb-4 font-Satoshi animate-slideUp">
          Full Stack Developer
        </h1>

        {/* Subtitle/Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-[#64748b] mb-6 max-w-2xl leading-relaxed animate-fadeIn">
          Crafting elegant solutions to complex problems. I specialize in
          building robust applications across the full stack, with expertise in modern web
          technologies and system design.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mb-8 animate-fadeIn">
          <a
            href="https://github.com/jazwinn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border-2 border-[#e2e8f0] flex items-center justify-center hover:border-[#6366f1] hover:text-[#6366f1] transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/jazwinn-ng/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border-2 border-[#e2e8f0] flex items-center justify-center hover:border-[#6366f1] hover:text-[#6366f1] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="mailto:ngjazwin@gmail.com"
            className="w-10 h-10 rounded-full border-2 border-[#e2e8f0] flex items-center justify-center hover:border-[#6366f1] hover:text-[#6366f1] transition-all duration-300"
            aria-label="Email"
          >
            <FaEnvelope className="text-lg" />
          </a>
        </div>

        {/* "I am a Coder" indicator */}
        <div className="text-sm text-[#94a3b8] animate-fadeIn flex items-center gap-2">
          <span>I am a Coder</span>
          <span className="inline-block w-2 h-2 bg-[#6366f1] rounded-full animate-pulse"></span>
        </div>
      </div>
    </section>
  );
}

