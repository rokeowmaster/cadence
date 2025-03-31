import Image from 'next/image'
import React from 'react'

const projectItems = [
    { title: "Theater Showcase", description: "A captivating stage performance featuring talented actors.", image: "/project1.png" },
    { title: "Short Film", description: "An award-winning short film highlighting stellar acting skills.", image: "/project2.jpg" },
    { title: "Commercial Ad", description: "A high-profile commercial starring rising actors.", image: "/project3.jpg" },
  ];

const Projects = () => {
  return (
    <div>
        {/* Featured Projects Section */}
      <section className="relative bg-gray-900 text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projectItems.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-xl shadow-lg">
              <Image 
                src={project.image} 
                alt={project.title} 
                width={400} 
                height={250} 
                className="rounded-lg w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects