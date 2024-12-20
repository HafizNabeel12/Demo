import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-300 text-black p-6">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-4">CLEAN!</h3>
            <p className="text-lg mb-4">Efficient Cleaning, Exceptional Results.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-gray-200">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-black hover:text-gray-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-black hover:text-gray-200">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">MAIN</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-gray-200">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-gray-200">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-gray-200">
                  Services
                  </a>
     
              </li>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-gray-200">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">PAGES</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-gray-200">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-gray-200">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-gray-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">UTILITIES</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-gray-200">
                  Style Guide
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-gray-200">
                  Instructions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-gray-200">
                  Licenses
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-black hover:text-gray-200">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-black" />
        <div className="text-sm text-black text-center">
          © 2024 Cleaners. All Rights Reserved.
          <br />
          Powered by Webflow. Built by Rick Mummery.
        </div>
      </div>
    </footer>
  );
};

export default Footer;