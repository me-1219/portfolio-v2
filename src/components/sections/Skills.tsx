import { Section, SectionHeading } from '../ui/Section';
import { skills } from '../../data/data';

export const Skills = () => (
  <Section id="skills">
    <SectionHeading label="// 03. skills" title="What I Work With" />

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {skills.map((group, i) => (
        <div
          key={group.category}
          className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-teal-400/20 transition-all duration-300 hover:-translate-y-1"
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          <p className="font-mono text-teal-400 text-xs mb-4 tracking-wider uppercase">
            {group.category}
          </p>
          <ul className="space-y-2.5">
            {group.items.map(item => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                <span className="w-1 h-1 rounded-full bg-teal-400/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* GitHub strip */}
    <div className="mt-10 p-5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <p className="font-mono text-xs text-slate-500 mb-1">// open source</p>
        <p className="text-slate-300 text-sm">Check out my GitHub for more code, projects, and contributions.</p>
      </div>
      <a
        href="https://github.com/me-1219"
        target="_blank"
        rel="noreferrer"
        className="shrink-0 font-mono text-xs text-teal-400 border border-teal-400/30 px-4 py-2 rounded hover:bg-teal-400/10 transition-colors"
      >
        github.com/me-1219 →
      </a>
    </div>
  </Section>
);
