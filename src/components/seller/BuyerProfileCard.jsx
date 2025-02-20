export default function BuyerProfileCard() {
    return (
      <div className="w-[280px] bg-white shadow-lg rounded-xl p-4 relative">
        <h3 className="text-sm font-semibold text-gray-800">Buyer Profiles</h3>
  
        {/* Buyer Card */}
        <div className="bg-gray-100 p-4 rounded-lg mt-3">
          <div className="flex items-center gap-3">
            {/* Placeholder Image */}
            <img src="/emma.png" className="w-10 h-10 bg-gray-300 rounded-full"/>
            <div>
              <h4 className="text-md font-semibold text-gray-900">Emma Johnson</h4>
              <p className="text-xs text-gray-600">Target Acquisition Price: $1M - $3M</p>
            </div>
          </div>
  
          {/* Buyer Details */}
          <div className="mt-3 text-[6px] text-gray-700 space-y-1">
            <p><strong>Industry of Focus:</strong> Realty Services</p>
            <p><strong>Area of Interest:</strong> Florida</p>
            <p><strong>Acquisitions Closed:</strong> 10</p>
          </div>


        </div>

        <div className="bg-gray-100 p-4 rounded-lg mt-3">
          <div className="flex items-center gap-3">
            {/* Placeholder Image */}
            <img src="/emma.png" className="w-10 h-10 bg-gray-300 rounded-full"/>
            <div>
              <h4 className="text-md font-semibold text-gray-900">Emma Johnson</h4>
              <p className="text-xs text-gray-600">Target Acquisition Price: $1M - $3M</p>
            </div>
          </div>
  
          {/* Buyer Details */}
          <div className="mt-3 text-[6px] text-gray-700 space-y-1">
            <p><strong>Industry of Focus:</strong> Realty Services</p>
            <p><strong>Area of Interest:</strong> Florida</p>
            <p><strong>Acquisitions Closed:</strong> 10</p>
          </div>

          
        </div>
        
        {/* Floating Profile Image */}
        <img src="bside.png" className="absolute -top-5 right-2 w-12 h-12 bg-gray-300 rounded-full border-4 border-white shadow-md"/> 
      </div>
    );
  }
  