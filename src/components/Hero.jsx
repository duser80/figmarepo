const HeroSection = () => {
    return (
        <>
      <section className="text-center py-20 bg-gray-100 relative">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-100 rounded-r-full"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100 rounded-l-full"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">
            M&A’s Largest <span className="text-blue-600">AI Powered Marketplace</span>
          </h1>
          <p className="mt-4 text-gray-600">
            We made it easier, cheaper, and faster for business buyers and sellers to connect
          </p>
        </div>
      </section>
<section>

<div className="flex flex-col items-center text-center py-12 px-4 bg-white">
<div className="relative flex flex-col items-center max-w-3xl mx-auto">
  {/* Central Icon */}
  <div className="relative w-24 h-24 flex items-center justify-center">
    <img src="/logo.png" alt="Logo" className="w-full h-full" />
  </div>
  {/* Left Box */}
  <div className="absolute left-0 top-12 w-64 p-4 bg-white shadow-lg rounded-lg text-left">
    <div className="flex items-center space-x-2">
      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
        <span>✓</span>
      </div>
      <p className="text-sm text-gray-700">
        Connected an investor to a manufacturing company looking for an equity partner
      </p>
    </div>
  </div>
  {/* Right Box */}
  <div className="absolute right-0 top-12 w-64 p-4 bg-white shadow-lg rounded-lg text-left">
    <div className="flex items-center space-x-2">
      <img src="/avatar.jpg" alt="User" className="w-6 h-6 rounded-full" />
      <p className="text-sm text-gray-700">
        Connected a seller to the most acquisitive Private Equity firm in their industry
      </p>
    </div>
  </div>
</div>
{/* Call to Action */}
<div className="mt-12 flex space-x-4">
  <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-semibold">
    SELLERS CALL HERE 1-888-235-2564
  </button>
  <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-semibold">
    BUYERS CALL HERE 1-888-256-9845
  </button>
</div>
{/* Privacy Policy */}
<p className="mt-4 text-xs text-gray-500">
  By calling you agree to our <a href="#" className="text-blue-500 underline">Privacy Policy & Terms</a>
</p>
</div>

</section>
</>
    );
  };

  export default HeroSection