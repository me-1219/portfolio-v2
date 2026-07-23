import { ArrowDown, FileText, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data/data';
import { useTypewriter } from '../../hooks/useScrollAnimation';
import { TechShowcase } from './TechShowcase';
const ROLES = [
  'Full-Stack Engineer',
  'React Developer',
  'Node.js Express Developer',
  'Python (Django) Developer',
  'Open to Work Opportunities',
];

export const Hero = () => {
  const typed = useTypewriter(ROLES, 80, 2000);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-16 max-w-7xl mx-auto relative"
    >

      <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center w-full">


        {/* LEFT CONTENT */}
        <div>

          <div
            className="animate-fade-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
          >
            <p className="font-mono text-teal-400 text-sm mb-6 tracking-widest uppercase">
              Hello there, I&apos;m
            </p>
          </div>


          <div
            className="animate-fade-up"
            style={{ animationDelay: '0.25s', animationFillMode: 'both' }}
          >
            <h1 className="font-display text-2xl md:text-4xl lg:text-6xl font-extrabold text-cream leading-none tracking-tight mb-4">

              {personalInfo.name.split(' ')[0]}
              <span className="text-teal-400">.</span>

              <br />

              <span className="text-slate-500 dark:text-slate-600">
                {personalInfo.name.split(' ')[1]}
              </span>

            </h1>
          </div>



          {/* Typing Role */}
          <div
            className="animate-fade-up mt-6"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            <div className="font-mono text-xl md:text-2xl text-slate-300 h-8 flex items-center">

              <span className="text-teal-400 mr-2">
                $
              </span>

              <span>
                {typed}
              </span>

              <span className="ml-0.5 w-0.5 h-6 bg-teal-400 animate-blink" />

            </div>
          </div>



          {/* Bio */}
          <div
            className="animate-fade-up mt-8 max-w-xl"
            style={{ animationDelay: '0.55s', animationFillMode: 'both' }}
          >
            <p className="text-slate-400 text-lg leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>




          {/* Buttons */}
          <div
            className="animate-fade-up mt-10 flex flex-wrap gap-4 items-center"
            style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
          >

            <button
              onClick={() =>
                document
                  .querySelector('#projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-6 py-3 bg-teal-400 text-navy-900 font-display font-semibold text-sm rounded hover:bg-teal-300 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-400/20"
            >
               Work
            </button>



            {/* CV */}
            <a
              href={personalInfo.cv}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-teal-400/40 text-teal-400 font-display font-semibold text-sm rounded hover:border-teal-400 hover:bg-teal-400/5 transition-all duration-200 flex items-center gap-2"
            >
              <FileText size={15} />
              My CV
            </a>




            {/* Github */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-teal-400/40 text-teal-400 font-display font-semibold text-sm rounded hover:border-teal-400 hover:bg-teal-400/5 transition-all duration-200 flex items-center gap-2"
            >
              <Github size={15} />
              GitHub
            </a>




            {/* LinkedIn */}
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-white/10 text-slate-400 font-display font-medium text-sm rounded hover:border-white/20 hover:text-cream transition-all duration-200 flex items-center gap-2"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>


          </div>




          {/* Availability */}
          {personalInfo.availableForWork && (

            <div
              className="animate-fade-up mt-8"
              style={{ animationDelay: '0.85s', animationFillMode: 'both' }}
            >

              <span className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 border border-white/10 rounded-full px-4 py-1.5">

                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />

                Available for work · Open to Opportunities

              </span>

            </div>

          )}


        </div>


        {/* RIGHT CONTENT: Tech Showcase */}
        <div
          className="animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          <TechShowcase />
        </div>


      </div>





    


    </section>
  );
};