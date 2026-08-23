import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AIAssistant from "./components/AIAssistant.jsx";
import Explore from "./components/Explore.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import CurrentWork from "./components/CurrentWork.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div id="home">
      <Navbar />

      <div className="section-wrap">
        <div className="hero-grid">
          <Hero />
          <AIAssistant />
        </div>

        <Explore />
      </div>

      <Projects />
      <Skills />
      <Education />
      <CurrentWork />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
