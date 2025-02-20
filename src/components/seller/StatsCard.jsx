import React from "react";

const StatsCard = () => {
  return (
    <div className="w-[180px] p-2 bg-white shadow-lg rounded-lg flex flex-col items-center text-center h-[200px]">
      <div className="w-8 h-8 flex items-center justify-center bg-green-400 rounded-full mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V7H8a1 1 0 110-2h1V4a1 1 0 011-1zM2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 7a7 7 0 100-14 7 7 0 000 14z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <p className="text-lg font-bold">300+</p>
      <p className="text-xs text-gray-500">Active Buyers We Matched To Your Business</p>
    </div>
  );
};

export default StatsCard;
