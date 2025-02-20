export default function BuyerProfileCard2() {
    return (
      <div className="w-[300px] h-[300px] bg-white shadow-lg rounded-xl p-5 relative">
        <h3 className="text-sm font-semibold text-gray-700">Buyer Profile</h3>
  
        {/* Buyer Info */}
        <div className="flex items-center gap-3 mt-3">
          {/* Profile Image (Placeholder) */}
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div>
            <h4 className="text-lg font-bold text-gray-900">Jason Reed</h4>
            <p className="text-xs text-gray-600">
              Target Acquisition Price: <span className="font-semibold">$5M - $10M</span>
            </p>
          </div>
        </div>
  
        {/* Buyer Details */}
        <div className="mt-4 text-xs text-gray-700 grid grid-cols-3 gap-2">
          <div>
            <p className="font-semibold">Industries Of Focus</p>
            <p className="text-gray-900">Commercial Plumbing</p>
          </div>
          <div>
            <p className="font-semibold">Areas Of Interest</p>
            <p className="text-gray-900">Texas</p>
          </div>
          <div>
            <p className="font-semibold">Acquisitions Closed</p>
            <p className="text-gray-900">21</p>
          </div>
        </div>
  
        {/* Accept Offer Button */}
        <button className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-md hover:bg-blue-700 transition">
          <span className="w-5 h-5 flex items-center justify-center bg-white rounded-full text-blue-600">&#8594;</span>
          Accept Offer
        </button>
      </div>
    );
  }
  