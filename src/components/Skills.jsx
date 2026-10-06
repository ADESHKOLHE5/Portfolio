import { skillGroups } from '../data/portfolioData'
import SkillBadge from './SkillBadge'

export default function Skills() {
  return (
    <section id="skills" className="border-b border-white/5 bg-ink-950 py-24">
      <div className="section-shell">
        <p className="eyebrow mb-4">What I Work With</p>
        <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">Skills & Tools</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="info-card">
              <h3 className="mb-4 font-display text-base font-semibold text-accent-soft">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
