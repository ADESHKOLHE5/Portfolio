export default function SkillBadge({ label }) {
  return (
    <span className="rounded-full border border-white/10 bg-ink-800/60 px-4 py-1.5 text-sm text-slate-300 transition-colors hover:border-accent/40 hover:text-white">
      {label}
    </span>
  )
}
