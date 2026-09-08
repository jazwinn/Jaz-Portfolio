import { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaCopy, FaCheck } from "react-icons/fa6";
import Section from "./Components/Section";

const EMAIL = "ngjazwinn@gmail.com";

const channels = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+65 9107 7490",
    href: "tel:+6591077490",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/jazwinn-ng",
    href: "https://www.linkedin.com/in/jazwinn-ng/",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/jazwinn",
    href: "https://github.com/jazwinn",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  // mailto only works if the visitor has a mail client registered; copying
  // the address is the fallback that always does something.
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const field = document.createElement("textarea");
      field.value = EMAIL;
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section
      id="contact"
      index="05 / Contact"
      title="Let's build something fast"
      intro="Open to graduate and internship roles in GPU computing, graphics and applied machine learning — or just a good conversation about kernels."
      className="relative bg-shell"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow absolute -bottom-32 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-violet/10" />
      </div>

      <div className="relative grid gap-4 sm:grid-cols-2">
        {channels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="card group reveal flex items-center gap-4 rounded-xl p-5"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-line bg-raised text-lg text-cyan transition-colors duration-300 group-hover:border-cyan/50 group-hover:bg-cyan/10">
              {channel.icon}
            </span>
            <span className="min-w-0">
              <span className="block font-mono text-[11px] uppercase tracking-widest text-faint">
                {channel.label}
              </span>
              <span className="block truncate text-ink transition-colors duration-300 group-hover:text-cyan">
                {channel.value}
              </span>
            </span>
          </a>
        ))}
      </div>

      <div className="reveal relative mt-10 flex flex-col items-center gap-5 rounded-xl border border-dashed border-line-strong px-6 py-10 text-center">
        <p className="max-w-md text-lg text-dim">
          Email is the fastest way to reach me — I read and reply to all of it.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-3 font-semibold text-void transition-all duration-300 hover:bg-white hover:shadow-[0_0_32px_-6px_rgba(34,211,238,0.65)]"
          >
            <FaEnvelope />
            Send me an email
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-6 py-3 font-semibold text-ink transition-all duration-300 hover:border-cyan hover:text-cyan"
          >
            {copied ? <FaCheck className="text-mint" /> : <FaCopy />}
            {copied ? "Copied" : "Copy address"}
          </button>
        </div>
        <p aria-live="polite" className="font-mono text-sm text-faint">
          {copied ? `${EMAIL} copied to clipboard` : EMAIL}
        </p>
      </div>
    </Section>
  );
}
