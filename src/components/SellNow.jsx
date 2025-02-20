import React from "react";
import { CheckCircle } from "lucide-react";

const SellNowSection = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h5 className="text-sm font-semibold text-gray-600 uppercase">For Sellers</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Sell now for top dollar and at no cost to you
          </h2>
          <p className="text-gray-600 mt-4">
            We have 100K+ institutional (Private Equity, Family Offices, etc.) and accredited individual investors on our marketplace that are actively looking to make acquisitions.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center text-gray-700">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              List your company for sale anonymously, at no cost and without long term contracts.
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              Receive offers from active Private Equity firms and save on brokerage fees.
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              We guide you from valuation to closing, ensuring a smooth and friendly process.
            </li>
          </ul>
        </div>
        {/* Right Content - Mockup UI */}
        <div className="relative flex justify-center">
          <div className="bg-white shadow-lg rounded-xl p-5 w-64 absolute top-0 left-10">
            <p className="text-sm font-semibold">Buyer Profiles</p>
            <div className="mt-3 space-y-2">
              <div className="bg-gray-100 p-2 rounded-lg">
                <p className="text-sm font-medium">Emma Johnson</p>
                <p className="text-xs text-gray-500">Top-tier Private Equity Buyer</p>
              </div>
              <div className="bg-gray-100 p-2 rounded-lg">
                <p className="text-sm font-medium">Chris Taylor</p>
                <p className="text-xs text-gray-500">Tangible Assets Investor</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-5 w-64 absolute bottom-0 right-10">
            <p className="text-sm font-semibold">Best Price</p>
            <div className="mt-3 bg-blue-500 text-white p-2 rounded-lg text-center">
              Accept Offer
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-5 w-36 absolute bottom-10 left-10 flex flex-col items-center">
            <p className="text-sm font-medium">300+</p>
            <p className="text-xs text-gray-500">Active Buyers Matched To Your Business</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellNowSection;
