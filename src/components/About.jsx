import { Mail, Github } from 'lucide-react'
import { profile, aboutCards } from '../data/portfolioData'
import InfoCard from './InfoCard'

export default function About() {
  return (
    <section id="about" className="border-b border-white/5 bg-ink-950 py-24">
      <div className="section-shell grid gap-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-4">About Me</p>
          <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            The Developer Behind the Code
          </h2>

          <p className="mt-6 leading-relaxed text-slate-400">{profile.summary}</p>
          <p className="mt-4 leading-relaxed text-slate-400">{profile.summaryExtra}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="pill-btn focus-ring bg-accent text-ink-950 hover:bg-accent-soft"
            >
              <Mail size={16} />
              Email Me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="pill-btn focus-ring border border-white/15 text-white hover:border-accent/40 hover:bg-white/5"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 self-start">
          {aboutCards.map((card) => (
            <InfoCard key={card.label} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
