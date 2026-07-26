import { About } from './sections/About';
import { Hero } from './sections/Hero';
import { Footer } from './sections/Footer';
import { Projects } from './sections/Projects';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const section = useActiveSection();
  return (
    <div className="main">
      <Hero />
      <About />
      <Footer activeSection={section} />
      <Projects />
    </div>
  );
}

export default App;
