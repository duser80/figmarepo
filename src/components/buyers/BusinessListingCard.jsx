export default function BusinessListingCard() {
    return (
      <div className="w-[300px] bg-white shadow-md rounded-lg p-3">
        <h3 className="text-sm font-semibold text-gray-900">Businesses For Sale</h3>
  
        {/* Card Items */}
        <div className="mt-3 space-y-3">
          {[
            { name: "Plumbing Company", tag: "new listing" },
            { name: "Commercial Landscaping", tag: "new listing" },
          ].map((business, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded-lg">
              <h4 className="text-sm font-medium text-gray-800">{business.name}</h4>
              <span className="text-xs text-blue-600">{business.tag}</span>
  
              {/* Placeholder for extra content */}
              <div className="mt-2 h-3 bg-gray-300 rounded w-3/4"></div>
              <div className="mt-1 h-3 bg-gray-300 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  