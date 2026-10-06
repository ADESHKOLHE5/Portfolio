import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="border-b border-white/5 bg-ink-950 py-24">
      <div className="section-shell">
        <p className="eyebrow mb-4">Selected Work</p>
        <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">Projects</h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          A mix of full-stack platforms and microservices builds, framed by the problem
          each one solves.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
