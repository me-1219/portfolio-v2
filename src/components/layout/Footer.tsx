import { personalInfo } from '../../data/data';

export const Footer = () => (
  <footer className="border-t border-white/5 py-8 px-6 text-center">
    <p className="font-mono text-xs text-slate-600">
      Built by{' '}
      <span className="text-teal-400">{personalInfo.name}</span>
      {' '}· React + Vite + TypeScript + Tailwind
    </p>
    <p className="font-mono text-xs text-slate-700 mt-1">
      Designed & developed from Addis Ababa 🇪🇹
    </p>
  </footer>
);
