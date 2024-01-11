// Contact.js
import React, { useState } from 'react';


const Contact = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission (no backend logic for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="container mx-auto mt-8 contact-container">
      <h2 className="text-3xl font-semibold mb-4 contact-heading">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto contact-form">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium contact-label">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border contact-input"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium contact-label">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border contact-input"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium contact-label">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 p-2 w-full border contact-input"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300 contact-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
