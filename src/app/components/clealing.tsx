import React from 'react';

function OfficeCleaners() {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">Office Cleaners.</h1>
            <p className="text-lg text-gray-700 mt-4 mb-6">The cleaning team that cares - Experts in creating pristine homes and productive workspaces.</p>
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Explore</a>
          </div>
          <div className="md:w-1/2 md:pl-16 ">
            <img src="/cleaning.webp" alt="Office Cleaners" className="w-full h-auto md:h-full object-cover md:object-contain rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfficeCleaners;