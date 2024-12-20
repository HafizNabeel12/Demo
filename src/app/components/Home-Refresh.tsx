import Image from 'next/image';

export default function HomeRefresh() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-20 py-16 bg-gray-200">
      {/* Image Section */}
      <div className="relative max-w-md w-full rounded-3xl overflow-hidden shadow-lg">
        <Image
          src="/home.webp" // Replace with your image path
          alt="Home Interior"
          layout="responsive"
          width={500}
          height={500}
          className="rounded-3xl"
        />
        {/* Badge */}
        <div className="absolute top-4 left-4 bg-white/90 text-center rounded-full shadow-md px-4 py-2">
          <p className="text-lg font-bold">2X</p>
          <p className="text-sm text-gray-500">Deep Cleaning</p>
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-lg text-center md:text-left">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start mb-2">
          <span className="mr-2 text-2xl">😊</span>
          <span className="text-lg font-medium text-gray-600">FRESH</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Home <span className="font-light italic">Refresh</span>.
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Experience the ultimate expert cleaning — Creating spaces where comfort and productivity thrive.
        </p>

        {/* Button */}
        <button className="mt-6 px-8 py-3 bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-700">
          EXPLORE
        </button>
      </div>
    </section>
  );
}
