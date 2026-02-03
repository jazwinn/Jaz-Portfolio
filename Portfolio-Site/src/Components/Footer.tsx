import "../index.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1e293b] text-white py-12 px-6 sm:px-12 md:px-20 lg:px-40">
            <div className="max-w-6xl mx-auto">
                {/* Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Left Section - Branding */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold font-Satoshi mb-2">Jaz Winn</h3>
                        <p className="text-[#94a3b8]">Full Stack Developer</p>
                    </div>

                    {/* Middle Section - Quick Links */}
                    <div className="flex gap-8">
                        <a
                            href="#hero"
                            className="text-[#94a3b8] hover:text-white transition-colors duration-300"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-[#94a3b8] hover:text-white transition-colors duration-300"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="text-[#94a3b8] hover:text-white transition-colors duration-300"
                        >
                            Projects
                        </a>
                        <a
                            href="#skills"
                            className="text-[#94a3b8] hover:text-white transition-colors duration-300"
                        >
                            Skills
                        </a>
                        <a
                            href="#contact"
                            className="text-[#94a3b8] hover:text-white transition-colors duration-300"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Right Section - Social Links */}
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/jazwinn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-[#334155] flex items-center justify-center hover:bg-[#6366f1] transition-colors duration-300"
                            aria-label="GitHub"
                        >
                            <FaGithub className="text-lg" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jazwinn-ng/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-[#334155] flex items-center justify-center hover:bg-[#6366f1] transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="text-lg" />
                        </a>
                        <a
                            href="mailto:ngjazwin@gmail.com"
                            className="w-10 h-10 rounded-full bg-[#334155] flex items-center justify-center hover:bg-[#6366f1] transition-colors duration-300"
                            aria-label="Email"
                        >
                            <FaEnvelope className="text-lg" />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#334155] my-8"></div>

                {/* Bottom Section - Copyright */}
                <div className="text-center text-[#94a3b8] text-sm">
                    <p>© {currentYear} Jaz Winn. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
