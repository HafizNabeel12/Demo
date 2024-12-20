import React from 'react';

function CleaningServices() {
  return (
    <div className="bg-green-300">
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">Professional Cleaning</h1>
            <p className="text-lg text-gray-700 mt-4">For regular maintenance, our services are designed to meet all your needs.</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-8">Deep Cleaning</h2>
            <p className="text-lg text-gray-700 mt-4">Consistent cleaning solutions that keep your workspace organized and professional.</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-8">Move-In/Out Cleaning</h2>
            <p className="text-lg text-gray-700 mt-4">Helping you transition smoothly into a new space or leave a lasting impression on your old one.</p>
          </div>
          <div className="md:w-1/2 md:pl-16">
            <img src="/service.webp" alt="Cleaning Services" className="w-full h-auto md:h-full object-cover md:object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CleaningServices;