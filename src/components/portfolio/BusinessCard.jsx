const BusinessCard = () => {
    return (
      <div className="w-1/3 bg-white rounded-2xl shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Businesses For Sale</h2>
          <span className="text-gray-500 text-sm">100+ listings</span>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg flex justify-between text-green-500 font-medium">
          <span>Revenue</span>
          <span>EBITDA</span>
          <span>Industry</span>
        </div>
        <div className="mt-3 bg-gray-50 p-3 rounded-lg flex justify-between items-center">
          <span className="text-indigo-600 font-medium">HVAC_Plumbing</span>
          <div className="flex gap-2">
            <span className="w-12 h-5 bg-gray-200 rounded"></span>
            <span className="w-12 h-5 bg-gray-200 rounded"></span>
          </div>
        </div>
        <div className="mt-2 bg-gray-100 p-3 rounded-lg text-gray-400">
          Other
        </div>
      </div>
    );
  };
  
  export default BusinessCard;
  