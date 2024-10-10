import React from 'react';

const Landingpage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-bold mb-4">Welcome to Afida</h1>
      <p className="text-xl mb-6 text-gray-700">Crowd Funding made easy</p>
      <a href="/about" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
        Learn More
      </a>
      <div className="mt-10">
        <img
          src="/path/to/your/image.jpg" // Update this path to your image
          alt="Crowd Funding Illustration"
          className="rounded shadow-lg"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default Landingpage;
