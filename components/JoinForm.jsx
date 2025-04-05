'use client'
import React from 'react'

const JoinForm = () => {
    const sendWhatsAppMessage = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const message = `New Actor Registration:\n\nName: ${formData.get("name")}\nEmail: ${formData.get("email")}\nPhone: ${formData.get("phone")}\nExperience: ${formData.get("experience")}\nPortfolio: ${formData.get("portfolio")}`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/254793551031?text=${encodedMessage}`, "_blank");
        };

  return (
    <div>
        
      {/* Registration Form */}
      <section className="relative bg-gray-900 text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Register as an Actor</h2>
        <form onSubmit={sendWhatsAppMessage} className="max-w-3xl mx-auto bg-white bg-opacity-10 p-6 rounded-xl shadow-lg backdrop-blur-md">
          <div className="mb-4">
            <input type="text" name="name" placeholder="Full Name" required className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 border-none focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
          <div className="mb-4">
            <input type="email" name="email" placeholder="Email" required className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 border-none focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
          <div className="mb-4">
            <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 border-none focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
          <div className="mb-4">
            <input type="text" name="experience" placeholder="Experience (e.g., 5 years, beginner)" required className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 border-none focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
          <div className="mb-6">
            <input type="url" name="portfolio" placeholder="Portfolio Link (if any)" className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 border-none focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
          <button type="submit" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all w-full">
            Submit
          </button>
        </form>
      </section>
    </div>
  )
}

export default JoinForm