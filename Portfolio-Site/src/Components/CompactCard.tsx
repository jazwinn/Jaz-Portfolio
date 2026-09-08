import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import type { Project } from "../data/projects";

/** Denser card for secondary work — no imagery, tighter copy. */
export default function CompactCard({ project }: { project: Project }) {
  return (
    <a
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      className="card group reveal flex flex-col rounded-lg p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <h4 className="font-semibold text-ink transition-colors duration-300 group-hover:text-cyan">
          {project.title}
        </h4>
        <FaArrowUpRightFromSquare className="mt-1 shrink-0 text-xs text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-cyan" />
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-dim">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="font-mono text-[11px] text-faint">
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}
