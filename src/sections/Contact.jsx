import React, { useState } from "react";
import MockMap from "../assets/images/Mockembeddedmap.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Hook up to actual email or backend service
  };

  return (
    <section id="contact" className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto shadow-lg rounded-xl p-8 bg-orange-50">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              type="text"
              onChange={handleChange}
              value={formData.name}
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-yellow-400 text-gray-800"
            />
            <input
              name="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-yellow-400 text-gray-800"
            />
            <textarea
              name="message"
              rows="5"
              onChange={handleChange}
              value={formData.message}
              placeholder="Your Message"
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-yellow-400 text-gray-800"
            />
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-xl transition duration-300">
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center text-yellow-600 font-semibold text-lg">Thanks for reaching out! We’ll get back to you within 24–48 hours.</div>
        )}
      </div>

      {/* 👇 Mock Map Section */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Location</h3>
        <img src={MockMap} alt="Map of service area" className="w-full max-w-3xl mx-auto h-72 object-cover rounded-lg shadow-md" />
        <p className="text-sm text-gray-500 mt-2">123 Main Street, White Plains, NY 10601</p>
      </div>
    </section>
  );
};

export default ContactForm;
