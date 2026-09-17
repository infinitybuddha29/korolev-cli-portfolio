import { Hero } from './sections/Hero';
import { SelectedWork } from './sections/SelectedWork';
import { WhatIDo } from './sections/WhatIDo';
import { Background } from './sections/Background';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { KanjiSparks } from './sections/KanjiSparks';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const section = useActiveSection();
  return (
    <>
      {/* background canvas layer — sibling BEFORE .main so .main (z-index:1)
          sits above it; keeping it inside .main let the positioned canvas
          paint over in-flow content */}
      <KanjiSparks />
      <main className="main">
        <Hero />
        <SelectedWork />
        <WhatIDo />
        <Background />
        <Contact />
      </main>
      <Footer activeSection={section} />
    </>
  );
}

export default App;
