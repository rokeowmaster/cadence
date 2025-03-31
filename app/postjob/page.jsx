import React from 'react'
import { Nav } from '@/components'

const PostJob = () => {
  return (
    <div>
    <Nav />
        {/* Post a Job Section */}
    <section className="relative bg-gray-900 text-white py-16 px-6 text-center overflow-hidden">
      <h2 className="text-4xl font-bold mb-6">Post a Job</h2>
      <p className="text-gray-300 mb-8">Looking for talented actors? Share your casting call with our community.</p>
      <div className="relative max-w-3xl mx-auto bg-white bg-opacity-10 p-8 rounded-2xl shadow-lg backdrop-blur-md transition-all hover:scale-105 duration-300">
        <form className="space-y-4">
          <input type="text" placeholder="Job Title" className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 border-none focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <textarea placeholder="Job Description" className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 border-none focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
          <input type="email" placeholder="Contact Email" className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 border-none focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <button type="submit" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all w-full">
            Submit Job Post
          </button>
        </form>
      </div>
    </section></div>
  )
}

export default PostJob