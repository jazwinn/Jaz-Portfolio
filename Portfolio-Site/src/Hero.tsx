import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import resume from "./assets/JazWinn_Resume.pdf";

const focus = [
  "CUDA kernels",
  "GPU architecture",
  "Real-time graphics",
  "Computer vision",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-6 sm:px-10 lg:px-16 pt-24 pb-20"
    >
      {/* Background: grid + light bleed */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid bg-fade-mask" />
        <div className="glow absolute -top-40 left-[8%] h-[26rem] w-[26rem] rounded-full bg-cyan/12" />
        <div
          className="glow absolute -top-24 right-[6%] h-[30rem] w-[30rem] rounded-full bg-violet/12"
          style={{ animationDelay: "-6s" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-void" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Availability pill */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/70 px-4 py-1.5 backdrop-blur animate-[rise_0.7s_cubic-bezier(0.22,1,0.36,1)_forwards]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
          </span>
          <span className="font-mono text-xs tracking-wide text-dim">
            C++ Developer Intern @ Quantified Energy Labs
          </span>
        </div>

        <p
          className="label mb-5 opacity-0 animate-[rise_0.7s_cubic-bezier(0.22,1,0.36,1)_0.08s_forwards]"
        >
          Jaz Winn Ng
        </p>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
          <span className="block opacity-0 animate-[rise_0.7s_cubic-bezier(0.22,1,0.36,1)_0.14s_forwards]">
            I make code run
          </span>
          <span className="block text-gradient opacity-0 animate-[rise_0.7s_cubic-bezier(0.22,1,0.36,1)_0.22s_forwards]">
            closer to the metal.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-dim sm:text-lg opacity-0 animate-[rise_0.7s_cubic-bezier(0.22,1,0.36,1)_0.3s_forwards]">
          Computer Science undergraduate specialising in real-time interactive
          simulation. I write CUDA kernels, game engines and vision pipelines —
          work where the difference between correct and fast is measured, not
          assumed.
        </p>

        {/* Focus strip */}
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 opacity-0 animate-[rise_0.7s_cubic-bezier(0.22,1,0.36,1)_0.36s_forwards]">
          {focus.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 font-mono text-xs text-faint sm:text-sm"
            >
              <span className="text-cyan">/</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap items-center gap-4 opacity-0 animate-[rise_0.7s_cubic-bezier(0.22,1,0.36,1)_0.44s_forwards]">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-3 font-semibold text-void transition-all duration-300 hover:bg-white hover:shadow-[0_0_32px_-6px_rgba(34,211,238,0.65)]"
          >
            View the work
            <FaArrowDown className="text-sm transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a
            href={resume}
            download="JazWinn_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-6 py-3 font-semibold text-ink transition-all duration-300 hover:border-cyan hover:text-cyan"
          >
            Download résumé
          </a>

          <div className="ml-1 flex items-center gap-2">
            {[
              {
                href: "https://github.com/jazwinn",
                icon: <FaGithub />,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/jazwinn-ng/",
                icon: <FaLinkedin />,
                label: "LinkedIn",
              },
              {
                href: "mailto:ngjazwinn@gmail.com",
                icon: <FaEnvelope />,
                label: "Email",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-dim transition-all duration-300 hover:border-cyan hover:text-cyan"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
