import "./index.css";
import Header from "./Components/Header";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

