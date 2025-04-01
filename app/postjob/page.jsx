'use client'
import React, { useState } from 'react';
import { Nav } from '@/components';

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Job Title: ${jobTitle}%0AJob Description: ${jobDescription}%0AContact Email: ${contactEmail}`;
    const whatsappUrl = `https://wa.me/0793551031?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <Nav />
      <section className="relative bg-gray-900 text-white py-16 px-6 text-center overflow-hidden">
        <h2 className="text-4xl font-bold mb-6">Post a Job</h2>
        <p className="text-gray-300 mb-8">Looking for talented actors? Share your casting call with our community.</p>
        <div className="relative max-w-3xl mx-auto bg-white bg-opacity-10 p-8 rounded-2xl shadow-lg backdrop-blur-md transition-all hover:scale-105 duration-300">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Job Title"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 border-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Job Description"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 border-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
            ></textarea>
            <input
              type="email"
              placeholder="Contact Email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 border-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PostJob;
