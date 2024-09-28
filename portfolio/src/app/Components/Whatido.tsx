'use client';
import React from 'react';

const WhatIDo = () => {
  return (
    <section className="py-10 "> 
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-indigo-400">What I Do</h2> {/* Heading color */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-indigo-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Web Development</h3>
            <p className="text-gray-700">
              I build responsive and high-performance web applications using modern frameworks like React, Next.js, and Node.js.
            </p>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">UI/UX Design</h3>
            <p className="text-gray-700">
              I design intuitive and user-friendly interfaces to enhance user experience across all platforms.
            </p>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Cloud Services</h3>
            <p className="text-gray-700">
              I provide cloud solutions to improve scalability and performance, utilizing services like AWS and Azure.
            </p>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Mobile Development</h3>
            <p className="text-gray-700">
              I create cross-platform mobile applications using React Native, ensuring a seamless user experience.
            </p>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">API Development</h3>
            <p className="text-gray-700">
              I develop RESTful and GraphQL APIs that power modern applications with efficient data handling.
            </p>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Consulting</h3>
            <p className="text-gray-700">
              I offer consulting services to help businesses leverage technology effectively and improve their digital presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
