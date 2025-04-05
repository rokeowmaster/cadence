import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
  return (
    <div>
        {/* Testimonial Section */}
      <section className="relative bg-gray-900 text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">What Our Actors Say</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center bg-white bg-opacity-10 p-6 rounded-xl shadow-lg backdrop-blur-md">
          <Image
            src="/assets-manager.jpg"
            alt="Actor Testimonial"
            width={150}
            height={150}
            className="rounded-full shadow-lg mb-6 md:mb-0 md:mr-6"
          />
          <div className="text-left">
            <p className="text-lg italic text-gray-300">“This platform has truly changed my acting career! I landed amazing roles and got connected with industry professionals. Highly recommend it!”</p>
            <h3 className="mt-4 text-xl font-semibold text-yellow-400">- Natasha Margaret</h3>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonial