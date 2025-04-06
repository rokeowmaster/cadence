'use client'
import Image from 'next/image';
import { useState } from 'react';
import React from 'react'
import { Nav } from '@/components';

const portfolioItems = [
    // { image: "/portfolio1.png", title: "Shake
    // spearean Drama", description: "A breathtaking performance of Macbeth at the Grand Theatre." },
    { image: "/portfolio2.jpg", title: "Feature Film Role", description: "Lead role in an award-winning independent film." },
    { image: "/portfolio3.jpg", title: "TV Series Appearance", description: "Recurring character in a popular TV series." },
    // { image: "/portfolio4.png", title: "Commercial Advertisem
    // ent", description: "Starred in a high-profile national commercial." },
    { image: "/portfolio5.jpg", title: "Stage Performance", description: "A captivating live theatre performance in a classic production." },
    { image: "/portfolio6.webp", title: "Short Film Project", description: "Lead role in a critically acclaimed short film." }
  ];

const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1));
    };

  
  return (
    <div>
        <Nav />
        <section className="relative bg-gray-900 text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Portfolio</h2>
        <p className="text-gray-400 mb-8">Explore our diverse range of performances and projects.</p>
        <div className="relative max-w-4xl mx-auto flex items-center">
            <button onClick={prevSlide} className="absolute left-0 bg-gray-700 p-2 rounded-full hover:bg-gray-600">
            &#9664;
            </button>
            <div className="w-full px-10">
            <Image 
                src={portfolioItems[currentIndex].image} 
                alt={portfolioItems[currentIndex].title} 
                width={600} 
                height={400} 
                className="rounded-xl shadow-lg object-cover mx-auto transition-all duration-500"
            />
            <h3 className="text-2xl mt-4">{portfolioItems[currentIndex].title}</h3>
            <p className="text-gray-300 mt-2">{portfolioItems[currentIndex].description}</p>
            </div>
            <button onClick={nextSlide} className="absolute right-0 bg-gray-700 p-2 rounded-full hover:bg-gray-600">
            &#9654;
            </button>
        </div>
        </section>
    </div>
  )
}

export default Portfolio