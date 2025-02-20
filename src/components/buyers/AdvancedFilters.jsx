export default function AdvancedFilters() {
    return (
      <div className="w-[350px] bg-white shadow-lg rounded-lg p-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Advance Filters</h3>
          <button className="text-red-500 text-sm font-medium hover:underline">Clear All</button>
        </div>
  
        {/* Filters */}
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            "Residential/Commercial Revenue %",
            "Keyword",
            "New Construction %",
            "EBITDA multiple",
            "Profit Margin",
          ].map((filter, index) => (
            <span
              key={index}
              className="bg-green-100 text-gray-800 text-xs px-3 py-1 rounded-full flex items-center gap-1"
            >
              {filter} <button className="text-green-500 font-bold text-sm">×</button>
            </span>
          ))}
        </div>
      </div>
    );
  }
  