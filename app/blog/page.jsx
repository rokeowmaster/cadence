import React from 'react'
import { Nav } from '@/components'
import Image from 'next/image'

const Blog = () => {
    const blogPosts = [
        { image: "/blog1.jpg", title: "Mastering the Art of Auditions", description: "Learn how to nail your auditions with these expert tips." },
        { image: "/blog2.webp", title: "Building a Strong Acting Portfolio", description: "Discover how to showcase your best work and attract directors." },
        { image: "/blog3.jpg", title: "Breaking into the Film Industry", description: "Steps to transition from theatre to the big screen." },
        { image: "/blog4.webp", title: "Method Acting vs Classical Acting", description: "A deep dive into different acting techniques and their benefits." },
        { image: "/blog5.jpg", title: "How to Find the Right Acting Agent", description: "Key strategies for securing representation that fits your career goals." },
        { image: "/blog6.jpeg", title: "Improvisation Skills for Actors", description: "Enhance your spontaneity and creativity in acting with these exercises." }
      ];
  return (
    <div>
        <Nav />
        {/* Blog Section */}
      <section className="relative bg-gray-100 text-black py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Blog</h2>
        <p className="text-gray-600 mb-8">Explore the latest trends, tips, and stories from the acting world.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <Image 
                src={post.image} 
                alt={post.title} 
                width={400} 
                height={250} 
                className="rounded-lg object-cover"
              />
              <h3 className="text-2xl font-semibold mt-4">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-all">
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Blog