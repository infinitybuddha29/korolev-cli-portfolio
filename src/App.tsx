import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Hero } from './sections/Hero';
import { Footer } from './sections/Footer';
import { Projects } from './sections/Projects';
import { useActiveSection } from './hooks/useActiveSection';
import { KanjiSparks } from './sections/KanjiSparks';

function App() {
  const section = useActiveSection();
  return (
    <div className="main">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <KanjiSparks />
      <Footer activeSection={section} />
    </div>
  );
}

export default App;
