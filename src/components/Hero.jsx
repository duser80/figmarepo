import Image from 'next/image';

export default function AIMarketplace() {
  return (
    <section className="relative bg-white text-center py-16 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[120%] h-[120%] rounded-full bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200 opacity-30"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
          M&A’s Largest <span className="text-blue-600">AI Powered Marketplace</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
          We made it easier, cheaper, and faster for business buyers and sellers to connect
        </p>

        {/* Highlights Section */}
        <div className="relative flex flex-col items-center mt-12 lg:flex-row lg:justify-center lg:space-x-24 ">
           <div className=' border-l-2 border-t-2 border-dashed border-blue-500 absolute  left-[38%] top-4 p-4 w-56 h-12 lg:block hidden overflow-hidden'></div>
           <div className=' border-r-2 border-b-2 border-dashed border-blue-500 absolute  left-[50%] bottom-6 p-4 w-56 h-12 lg:block hidden overflow-hidden'></div>
           <div className=' border-l-2  border-dashed border-blue-500 absolute  left-[50%] top-44 p-4 w-56 h-10 block lg:hidden overflow-hidden'></div>
           <div className=' border-l-2  border-dashed border-blue-500 absolute  left-[50%] bottom-[115px] p-4 w-56 h-12 block lg:hidden overflow-hidden'></div>

          {/* Left Highlight */}
          <div className="relative bg-white shadow-lg rounded-lg p-6 w-52 sm:w-64 mt-14 lg:w-80">
            <div className="absolute -top-8 border flex items-center justify-center left-2 w-12 h-12  bg-white text-xl font-bold rounded-full">
              ✅
            </div>
            <p className="text-gray-700 text-sm sm:text-base">
              Connected an investor to a <strong>manufacturing company</strong> looking for an equity partner
            </p>
          </div>

          {/* Central AI Logo */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 mt-10 lg:mt-0">
            <Image src="/logo.png" alt="AI Logo" layout="fill" objectFit="contain" />
          </div>

          {/* Right Highlight */}
          <div className="relative gap-4 bg-white shadow-lg rounded-lg p-6 w-52 sm:w-64 lg:w-80 mt-10 lg:-mt-16">
            <div className="absolute -top-8 border flex items-center justify-center left-2 w-12 h-12 bg-blue-500 text-white text-xl font-bold rounded-full">
              🧑‍💼
            </div>
            <p className="text-gray-700 text-sm sm:text-base">
              Connected a seller to the most <strong>acquisitive Private Equity firm</strong> in their industry
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium shadow-lg hover:bg-blue-700">
            SELLERS CALL HERE 1-888-235-2564
          </button>
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium shadow-lg hover:bg-blue-700">
            BUYERS CALL HERE 1-888-256-9845
          </button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-xs sm:text-sm text-gray-500">
          By calling you agree to our{' '}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy & Terms
          </a>
        </p>
      </div>
    </section>
  );
}
