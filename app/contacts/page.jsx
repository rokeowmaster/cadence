"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Nav } from "@/components";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/0793551031?text=${whatsappMessage}`, "_blank");
  };

  return (
    <div>
        <Nav />
    <div className="flex justify-center items-center min-h-screen bg-[url('/background.jpg')] bg-cover bg-center p-6">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg rounded-2xl p-8 max-w-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-300 mb-6">We'd love to hear from you! Reach out for auditions, collaborations, or inquiries.</p>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="text-white" size={24} />
            <span className="text-lg">productioncadence@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-white" size={24} />
            <span className="text-lg">+254 793 551 031</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="text-white" size={24} />
            <span className="text-lg">Kisumu, Kenya</span>
          </div>
        </div>
        
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none" 
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none" 
            required
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none h-24" 
            required
          />
          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-xl shadow-lg font-semibold hover:opacity-90 transition">Send Message</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
