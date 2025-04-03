"use client";

import React from "react";
import { Star, Heart } from "lucide-react";
import { Nav } from "@/components";

const About = () => {
  return (
    <div>
        <Nav />
    <div className="bg-gradient-to-r from-gray-800 to-black text-white min-h-screen">
      <section className="py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
          We are a team of passionate professionals dedicated to bringing stories to life through powerful performances. Whether it's for theater, television, or film, we strive to create unforgettable experiences for our audience.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-x-6 sm:space-y-0 mb-16">
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg w-full sm:w-1/4 text-center">
            <Heart size={32} className="text-red-500 mb-4" />
            <h3 className="text-2xl font-semibold">Our Passion</h3>
            <p className="text-gray-400 mt-2">Our team lives and breathes acting. Every role, every performance is a chance to create magic on stage and screen.</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl shadow-lg w-full sm:w-1/4 text-center">
            <Star size={32} className="text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold">Excellence</h3>
            <p className="text-gray-400 mt-2">We strive for excellence in everything we do—from auditions to performances. Our aim is to create work that resonates deeply with audiences.</p>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-xl shadow-lg text-center">
            <img src="/founder.jpg" alt="Actor 1" className="rounded-full w-32 h-32 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Kenny Rodgers</h3>
            <p className="text-gray-400">Founder & Director</p></div>

          <div className="bg-gray-700 p-4 rounded-xl shadow-lg text-center">
            <img src="/project-organizer.jpg" alt="Actor 3" className="rounded-full w-32 h-32 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Shanice Oduk</h3>
            <p className="text-gray-400">Production Designer and Marketer</p></div>

          <div className="bg-gray-700 p-4 rounded-xl shadow-lg text-center">
            <img src="/production-manager.jpg" alt="Actor 2" className="rounded-full w-32 h-32 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Shawn Alex</h3>
            <p className="text-gray-400">Production Manager</p></div>
        </div>

        <div className="mt-16">
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            At the heart of everything we do is the desire to connect with our audience, create meaningful stories, and inspire others. We believe in the power of performance to bring people together and create lasting memories.
          </p>
        </div>
      </section>
    </div>
    </div>
  );
};

export default About;
