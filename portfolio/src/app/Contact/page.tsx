// pages/contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-8">
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-white">Contact</h1>
          <h4 className="text-gray-400">Get in Touch</h4>
        </header>

        <div className="flex flex-wrap mb-8">
          {/* Map Placeholder */}
          <div className="w-full mb-4">
            <div id="map" className="h-64 bg-gray-600 rounded-lg"></div>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-1/3 px-2 mb-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-start mb-4">
                <i className="linecons linecons-phone text-blue-500 mr-2"></i>
                <div>
                  <h4 className="text-lg text-white">415-832-2000</h4>
                  <p className="text-gray-400">Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.</p>
                </div>
              </div>

              <div className="flex items-start mb-4">
                <i className="linecons linecons-location text-blue-500 mr-2"></i>
                <div>
                  <h4 className="text-lg text-white">San Francisco</h4>
                  <p className="text-gray-400">Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.</p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="linecons linecons-mail text-blue-500 mr-2"></i>
                <div>
                  <h4 className="text-lg text-white">
                    <a href="mailto:protected-email@example.com" className="text-blue-400">protected-email@example.com</a>
                  </h4>
                  <p className="text-gray-400">Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full sm:w-2/3 px-2">
            <div className="bg-gray-700 rounded-lg p-4">
              <h2 className="text-xl text-white mb-4">How Can I Help You?</h2>
              <form id="contact_form" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      className="form-control w-full p-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      className="form-control w-full p-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
                <div>
                  <input
                    id="form_subject"
                    type="text"
                    name="subject"
                    className="form-control w-full p-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <textarea
                    id="form_message"
                    name="message"
                    className="form-control w-full p-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Message"
                    rows={4}
                    required
                  ></textarea>
                </div>

                <div className="mb-4">
                  <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY" data-theme="dark"></div>
                </div>

                <button type="submit" className="w-full p-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-200">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
