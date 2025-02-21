import React from "react";
import BusinessCard from "./portfolio/BusinessCard";
import SellersCard from "./portfolio/SellersCard";

const PortfolioSection = () => {
  return (
    <section className="bg-white py-16 px-6 flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-8 text-[#18181B]">
        We talk to hundreds of buyers and sellers every day and connect them to each other privately
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        <BusinessCard/>
        {/* Connector Icon */}
        <div className="bg-white rounded-full p-4 shadow-lg">
          <img src="/logo.png" alt="Platform Logo" className="h-12 w-12" />
        </div>
        <SellersCard/>
      </div>
    </section>
  );
};

export default PortfolioSection;
