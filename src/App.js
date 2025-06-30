import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main className="mt-4 bg-orange-50">
        {/* Adds space below fixed header */}
        <div className="font-sans">
          <Hero />

          <div id="services">
            <Services />
          </div>

          <div id="testimonials">
            <Testimonials />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
