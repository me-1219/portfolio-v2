import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { navLinks, personalInfo } from '../../data/data';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 dark:bg-navy-900/95 backdrop-blur-md border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-teal-400 font-medium tracking-tight text-sm hover:text-teal-300 transition-colors"
        >
          {`<`}<span className="text-cream text-lg dark:text-cream font-display font-semibold">
            {personalInfo.name.split(' ')[0]}
          </span>{` />`}
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-mono text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200 relative group"
            >
              <span className="text-teal-400/60 mr-1">{String(i + 1).padStart(2, '0')}.</span>
              {link.label}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-lg text-slate-400 hover:text-teal-400 hover:bg-white/5 transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggleTheme} className="p-2 text-slate-400 hover:text-teal-400 transition-colors">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setMenuOpen(o => !o)} className="p-2 text-slate-400 hover:text-teal-400 transition-colors">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-800/98 backdrop-blur-md border-b border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-mono text-sm text-slate-300 hover:text-teal-400 transition-colors text-left"
            >
              <span className="text-teal-400/60 mr-2">{String(i + 1).padStart(2, '0')}.</span>
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
