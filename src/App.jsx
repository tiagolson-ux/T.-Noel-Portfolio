import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Demos from "./components/sections/Demos";
import Translator from "./components/sections/Translator";
import Resume from "./components/sections/Resume";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Demos />
      <Translator />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
