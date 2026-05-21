import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar/>
      <Hero />
      <Footer/>
    </main>
  );
}