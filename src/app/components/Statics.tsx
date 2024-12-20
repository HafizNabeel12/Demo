import React from 'react';

function Statistics() {
  return (
    
    <div className="bg-green-300">
        <img src="/curve.png" alt="curve" className='bg-green-300'/>
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 md:text-center">
            <p className="text-4xl font-bold text-gray-800 md:text-5xl">5K</p>
            <p className="text-lg text-gray-700 mt-4">Customers</p>
          </div>
          <div className="md:w-1/3 md:text-center">
            <p className="text-4xl font-bold text-gray-800 md:text-5xl">4.5K</p>
            <p className="text-lg text-gray-700 mt-4">Repeat</p>
          </div>
          <div className="md:w-1/3 md:text-center">
            <p className="text-4xl font-bold text-gray-800 md:text-5xl">99%</p>
            <p className="text-lg text-gray-700 mt-4">Satisfaction</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Statistics;