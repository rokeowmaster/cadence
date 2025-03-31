import Link from 'next/link'
import React from 'react'

const JobBanner = () => {
  return (
    <div>
        {/* Post a Job Banner Section */}
      <section className="relative bg-yellow-400 text-black py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Looking for Talent?</h2>
          <p className="text-lg mb-6">Post a job today and connect with top actors to bring your vision to life.</p>
          <Link href="/postjob">
          <button className="bg-black text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all">
            Post a Job
          </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default JobBanner