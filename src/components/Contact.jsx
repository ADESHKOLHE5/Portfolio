import { Mail, Phone, MapPin, Github } from 'lucide-react'
import { profile } from '../data/portfolioData'

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
  { icon: Github, label: 'GitHub', value: 'ADESHKOLHE5', href: profile.github },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-ink-950 py-24">
      <div className="section-shell">
        <div className="rounded-3xl border border-white/5 bg-ink-800/40 px-8 py-16 sm:px-16">
          <p className="eyebrow mb-4">Let's Build Something</p>
          <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Open to full-stack roles and freelance collaboration.
          </h2>
          <p className="mt-5 max-w-xl text-slate-400">
            Whether it's a production system or a fresh idea, I'm glad to talk through
            the details. Reach out directly using any of the channels below.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactItems.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="info-card flex h-full flex-col gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-soft">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="eyebrow">{label}</p>
                    <p className="mt-1 break-words text-sm font-medium text-white">{value}</p>
                  </div>
                </div>
              )
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="focus-ring block rounded-2xl"
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
