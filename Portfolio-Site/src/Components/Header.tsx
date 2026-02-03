import "../index.css";
import resume from "../assets/JazWinn_Resume.pdf";
import { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Projects", id: "projects" },
        { name: "Skills", id: "skills" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#e2e8f0] shadow-sm">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-40">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("hero")}
                        className="text-2xl font-bold text-[#1e293b] font-Satoshi hover:text-[#6366f1] transition-colors"
                    >
                        JW
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-[#64748b] hover:text-[#6366f1] transition-colors font-medium"
                            >
                                {link.name}
                            </button>
                        ))}
                        <a
                            href={resume}
                            download="JazWinn_Resume.pdf"
                            className="px-5 py-2 bg-[#6366f1] text-white rounded-lg font-medium hover:bg-[#4f46e5] transition-colors"
                        >
                            Resume
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-[#1e293b] p-2"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-3 border-t border-[#e2e8f0]">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="block w-full text-left text-[#64748b] hover:text-[#6366f1] transition-colors font-medium py-2"
                            >
                                {link.name}
                            </button>
                        ))}
                        <a
                            href={resume}
                            download="JazWinn_Resume.pdf"
                            className="block w-full text-center px-5 py-2 bg-[#6366f1] text-white rounded-lg font-medium hover:bg-[#4f46e5] transition-colors mt-3"
                        >
                            Resume
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}
