import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../index.css";

interface MobileNavProp extends React.HTMLAttributes<HTMLButtonElement> {}

export default function MobileNav({ className }: MobileNavProp) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className={`md:hidden relative z-50 ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center bg-[#524DD3] text-white rounded-3xl p-2 hover:-translate-y-px hover:brightness-125 hover:shadow-lg hover:cursor-pointer"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#1B1933] text-white flex flex-col items-center justify-center text-2xl transition-transform duration-300 ease-in-out overflow-y-auto
        ${isOpen ? "translate-y-0" : "-translate-y-full"} z-40`}
      >
        <a href="#home" className="mb-6" onClick={() => {setIsOpen(false); navigate("/Jaz-Portfolio")}}>Home</a>
        <a href="#about" className="mb-6" onClick={() => {setIsOpen(false); navigate("/Jaz-Portfolio/About")}}>About</a>
        <a href="#portfolio" className="mb-6" onClick={() => {setIsOpen(false); navigate("/Jaz-Portfolio/Projects")}}>Portfolio</a>
        <a href="#contact" className="mb-6" onClick={() => {setIsOpen(false); navigate("/Jaz-Portfolio/Contact")}}>Contact</a>
      </div>
    </>
  );
}
