'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      const response = await fetch('https://formspree.io/f/xleqqowq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully! I will get back to you soon.',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-2xl bg-gray-900 p-4 md:p-10 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-2xl font-bold text-[#007BFF] mb-6 text-center">Send a Message</h3>

        {submitStatus.message && (
          <div className={`mb-6 p-4 rounded-md ${submitStatus.success ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
            {submitStatus.message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4"
        >
          <div>
            <label htmlFor="name" className="text-gray-300 font-semibold">Name:</label>
            <input
              className="border border-gray-600 bg-gray-800 p-3 rounded-md focus:ring-2 focus:ring-[#007BFF] w-full text-white"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
              autoComplete="off"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-gray-300 font-semibold">Email:</label>
            <input
              className="border border-gray-600 bg-gray-800 p-3 rounded-md focus:ring-2 focus:ring-[#007BFF] w-full text-white"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-gray-300 font-semibold">Message:</label>
            <textarea
              className="border border-gray-600 bg-gray-800 p-3 rounded-md focus:ring-2 focus:ring-[#007BFF] w-full h-28 text-white"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              minLength={10}
              autoComplete="off"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            className={`p-3 bg-[#007BFF] text-white rounded-md hover:bg-[#0056b3] transition text-lg font-semibold flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;