import React from "react";

const BuyersSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="relative w-full max-w-md lg:max-w-lg">
          <img
            src="https://source.unsplash.com/400x300/?business,market"
            alt="Business Listings"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute -bottom-6 left-6 bg-white p-3 shadow-md rounded-md">
            <p className="text-sm font-semibold">Trusted Listings</p>
            <span className="text-xs text-gray-500">45+ New Listings</span>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="max-w-xl">
          <p className="text-green-600 font-semibold uppercase text-sm">For Buyers</p>
          <h2 className="text-3xl font-bold text-gray-900 leading-snug">
            Source relevant opportunities exclusive on our marketplace
          </h2>
          <p className="text-gray-600 mt-4">
            Browse 1,000s of vetted companies that go to market exclusively on the AcquiSell platform every year. All
            opportunities listed on this marketplace are listed on this platform first.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-lg">✔</span> Set your search criteria and receive all relevant
              information in your inbox.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-lg">✔</span> All of our deals will be listed on this platform first
              and only members will be able to see them.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-lg">✔</span> Fill out NDAs and submit LOIs directly through our
              platform, in minutes.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BuyersSection;