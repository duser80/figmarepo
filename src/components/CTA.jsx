export default function Footer2() {
    return (
      <>
        {/* CTA Section */}
        <section className="bg-gray-900 text-white py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
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
                src="https://source.unsplash.com/400x300/?technology,business"
                alt="Placeholder"
                className="w-60 md:w-80"
              />
            </div>
          </div>
        </section>
  
        {/* Footer Section */}
        <footer className="bg-gray-900 text-gray-300 py-10 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <h2 className="text-xl font-bold text-white">AcquiSell</h2>
              <p className="mt-2 text-sm">
                AcquiSell is M&A's largest AI powered marketplace. Sellers sell for
                free and buyers have access to an exclusive flow of opportunities
                not found anywhere else.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
  
            {/* Seller & Buyer Section */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Seller</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li><a href="#" className="hover:underline">Sell your online business</a></li>
                  <li><a href="#" className="hover:underline">Seller pricing</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Buyer</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li><a href="#" className="hover:underline">Online businesses for sale</a></li>
                  <li><a href="#" className="hover:underline">Buyer pricing</a></li>
                </ul>
              </div>
            </div>
  
            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>100, Tech City, CA 94943</li>
                <li>(123) 456-7890</li>
                <li>support@acquisell.com</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
            Copyright &copy; AcquiSell 2025
          </div>
        </footer>
      </>
    );
  }
  