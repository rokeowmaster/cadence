import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
      <div className="relative w-full h-48"> {/* Container for Image with specific dimensions */}
        <Image
          src={news.image}
          alt={news.title}
          layout="fill" // Fill the container with the image
          objectFit="contain" // Preserve aspect ratio while fitting the image within the container
          className="rounded-lg" // Add border-radius to the image
          loading="lazy" // Lazy loading
        />
      </div>
      <div className="p-8"> {/* Increased padding */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{news.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{news.date}</p>
        {/* <p className="text-gray-600 mb-4">{news.description}</p> */}
      </div>
    </div>
  );
};

export default NewsCard;
