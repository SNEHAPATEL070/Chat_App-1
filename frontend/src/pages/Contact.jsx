import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-80 backdrop-blur-xl shadow-2xl border border-blue-200 rounded-3xl p-10 max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Get in Touch</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Have questions, feedback, or partnership ideas? We're here to help and would love to hear from you.
          Our team is dedicated to ensuring a seamless communication experience for all our users.
        </p>

        <div className="mt-6">
          <p className="text-blue-600 text-xl font-semibold">📧 contact@chatwave.app</p>
          <p className="text-gray-500 mt-1 text-sm">Responses within 24–48 business hours</p>
        </div>

        <div className="mt-10 text-sm text-gray-400">
          Thank you for choosing <span className="text-blue-600 font-medium">ChatWave</span> — where conversations feel effortless.
        </div>
      </div>
    </div>
  );
};

export default Contact;
