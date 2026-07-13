import { ThemeProvider } from './hooks/useTheme';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
