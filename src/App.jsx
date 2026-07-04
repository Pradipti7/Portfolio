import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Skills from "./assets/components/Skills";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import Crochet from "./assets/components/Crochet";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <div className="bg-[#F7F0E8] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Crochet />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
