import { ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export const Section = ({ id, className = '', children }: SectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 px-6 max-w-6xl mx-auto transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </section>
  );
};

export const SectionHeading = ({ label, title }: { label: string; title: string }) => (
  <div className="mb-14">
    <p className="font-mono text-teal-400 text-sm mb-2">{label}</p>
    <h2 className="font-display text-3xl md:text-4xl font-bold text-cream dark:text-cream">
      {title}
    </h2>
    <div className="mt-4 h-px w-16 bg-teal-400/50" />
  </div>
);
