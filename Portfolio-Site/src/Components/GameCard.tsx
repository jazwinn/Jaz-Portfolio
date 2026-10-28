import { FaItchIo, FaArrowRight } from "react-icons/fa";
import type { Game } from "../data/projects";

/** Card for a released game — engine and team in place of tech tags, links to itch.io. */
export default function GameCard({ game }: { game: Game }) {
  return (
    <a
      href={game.repo}
      target="_blank"
      rel="noopener noreferrer"
      className="card group reveal flex flex-col overflow-hidden rounded-xl"
    >
      <div className="relative aspect-video overflow-hidden border-b border-line bg-void">
        <img
          src={game.image}
          alt={`${game.title} gameplay screenshot`}
          loading="lazy"
          className="h-full w-full object-cover opacity-85 transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h4 className="text-lg font-bold text-ink transition-colors duration-300 group-hover:text-cyan">
          {game.title}
        </h4>
        <p className="mt-1 font-mono text-xs leading-relaxed text-cyan/70">
          {game.tagline}
        </p>

        <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] text-faint">
          <div>
            <dt className="sr-only">Engine</dt>
            <dd className="text-violet">{game.engine}</dd>
          </div>
          <div>
            <dt className="sr-only">Team</dt>
            <dd>team of {game.team}</dd>
          </div>
          <div>
            <dt className="sr-only">Years</dt>
            <dd>{game.years}</dd>
          </div>
        </dl>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-dim">
          {game.description}
        </p>

        <div className="mt-6 flex items-center gap-2 border-t border-line pt-4 font-medium text-dim transition-colors duration-300 group-hover:text-cyan">
          <FaItchIo />
          <span className="text-sm">Play on itch.io</span>
          <FaArrowRight className="ml-auto text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
}
