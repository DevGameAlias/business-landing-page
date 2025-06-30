import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Header from "./components/Navbar"; // or Navbar if that's what you named it
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {" "}
        {/* Adds space below fixed header */}
        <div className="font-sans">
          <Hero />
          <div className="bg-gray-500 py-12">
            <Services />
          </div>

          <div className="bg-orange-50 py-12">
            <Testimonials />
          </div>
          <Contact />
        </div>
        {/* All your current landing page sections go here */}
      </main>
      <Footer />
    </>
  );
}

export default App;
