import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="AcquiSell Logo" className="h-8" />
        <span className="text-xl font-bold text-[#171B38]">AcquiSell</span>
      </div>
      <div className="hidden md:flex space-x-6 text-gray-700">
        <a href="#sellers" className="hover:text-blue-500">Sellers</a>
        <a href="#buyers" className="hover:text-blue-500">Buyers</a>
        <a href="#listings" className="hover:text-blue-500">View Listings</a>
      </div>
      <div className="flex space-x-4">
        <button className="text-gray-700 hover:text-blue-500">Login</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;