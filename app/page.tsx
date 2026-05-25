import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Vision from "./sections/Vision";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar/>
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Vision/>
      <Contact/>
      <Footer/>
    </main>
  );
}