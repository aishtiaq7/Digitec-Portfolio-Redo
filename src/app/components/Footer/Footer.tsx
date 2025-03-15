import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import  "./Footer.css"

export default function Footer() {
  return (
    <footer className="bg-[#2A2B5F] text-white py-16 px-4">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Newsletter Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Join Our Newsletter</h3>
          <p className="text-gray-300 footer-newsletter-description">Be the first to know about our latest updates, exclusive offers, and more</p>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full px-4 py-2 text-gray-900"
            />
            <button className='subscribeButton'>Subscribe</button>
          </div>
        </div>

        <div className="white-line-divider"></div>

        <div className="flex items-center justify-start gap-4 space-x-2 hidden-two py-3">
            <Image src="/logos/digitec.png" alt="DigiTech Innovation Logo" width={60} height={40} />
            <span className="text-2xl font-semibold">DigiTech Innovation</span>
        </div>

        {/* Service Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Service</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                Web Design & Development
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                AI Marketing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                SEO & Analytics
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                Cybersecurity
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                Data Management
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                360° Brand Development
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources & About Section */}
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">About us</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Career</h4>
          </div>
        </div>

        {/* Company Info Section */}
        <div className="md:space-y-8 location-image-footer">
          <div className="flex items-center space-x-2 hidden-one">
            <Image src="/logos/digitec.png" alt="DigiTech Innovation Logo" width={60} height={40} />
            <span className="text-xl font-semibold">DigiTech Innovation</span>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Location</h4>
            <p className="text-gray-300">Vancouver, BC V3J 4H6, Canada</p>
          </div>

          <div className="space-y-4">
          <p className="text-sm text-gray-300 hidden-one">DigiTech Innovation © 202X. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaFacebook className="w-10 h-10" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin className="w-10 h-10" />
              </Link>
            </div>            
          </div>
        </div>
        <div className="white-line-divider"></div>
        <div className="hidden-two text-center mt-5">
          <p className="text-sm text-gray-300 mt-5">DigiTech Innovation © 202X. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

