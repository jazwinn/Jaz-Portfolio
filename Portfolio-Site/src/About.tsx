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
            My work sits where computer vision, language models and C++ meet a
            latency budget. A vision pipeline that has to keep pace with a
            camera rather than a benchmark. A transformer layer that is
            mathematically correct but pushes 128&nbsp;MiB of attention scores
            through global memory five times before anything reads them. A
            drone payload that runs fine on a desktop and thermally throttles
            on ARM. The model is rarely the interesting part — it is
            everything around it that decides whether the answer arrives in
            time.
          </p>
          <p>
            Those problems are only visible if you measure. So I profile first,
            form a hypothesis about where the time actually goes, and keep the
            change only when the numbers agree — every speedup I claim comes
            with an accuracy check attached to it.
          </p>
          <p>
            I&apos;m currently reading{" "}
            <strong className="font-semibold text-ink">
              Computer Science (Real-Time Interactive Simulation)
            </strong>{" "}
            at {education.school}, and building GPU-accelerated vision tooling
            as a C++ developer intern.
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
