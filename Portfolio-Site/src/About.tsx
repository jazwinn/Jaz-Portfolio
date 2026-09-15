import Section from "./Components/Section";
import { education } from "./data/experience";

const facts = [
  {
    key: "focus",
    value:
      "Computer vision · LLM inference · real-time graphics · low-latency C++",
  },
  { key: "languages", value: "C++, CUDA, Python, C#, Java" },
  { key: "location", value: "Singapore" },
];

export default function About() {
  return (
    <Section
      id="about"
      index="01 / About"
      title="Engineering where the constraints are real"
      className="bg-shell"
    >
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        {/* Prose */}
        <div className="reveal space-y-6 text-base leading-relaxed text-dim sm:text-lg">
          <p>
            I&apos;m a Computer Science undergraduate at the {education.school},
            specialising in{" "}
            <strong className="font-semibold text-ink">
              real-time interactive simulation
            </strong>
            . My interests span computer vision, LLM inference and real-time
            graphics, with a focus on writing high-performance C++.
          </p>
          <p>
            I enjoy the side of engineering where performance matters —
            understanding how software uses the hardware underneath it, finding
            out where the time really goes, and making things faster without
            making them less correct. That curiosity has taken me from game
            engines and renderers to GPU programming and deep learning
            infrastructure.
          </p>
          <p>
            I&apos;m currently a{" "}
            <strong className="font-semibold text-ink">
              C++ Developer Intern at Quantified Energy Labs
            </strong>
            , and I&apos;m looking for opportunities to build software where
            both speed and reliability count.
          </p>
        </div>

        {/* Spec panel */}
        <div className="reveal">
          <div className="card overflow-hidden rounded-xl">
            {/* Window chrome */}
            <div className="flex items-center gap-2 border-b border-line bg-void/50 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-faint">
                jazwinn — about
              </span>
            </div>

            <div className="space-y-3 p-5 font-mono text-sm">
              {facts.map((fact) => (
                <div key={fact.key} className="flex flex-wrap gap-x-3">
                  <span className="text-violet">{fact.key}</span>
                  <span className="text-faint">=</span>
                  <span className="flex-1 text-dim">{fact.value}</span>
                </div>
              ))}

              <div className="!mt-5 h-px bg-line" />

              <div>
                <p className="text-violet">education</p>
                <p className="mt-2 leading-relaxed text-ink">
                  {education.degree}
                </p>
                <p className="text-dim">{education.school}</p>
                <p className="mt-1 text-faint">{education.period}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {education.modules.map((module) => (
                    <span
                      key={module}
                      className="rounded border border-line bg-raised px-2 py-1 text-xs text-dim"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </div>

              <div className="!mt-5 flex items-center gap-2 text-faint">
                <span className="text-mint">$</span>
                <span className="h-4 w-2 bg-cyan animate-blink" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
