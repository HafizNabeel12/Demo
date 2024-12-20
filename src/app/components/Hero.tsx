import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-light-green fixed top-0 left-0 w-full z-10 shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png" // Replace with your logo path
              alt="Blå Båt Logo"
              width={100}
              height={50}
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-dark-blue hover:text-blue-600">HJEM</a>
            <a href="#" className="text-dark-blue hover:text-blue-600">OM OSS</a>
            <a href="#" className="text-dark-blue hover:text-blue-600">TJENESTER</a>
            <a href="#" className="text-dark-blue hover:text-blue-600">BLOG</a>
            <a href="#" className="text-dark-blue hover:text-blue-600">KONTAKT</a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button className="text-dark-blue focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <Image
            src="/hero.png" // Replace with your image path
            alt="Hero Background"
            // width={900}
            // height={500}
            className='relative top-20 left-36'
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full px-4 text-center text-white">
          {/* Logo */}
          <div className="mb-4">
            <Image
              src="/logo.png" // Replace with your logo path
              alt="Blå Båt Logo"
              width={100}
              height={50}
            />
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold md:text-6xl">SAND-BLÅSING</h1>

          {/* Subtitle */}
          <p className="mt-4 text-lg md:text-xl">
            Ren bunn, klar kurs – vi tar vare på båten din!
          </p>

          {/* Button */}
          <button className="px-6 py-3 mt-6 text-lg font-semibold text-black bg-white rounded-md shadow-lg hover:bg-gray-200">
            BOOK TIME
          </button>
        </div>
      </div>
    </>
  );
}
