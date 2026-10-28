import { FaGithub, FaArrowRight } from "react-icons/fa";
import Section from "./Components/Section";
import ProjectCard from "./Components/ProjectCard";
import CompactCard from "./Components/CompactCard";
import GameCard from "./Components/GameCard";
import { spotlight, featured, games, smallerWorks } from "./data/projects";

export default function Project() {
  return (
    <Section
      id="projects"
      index="03 / Projects"
      title="Selected work"
      intro="Things I built to answer a question I couldn't answer by reading."
      className="bg-shell"
    >
      {/* ---------- Flagship ---------- */}
      <article className="card reveal mb-16 overflow-hidden rounded-2xl">
        <div className="grid lg:grid-cols-2">
          {/* Copy */}
          <div className="order-2 flex flex-col p-7 sm:p-10 lg:order-1">
            <span className="label mb-4">Flagship project</span>
            <h3 className="text-2xl font-bold text-ink sm:text-3xl">
              {spotlight.title}
            </h3>
            <p className="mt-2 font-mono text-sm text-cyan">
              {spotlight.subtitle}
            </p>

            <p className="mt-5 text-sm leading-relaxed text-dim sm:text-base">
              {spotlight.blurb}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-dim sm:text-base">
              {spotlight.detail}
            </p>

            {/* Metrics */}
            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
              {spotlight.metrics.map((metric) => (
                <div key={metric.label} className="bg-panel px-4 py-4">
                  <dt className="sr-only">{metric.label}</dt>
                  <dd>
                    <span className="block font-mono text-xl font-semibold text-mint sm:text-2xl">
                      {metric.value}
                    </span>
                    <span className="mt-1 block font-mono text-[11px] leading-tight text-faint">
                      {metric.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap gap-2">
              {spotlight.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-line bg-raised px-2.5 py-1 font-mono text-xs text-dim"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={spotlight.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-lg border border-line-strong px-5 py-2.5 font-medium text-ink transition-all duration-300 hover:border-cyan hover:text-cyan"
            >
              <FaGithub />
              Read the technical report
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Screenshot */}
          <div className="order-1 relative min-h-[16rem] overflow-hidden border-b border-line bg-void lg:order-2 lg:border-b-0 lg:border-l">
            <img
              src={spotlight.image}
              alt={spotlight.imageAlt}
              className="h-full w-full object-cover object-left-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-panel/60 lg:via-transparent" />
          </div>
        </div>
      </article>

      {/* ---------- Featured grid ---------- */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* ---------- Shipped games ---------- */}
      <div className="mt-20">
        <div className="reveal mb-8 flex items-center gap-4">
          <h3 className="text-2xl font-bold text-ink sm:text-3xl">
            Shipped games
          </h3>
          <span className="h-px flex-1 hairline" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {games.map((game) => (
            <GameCard key={game.title} game={game} />
          ))}
        </div>
      </div>

      {/* ---------- Smaller works ---------- */}
      <div className="mt-20">
        <div className="reveal mb-8 flex items-center gap-4">
          <h3 className="text-2xl font-bold text-ink sm:text-3xl">
            Smaller works
          </h3>
          <span className="h-px flex-1 hairline" />
          <span className="font-mono text-xs text-faint">
            {smallerWorks.length} repos
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {smallerWorks.map((project) => (
            <CompactCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      {/* ---------- Link out ---------- */}
      <div className="reveal mt-12 text-center">
        <a
          href="https://github.com/jazwinn?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 font-mono text-sm text-dim transition-colors duration-300 hover:text-cyan"
        >
          Everything else on GitHub
          <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </Section>
  );
}
