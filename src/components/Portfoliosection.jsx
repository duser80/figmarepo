import React from "react";

const PortfolioSection = () => {
  return (
    <section className="bg-white py-16 px-6 flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-8 text-[#18181B]">
        We talk to hundreds of buyers and sellers every day and connect them to each other privately
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Buyers Card */}
        <div className="bg-gray-100 shadow-md rounded-lg p-6 w-80">
          <h3 className="text-lg font-semibold mb-2">Buyers</h3>
          <p className="text-sm text-gray-600">Businesses For Sale</p>
          <div className="mt-4 text-sm text-gray-700">
            <p>Revenue: ****</p>
            <p>EBITDA: ****</p>
            <p>Industry: ****</p>
          </div>
        </div>
        
        {/* Connector Icon */}
        <div className="bg-white rounded-full p-4 shadow-lg">
          <img src="/logo.png" alt="Platform Logo" className="h-12 w-12" />
        </div>

        {/* Sellers Card */}
        <div className="bg-gray-100 shadow-md rounded-lg p-6 w-80">
          <h3 className="text-lg font-semibold mb-2">Sellers</h3>
          <p className="text-sm text-gray-600">Top Sellers List</p>
          <div className="mt-4 text-sm text-gray-700">
            <p>Highest Bid: ****</p>
            <p>Past Deal Cost: ****</p>
            <p>Close Rate: ****</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
