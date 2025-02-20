export default function TrustedRings() {
    return (
      <div className="flex items-center space-x-[-10px]">
        {/* Circular Images */}
        <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-md">
          <img src="/leaf.png" className="w-12 h-12" alt="Logo 1" />
        </div>
        <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-md">
          <img src="/square.png" className="w-12 h-12" alt="Logo 2" />
        </div>
        <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-md">
          <img src="/square.png" className="w-12 h-12" alt="Logo 3" />
        </div>
  
        {/* Trusted Listings Text */}
        {/* <p className="ml-4 text-sm font-semibold text-gray-700">Trusted Listings</p> */}
      </div>
    );
  }
  