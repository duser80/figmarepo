import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { CirclePattern } from "./circle-pattern"

export default function Footer() {
  return (
    <footer className="relative bg-[#1C1C1C] text-white py-16 overflow-hidden">
      <CirclePattern />

      <div className="container mx-auto px-4 relative z-10 md:px-24 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#4338CA]" fill="currentColor">
                <path d="M12 2L2 19.7778H22L12 2Z" />
              </svg>
              <span className="text-xl font-semibold">AcquiSell</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              AcquiSell is M&A's largest AI powered marketplace. Sellers sell for free and buyers have access to an
              exclusive flow of opportunities not found anywhere else.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <Link
                href="#"
                className="w-10 h-10 bg-[#4338CA] rounded flex items-center justify-center hover:bg-[#4338CA]/80 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#4338CA] rounded flex items-center justify-center hover:bg-[#4338CA]/80 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#4338CA] rounded flex items-center justify-center hover:bg-[#4338CA]/80 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Seller Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Seller</h3>
            <div className="space-y-3">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Sell your online business
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Seller pricing
              </Link>
            </div>
          </div>

          {/* Buyer Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Buyer</h3>
            <div className="space-y-3">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Online businesses for sale
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Buyer pricing
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <p>100, tech city, CA 94043</p>
              <p>(123) 456-7890</p>
              <p>support@AcquiSell.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">Copyright © AcquiSell 2025</p>
        </div>
      </div>
    </footer>
  )
}

