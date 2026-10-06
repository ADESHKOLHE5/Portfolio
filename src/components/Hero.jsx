import { ArrowRight, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-grid-glow relative overflow-hidden border-b border-white/5 bg-ink-950"
    >
      <div className="section-shell flex min-h-[88vh] flex-col justify-center py-24">
        <p className="eyebrow mb-5">Full Stack Java Developer</p>

        <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
          Engineering clean systems,{' '}
          <span className="text-accent">end to end.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          {profile.tagline} I'm {profile.name}, based in {profile.location} —
          designing RESTful APIs and shipping production-ready microservices.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="pill-btn focus-ring bg-accent text-ink-950 hover:bg-accent-soft"
          >
            View Projects
            <ArrowRight size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="pill-btn focus-ring border border-white/15 text-white hover:border-accent/40 hover:bg-white/5"
          >
            Get in Touch
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-full p-2.5 text-slate-400 transition-colors hover:text-accent-soft"
            aria-label="GitHub profile"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-full p-2.5 text-slate-400 transition-colors hover:text-accent-soft"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <dl className="mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/5 pt-8">
          <div>
            <dt className="eyebrow">Projects</dt>
            <dd className="mt-1 font-display text-3xl font-semibold text-white">5+</dd>
          </div>
          <div>
            <dt className="eyebrow">Microservices</dt>
            <dd className="mt-1 font-display text-3xl font-semibold text-white">12+</dd>
          </div>
          <div>
            <dt className="eyebrow">Core Stack</dt>
            <dd className="mt-1 font-display text-3xl font-semibold text-white">Java / React</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
