import { Laptop, Cloud, Server, ArrowUp, RefreshCw } from 'lucide-react';
import {
  SiReact, SiTailwindcss, SiJavascript, SiNextdotjs,
  SiPython, SiDjango, SiNodedotjs, SiExpress,
  SiPostgresql, SiMysql, SiMongodb,
  SiGithub, SiDocker,
} from 'react-icons/si';

type Tech = { icon: React.ReactNode; label?: string; color: string };

const CATEGORIES: {
  key: string;
  title: string;
  desc: string;
  position: string;
  techs: Tech[];
}[] = [
  {
    key: 'frontend',
    title: 'Frontend',
    desc: 'Building interactive and responsive UIs',
    position: 'top-0 left-0',
    techs: [
      { icon: <SiReact />, color: 'text-sky-500 dark:text-sky-400 bg-sky-400/10 border-sky-400/30' },
      { icon: <SiTailwindcss />, color: 'text-teal-500 dark:text-teal-300 bg-teal-300/10 border-teal-300/30' },
      { icon: <SiJavascript />, color: 'text-yellow-600 dark:text-yellow-300 bg-yellow-300/10 border-yellow-300/30' },
      { icon: <SiNextdotjs />, color: "text-slate-800 dark:text-white bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/20" },
    ],
  },
  {
    key: 'backend',
    title: 'Backend',
    desc: 'Developing robust and scalable APIs',
    position: 'top-0 right-0',
    techs: [
      { icon: <SiPython />, color: 'text-yellow-600 dark:text-yellow-300 bg-yellow-300/10 border-yellow-300/30' },
      { icon: <SiDjango />, color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950 border-emerald-500/30 dark:border-emerald-700' },
        { icon: <SiNodedotjs />, color: 'text-lime-600 dark:text-lime-400 bg-lime-400/10 border-lime-400/30' },
        { icon: <SiExpress />, color: 'text-slate-700 dark:text-slate-200 bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/20' },
      { icon: null, label: 'REST\nAPI', color: 'text-teal-600 dark:text-teal-300 bg-teal-300/5 border-teal-300/30' },
    ],
  },
  {
    key: 'database',
    title: 'Database',
    desc: 'Designing and managing structured data',
    position: 'bottom-8 left-0',
    techs: [
      { icon: <SiPostgresql />, color: 'text-sky-600 dark:text-sky-300 bg-sky-300/10 border-sky-300/30' },
      { icon: <SiMysql />, color: 'text-orange-600 dark:text-orange-400 bg-orange-400/10 border-orange-400/30' },
        { icon: <SiMongodb />, color: 'text-green-600 dark:text-green-400 bg-green-400/10 border-green-400/30' },
      { icon: null, label: 'SQL', color: 'text-sky-600 dark:text-sky-200 bg-sky-200/5 border-sky-200/30' },
    ],
  },
  {
    key: 'devops',
    title: 'DevOps & Tools',
    desc: 'Version control, CI/CD and deployment',
    position: 'bottom-8 right-0',
    techs: [
      { icon: <SiGithub />, color: 'text-slate-700 dark:text-slate-200 bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/20' },
      { icon: <SiDocker />, color: 'text-sky-600 dark:text-sky-400 bg-sky-400/10 border-sky-400/30' },
      { icon: <RefreshCw size={16} />, color: 'text-teal-600 dark:text-teal-300 bg-teal-300/10 border-teal-300/30' },
    ],
  },
];

const CategoryCard = ({ title, desc, techs }: { title: string; desc: string; techs: Tech[] }) => (
  <div className="w-[190px] rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-navy-900/90 backdrop-blur-sm p-4 shadow-lg shadow-black/5 dark:shadow-black/30">
    <p className="font-display font-semibold text-navy-900 dark:text-cream text-sm mb-1">{title}</p>
    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mb-3">{desc}</p>
    <div className="flex gap-2">
      {techs.map((t, i) => (
        <div
          key={i}
          className={`w-9 h-9 rounded-md border flex items-center justify-center text-base ${t.color}`}
        >
          {t.icon ?? (
            <span className="text-[8px] font-mono font-bold text-center leading-tight whitespace-pre-line">
              {t.label}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
);

export const TechShowcase = () => {
  return (
    <div className="relative w-full min-h-[600px]">
      {/* dashed connector lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <g strokeWidth="0.3" strokeDasharray="1.5 1.5" fill="none" className="stroke-teal-500/25 dark:stroke-teal-400/35">
          <path d="M 20 22 L 42 40" />
          <path d="M 80 22 L 58 40" />
          <path d="M 20 78 L 42 62" />
          <path d="M 80 78 L 58 62" />
          <path d="M 62 18 L 55 30" />
        </g>
      </svg>

      {/* Cloud deployment badge */}
      <div className="absolute top-0 right-[35%] flex items-center gap-2 animate-fade-up">
        <div className="text-right">
          <p className="text-teal-600 dark:text-teal-300 text-xs font-mono">Cloud Deployment</p>
          <p className="text-slate-500 dark:text-slate-500 text-[11px]">Oracle Cloud</p>
        </div>
        <div className="w-14 h-14 rounded-full bg-teal-400/10 border border-teal-400/30 flex items-center justify-center relative">
          <Cloud size={22} className="text-teal-600 dark:text-teal-300" />
          <ArrowUp size={18} className="text-teal-600 dark:text-teal-300 absolute" />
        </div>
      </div>

      {/* Center: laptop + server stack */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-6">
        <div className="w-56 h-36 rounded-lg border border-teal-400/30 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-navy-800 dark:to-navy-900 shadow-2xl shadow-teal-400/10 overflow-hidden flex flex-col">
            {/* mini editor title bar */}
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
            <span className="w-2 h-2 rounded-full bg-red-400/70" />
            <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
            <span className="w-2 h-2 rounded-full bg-teal-400/70" />
            <span className="ml-2 text-[9px] font-mono text-slate-400 dark:text-slate-500">dev.tsx</span>
            </div>

            {/* code content */}
            <div className="flex-1 px-4 py-3 font-mono text-[11px] leading-relaxed">
            <p className="text-purple-500 dark:text-purple-400">
                const <span className="text-sky-600 dark:text-sky-300">role</span> =
            </p>
            <p className="pl-3">
                <span className="text-amber-600 dark:text-yellow-200/90">
                &lsquo;Software&lsquo;
                </span>
            </p>
            <p className="pl-3">
                <span className="text-amber-600 dark:text-yellow-200/90">
                &lsquo;Developer&lsquo;
                </span>
                <span className="text-slate-500 dark:text-slate-400">;</span>
            </p>
            <p className="mt-1.5 flex items-center gap-1">
                <span className="text-teal-600 dark:text-teal-400">✓</span>
                <span className="text-slate-500 dark:text-slate-400 text-[10px]">
                building solutions
                </span>
                <span className="w-1 h-3 bg-teal-500 dark:bg-teal-400 animate-blink ml-0.5" />
            </p>
            </div>
        </div>

        <div className="flex flex-col gap-1.5">
            {[0, 1, 2, 3].map((i) => (
            <div
                key={i}
                className="w-10 h-6 rounded border border-teal-400/30 bg-slate-100 dark:bg-navy-800 flex items-center px-1.5"
            >
                <span
                className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
                />
            </div>
            ))}
        </div>
        </div>

      {/* Corner category cards */}
      {CATEGORIES.map((cat) => (
        <div key={cat.key} className={`absolute ${cat.position}`}>
          <CategoryCard title={cat.title} desc={cat.desc} techs={cat.techs} />
        </div>
      ))}
    </div>
  );
};