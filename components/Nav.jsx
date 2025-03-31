"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contacts" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black bg-opacity-70 backdrop-blur-lg shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-white text-2xl font-bold cursor-pointer">
            Cadence<span className="text-yellow-400">Productions</span>
          </a>
        </Link>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} legacyBehavior>
              <a className="text-white hover:text-yellow-400 transition-all">
                {item.name}
              </a>
            </Link>
          ))}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 p-4 space-y-4 text-center transition-all duration-300">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} legacyBehavior>
              <a 
                className="block text-white text-lg hover:text-yellow-400 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavBar;