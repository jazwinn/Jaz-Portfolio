import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  { href: "https://github.com/jazwinn", icon: <FaGithub />, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/jazwinn-ng/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  { href: "mailto:ngjazwinn@gmail.com", icon: <FaEnvelope />, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-void px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-ink">Jaz Winn Ng</p>
          <p className="mt-1 font-mono text-xs text-faint">
            Built with React, Vite and Tailwind · deployed on GitHub Pages
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-dim transition-all duration-300 hover:border-cyan hover:text-cyan"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
