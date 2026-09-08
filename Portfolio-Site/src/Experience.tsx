import Section from "./Components/Section";
import { experience } from "./data/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02 / Experience"
      title="Where I've worked"
      intro="Engineering and teaching roles, and what came out of each."
      className="bg-void"
    >
      <ol className="relative">
        {/* Timeline rail */}
        <span
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-cyan/60 via-line-strong to-transparent sm:block"
        />

        {experience.map((role) => (
          <li
            key={`${role.company}-${role.title}`}
            className="reveal relative pb-12 last:pb-0 sm:pl-12"
          >
            {/* Node */}
            <span
              aria-hidden
              className={`absolute left-0 top-1.5 hidden h-[15px] w-[15px] items-center justify-center rounded-full border-2 sm:flex ${
                role.current
                  ? "border-cyan bg-void shadow-[0_0_0_5px_rgba(34,211,238,0.12)]"
                  : "border-line-strong bg-void"
              }`}
            >
              {role.current && (
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              )}
            </span>

            <article className="card rounded-xl p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                <div>
                  <h3 className="text-xl font-bold text-ink sm:text-2xl">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-cyan">{role.company}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-mono text-xs text-dim sm:text-sm">
                    {role.period}
                  </p>
                  <p className="font-mono text-xs text-faint">{role.location}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 leading-relaxed text-dim"
                  >
                    <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-line-strong" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {role.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-line bg-raised px-2.5 py-1 font-mono text-xs text-dim"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
