import { Section, SectionHeading } from '../ui/Section';
import { experiences } from '../../data/data';

export const Experience = () => (
  <Section id="experience">
    <SectionHeading label="// 02. experience" title="Where I've Worked" />

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/50 via-teal-400/20 to-transparent ml-3 hidden md:block" />
      <div className="space-y-8 md:pl-12">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="relative group p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-teal-400/20 hover:bg-white/[0.05] transition-all duration-300"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[2.85rem] top-7 w-2.5 h-2.5 rounded-full bg-teal-400 border-2 border-navy-900 hidden md:block" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="font-display font-semibold text-cream text-lg">{exp.role}</h3>
                <p className="text-teal-400 font-mono text-sm">{exp.company}</p>
              </div>
              <span className="font-mono text-xs text-slate-500 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap self-start">
                {exp.period}
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map(tag => (
                <span
                  key={tag}
                  className="font-mono text-xs text-teal-400/80 bg-teal-400/10 border border-teal-400/20 rounded px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

