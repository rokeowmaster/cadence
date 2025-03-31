import Link from 'next/link'
import React from 'react'

const Foooter = () => {
  return (
    <div>
         {/* Footer Section */}
      <footer className="bg-black text-white py-10 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-yellow-400">Cadence Productions</h2>
            <p className="text-gray-400 mt-2">Where Dreams Take the Stage</p>
          </div>
          <div className="flex space-x-6 text-gray-400">
            <Link href="/about" legacyBehavior><a className="hover:text-yellow-400">About</a></Link>
            <Link href="/portfolio" legacyBehavior><a className="hover:text-yellow-400">Portfolio</a></Link>
            <Link href="/contact" legacyBehavior><a className="hover:text-yellow-400">Contact</a></Link>
          </div>
        </div>
        <div className="mt-6 text-gray-500 text-sm">&copy; {new Date().getFullYear()} ActingTalent. All Rights Reserved.</div>
      </footer>
    </div>
  )
}

export default Foooter