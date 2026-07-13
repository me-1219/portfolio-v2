import { Github, ExternalLink, FolderOpen } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { projects } from '../../data/data';

export const Projects = () => (
  <Section id="projects">
    <SectionHeading label="// 04. projects" title="Things I've Built" />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project, i) => (
        <div
          key={i}
          className="flex flex-col p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-teal-400/20 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 group"
        >
          <div className="flex items-start justify-between mb-4">
            <FolderOpen size={24} className="text-teal-400" />
            <div className="flex gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-teal-400 transition-colors">
                  <Github size={17} />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-teal-400 transition-colors">
                  <ExternalLink size={17} />
                </a>
              )}
            </div>
          </div>

          <h3 className="font-display font-semibold text-cream text-base mb-2 group-hover:text-teal-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <span key={tag} className="font-mono text-xs text-slate-500">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);
