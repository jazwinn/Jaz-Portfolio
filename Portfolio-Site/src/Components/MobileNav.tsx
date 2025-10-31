import { useState } from "react";
import '../index.css'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
}

export default function MobileNav({className}:Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative ${className}">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 bg-[#524DD3] text-white rounded-full z-50 relative hover:-translate-y-px hover:brightness-125 hover:shadow-lg"
      >
        {isOpen ? "✕" : "☰"}
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#1B1933] text-white flex flex-col items-center justify-center text-2xl transition-transform duration-300 ease-in-out overflow-y-auto
        ${isOpen ? "translate-y-0" : "-translate-y-full"} `}
      >
        <a href="#home" className="mb-6" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" className="mb-6" onClick={() => setIsOpen(false)}>About</a>
        <a href="#portfolio" className="mb-6" onClick={() => setIsOpen(false)}>Portfolio</a>
        <a href="#contact" className="mb-6" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </div>
  );
}
