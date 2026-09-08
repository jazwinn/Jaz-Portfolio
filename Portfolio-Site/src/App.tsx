import Header from "./Components/Header";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-void">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Project />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
