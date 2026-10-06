import { GraduationCap, Award } from 'lucide-react'
import { education, certifications } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="border-b border-white/5 bg-ink-950 py-24">
      <div className="section-shell">
        <p className="eyebrow mb-4">Background</p>
        <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">Education</h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            {education.map((item) => (
              <div key={item.school} className="info-card flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-soft">
                  <GraduationCap size={20} />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
                    {item.period}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white">
                    {item.school}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{item.degree}</p>
                  <p className="mt-1 text-sm text-accent-soft">{item.meta}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500">
              Certifications
            </h3>
            {certifications.map((cert) => (
              <div key={cert.title} className="info-card flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-soft">
                  <Award size={20} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{cert.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
