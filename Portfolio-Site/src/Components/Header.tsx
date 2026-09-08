import { useEffect, useState } from "react";
import { FaBars, FaXmark, FaFileArrowDown } from "react-icons/fa6";
import resume from "../assets/JazWinn_Resume.pdf";
import useActiveSection from "../hooks/useActiveSection";

const links = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

const sectionIds = ["hero", ...links.map((link) => link.id)];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-void/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <a
          href="#hero"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-ink"
        >
          <span className="text-cyan">{"<"}</span>
          jazwinn
          <span className="text-cyan">{" />"}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`rounded-md px-3 py-2 text-base transition-colors duration-300 ${
                active === link.id
                  ? "text-cyan"
                  : "text-dim hover:text-ink"
              }`}
            >
              <span className="mr-1.5 font-mono text-xs text-faint">
                0{index + 1}.
              </span>
              {link.name}
            </a>
          ))}
          <a
            href={resume}
            download="JazWinn_Resume.pdf"
            className="ml-3 inline-flex items-center gap-2 rounded-lg border border-cyan/40 px-4 py-2 text-base font-medium text-cyan transition-all duration-300 hover:bg-cyan/10"
          >
            <FaFileArrowDown className="text-xs" />
            Résumé
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line bg-void/95 px-6 py-4 backdrop-blur-xl md:hidden">
          {links.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`block border-b border-line/60 py-3 text-lg last:border-0 ${
                active === link.id ? "text-cyan" : "text-dim"
              }`}
            >
              <span className="mr-2 font-mono text-sm text-faint">
                0{index + 1}.
              </span>
              {link.name}
            </a>
          ))}
          <a
            href={resume}
            download="JazWinn_Resume.pdf"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-cyan/40 py-3 font-medium text-cyan"
          >
            <FaFileArrowDown className="text-xs" />
            Résumé
          </a>
        </nav>
      )}
    </header>
  );
}
