import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <section className="bg-orange-50 py-16">
      <div className="bg-white p-6 border border-gray-300 rounded-2xl shadow-lg w-full max-w-xl mx-auto">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800"
              placeholder="Your Name"
              required
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800"
              placeholder="Your Message"
              required
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-xl shadow transition duration-300">Send Message</button>
          </form>
        ) : (
          <div className="text-center text-yellow-600 font-semibold text-lg">Thanks for reaching out! We’ll get back to you within 24–48 hours.</div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
