import { FaGithub, FaArrowRight } from "react-icons/fa";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      className="card group reveal flex flex-col overflow-hidden rounded-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-void">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-85 transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-ink transition-colors duration-300 group-hover:text-cyan">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-xs leading-relaxed text-cyan/70">
          {project.tagline}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-dim">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded border border-line bg-raised px-2 py-1 font-mono text-[11px] text-faint"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 border-t border-line pt-4 font-medium text-dim transition-colors duration-300 group-hover:text-cyan">
          <FaGithub />
          <span className="text-sm">View source</span>
          <FaArrowRight className="ml-auto text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
}
