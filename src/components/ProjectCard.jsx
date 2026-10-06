import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  const { name, problem, action, result, stack, repo } = project

  return (
    <article className="info-card flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-semibold text-white">{name}</h3>
        {repo !== '#' && (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="focus-ring shrink-0 rounded-full border border-white/10 p-2 text-slate-300 transition-colors hover:border-accent/40 hover:text-accent-soft"
            aria-label={`Open ${name} repository`}
          >
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>

      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-mono text-xs uppercase tracking-wider text-slate-500">Problem</dt>
          <dd className="mt-1 leading-relaxed text-slate-400">{problem}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wider text-slate-500">Action</dt>
          <dd className="mt-1 leading-relaxed text-slate-400">{action}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wider text-slate-500">Result</dt>
          <dd className="mt-1 leading-relaxed text-slate-400">{result}</dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-white/5 pt-4">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-ink-700/50 px-2.5 py-1 font-mono text-xs text-accent-soft"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}
