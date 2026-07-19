import { MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { personalInfo } from '../../data/data';

export const About = () => (
  <Section id="about">
    <SectionHeading label="// 01. about" title="Who I Am" />

    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div className="space-y-5">
        <p className="text-slate-300 text-lg leading-relaxed">
          I&apos;m a full-stack software engineer with a <strong className="font-semibold dark:text-white text-gray-900">
                BSc in Computer Science
              </strong> from{' '}
          <span className="text-teal-400 font-medium">Haramaya University</span> (Class of 2025).
          I&apos;m actively seeking roles where I can
              contribute to impactful products while continuing to grow as a developer.
        </p>
        
        <p className="text-slate-400 leading-relaxed">
          I&apos;m building and contributing to real-world software projects that address practical problems in research, business, and community service.
        </p>
        <p className="text-slate-400 leading-relaxed">
          Currently, I'm focused on building my own projects, exploring new technologies, and continuously improving my skills as a software developer.
        </p>
      </div>

      <div className="space-y-4">
        {[
          {
            icon: <MapPin size={16} className="text-teal-400 mt-0.5 shrink-0" />,
            label: 'Location',
            value: personalInfo.location,
          },
          {
            icon: <GraduationCap size={16} className="text-teal-400 mt-0.5 shrink-0" />,
            label: 'Education',
            value: 'BSc Computer Science · Haramaya University · 2022–2025',
          },
          {
            icon: <Briefcase size={16} className="text-teal-400 mt-0.5 shrink-0" />,
            label: 'Focus',
            value: 'Full-Stack Development · React · Python/Django · Node.js · Express.js',
          },
        ].map(item => (
          <div
            key={item.label}
            className="flex gap-3 p-4 rounded-lg bg-white/[0.03] border border-white/5 hover:border-teal-400/20 hover:bg-white/[0.05] transition-all duration-200"
          >
            {item.icon}
            <div>
              <p className="font-mono text-xs text-slate-500 mb-0.5">{item.label}</p>
              <p className="text-slate-200 text-sm">{item.value}</p>
            </div>
          </div>
        ))}

        {/* Languages */}
        <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
          <p className="font-mono text-xs text-slate-500 mb-2">Languages</p>
          <div className="flex gap-2 flex-wrap">
            {['Amharic 🇪🇹 (Native)', 'English (Working Proficiency)'].map(l => (
              <span key={l} className="text-xs text-slate-300 bg-teal-400/10 border border-teal-400/20 rounded px-2 py-1">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
);
