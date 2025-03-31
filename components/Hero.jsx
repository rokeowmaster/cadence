"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[70vh] sm:h-screen text-white pt-20 px-6 mb-16">
        <div className="relative max-w-5xl w-full h-full">
          <Image 
            src="/hero-image.jpg" 
            alt="Actor Headshot" 
            fill
            className="rounded-2xl shadow-lg object-cover"
          />
          <div className="absolute top-1/4 left-10 text-left">
            <h1 className="text-5xl font-extrabold mb-4">Unleash Your Talent</h1>
            <p className="text-lg text-gray-300 mb-6 max-w-md">
              Step into the spotlight and showcase your acting journey with confidence.
            </p>
            <Link href="/portfolio">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all">
              Get Started
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
