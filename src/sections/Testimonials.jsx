import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah J.",
    role: "Homeowner",
    quote: "They fixed my leaking sink in under an hour — total pros!",
  },
  {
    name: "Mike R.",
    role: "Property Manager",
    quote: "Prompt, clean, and professional. I’ll be hiring them again.",
  },
  {
    name: "Tina L.",
    role: "Airbnb Host",
    quote: "Perfect quick fixes between guest stays. Lifesavers!",
  },
  {
    name: "Jerry P.",
    role: "Landlord",
    quote: "On-time, well-equipped, and budget-friendly.",
  },
  {
    name: "Elaine V.",
    role: "Realtor",
    quote: "Quick touch-ups before showings made a huge difference!",
  },
  {
    name: "David C.",
    role: "DIY Remodeler",
    quote: "Helped me finish what I started — with clean results.",
  },
];

// Custom arrow components
const ArrowLeft = ({ onClick }) => (
  <button onClick={onClick} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow hover:bg-gray-200 p-2">
    <ChevronLeft size={20} />
  </button>
);

const ArrowRight = ({ onClick }) => (
  <button onClick={onClick} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow hover:bg-gray-200 p-2">
    <ChevronRight size={20} />
  </button>
);

const Testimonials = () => {
  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    dots: true,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <section className="bg-orange-50 py-16">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Happy Clients</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className="px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:scale-105">
              <p className="text-lg italic text-gray-700 mb-4">“{t.quote}”</p>
              <p className="font-semibold text-gray-900">– {t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
