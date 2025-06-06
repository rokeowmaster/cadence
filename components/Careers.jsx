"use client";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const careerItems = [
  { title: "Supporting Role", description: "Exciting opportunities for supporting roles in major films.", image: "/career2.jpg" },
  { title: "Voice Acting", description: "Talented voice actors needed for animated projects.", image: "/career3.jpg" },
];

const Careers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? careerItems.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === careerItems.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="">
      {/* Careers Section */}
      <section className="relative bg-white text-black py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Career Opportunities</h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          {/* Career Slider */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 bg-gray-700 p-2 rounded-full hover:bg-gray-600 z-10"
            >
              <ArrowLeft size={24} className="text-white" />
            </button>

            <div className="w-full px-10">
              <Image
                src={careerItems[currentIndex].image}
                alt={careerItems[currentIndex].title}
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover mx-auto"
              />
              <h3 className="text-2xl text-black mt-4">{careerItems[currentIndex].title}</h3>
              <p className="text-gray-700 mt-2">{careerItems[currentIndex].description}</p>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 bg-gray-700 p-2 rounded-full hover:bg-gray-600 z-10"
            >
              <ArrowRight size={24} className="text-white" />
            </button>
          </div>

          {/* Video Section */}
          <div className="w-full lg:w-1/2">
            <div className="w-full h-[300px]">
              <iframe
                className="rounded-xl shadow-lg w-full h-full"
                src="https://www.youtube.com/embed/tz2tpkeoEek"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
