import React from "react";
import electricalImg from "../assets/images/Electricalreference.jpg";
import houseworkImg from "../assets/images/HouseworkReference.jpg";
import toolbeltImg from "../assets/images/toolbelt.jpg";
import workshopImg from "../assets/images/Workshopreference1.jpg";

const Hero = () => {
  return (
    <div className="w-full pt-24">
      {/* Hero */}
      <section className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${electricalImg})` }}>
        <div className="absolute inset-0 bg-black/80"></div>
        <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-yellow-400 text-center pt-24 drop-shadow-lg">Reliable Handyman Services for Every Project</h1>
      </section>

      {/* Services */}
      <section className="bg-orange-50 py-12 px-4 md:px-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8 text-yellow-600 tracking-wide">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={houseworkImg} alt="House work" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Interior Repairs</h3>
              <p className="text-gray-600 text-sm">Drywall, trim, painting, and room upgrades.</p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={toolbeltImg} alt="Toolbelt work" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Outdoor Projects</h3>
              <p className="text-gray-600 text-sm">Decks, repairs, fence work, and tool assistance.</p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={workshopImg} alt="Workshop tools" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Custom Carpentry</h3>
              <p className="text-gray-600 text-sm">Precision cuts, shelving, and made-to-fit pieces.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
