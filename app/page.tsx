import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar/>
      <Hero />
      <About/>
      <Skills/>
      <Footer/>
    </main>
  );
}