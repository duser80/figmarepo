import React from 'react'

const CTA = () => {
  return (
    <div className='bg-white py-6'> 
       {/* CTA Section */}
       <section style={{width:'90vw'}} className="bg-gray-900 text-white py-16 px-6 justify-center mx-auto">
        <div  className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">
              Join 100K+ sellers and buyers already doing business on AcquiSell
            </h2>
            <p className="mt-4 text-sm text-gray-400">
              AcquiSell is M&A's largest AI powered marketplace
            </p>
            <div className="mt-6 flex space-x-4 justify-center md:justify-start">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                As a Seller
              </button>
              <button className="border border-gray-400 px-6 py-2 rounded-md hover:bg-gray-700">
                As a Buyer →
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src="/logo.png"
              alt="Placeholder"
              className="w-60 md:w-80"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default CTA
