import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import Animals from "./sections/Animals";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />

        <Animals />

        <HowItWorks />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}