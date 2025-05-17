import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">TFA</h3>
            <p className="text-gray-300 mb-4">
              We breathe new life into old tyres; turning waste into beautiful,
              functional furniture for homes and workspaces.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/tfarecyclingcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:info@tfarecyclingcompany.com"
                className="text-gray-300 hover:text-secondary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products?category=tables"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Tables
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=chairs"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Chairs
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=sets"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Furniture Sets
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=decor"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Decor Items
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=garden"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Garden Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <p className="text-gray-300">+234 803 300 0180</p>
                  <p className="text-gray-300">+234 805 621 2866</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-secondary mt-0.5" />
                <p className="text-gray-300">info@tfarecyclingcompany.com</p>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-7 w-7 text-secondary mt-0.5" />
                <div>
                  <p className="text-gray-300">
                    Plot A, Obafemi Awolowo Way, Ikeja, Lagos, Nigeria.
                  </p>
                  <p className="text-gray-300 mt-2">
                    No. 4, Kawu Alabi crescent, Shofunwa estate, Ikorodu, Lagos,
                    Nigeria.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TFA. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Where trash is aesthetically beautiful.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
