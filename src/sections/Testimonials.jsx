import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

import bgImage from "../assets/images/Customersatisfaction2.jpg"; // ✅ Background image

const testimonials = [
  {
    name: "Sarah J.",
    role: "Homeowner",
    quote: "They fixed my leaking sink in under an hour – total pros!",
  },
  {
    name: "Mike R.",
    role: "Property Manager",
    quote: "Prompt, clean, and professional. I'll be hiring them again.",
  },
  {
    name: "Tina L.",
    role: "Airbnb Host",
    quote: "Perfect quick fixes between guest stays. Lifesavers!",
  },
  {
    name: "Jerry D.",
    role: "Landlord",
    quote: "On time, well-equipped, and budget-friendly.",
  },
  {
    name: "Elaine V.",
    role: "Realtor",
    quote: "Quick touch-ups before showings made a huge difference!",
  },
  {
    name: "Paul C.",
    role: "DIY Remodeler",
    quote: "Helped me finish what I started – with clean results.",
  },
];

// Arrows
const ArrowLeft = ({ onClick }) => (
  <button onClick={onClick} className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-yellow-300 text-gray-800 rounded-full p-4 shadow-xl transition-transform hover:scale-110">
    <ChevronLeft size={28} />
  </button>
);

const ArrowRight = ({ onClick }) => (
  <button onClick={onClick} className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-yellow-300 text-gray-800 rounded-full p-4 shadow-xl transition-transform hover:scale-110">
    <ChevronRight size={28} />
  </button>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative max-w-4xl mx-auto text-white z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-600 mb-12 drop-shadow-lg">Happy Clients</h2>

        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-4">
              <div key={index} className="px-4">
                <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg text-center backdrop-blur-md transition-all duration-500 hover:scale-[1.02]">
                  <p className="italic text-lg mb-3">“{t.quote}”</p>
                  <p className="font-semibold text-base text-[#b8693a]">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
