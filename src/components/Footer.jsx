import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-display text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-sm text-slate-500">Built with React &amp; Tailwind CSS.</p>
      </div>
    </footer>
  )
}
