import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 border-t border-gray-800">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Nalakath Shoes
          </h2>

          <p className="text-sm leading-7 text-gray-400">
            Premium footwear designed for comfort, performance,
            and modern style. Step confidently every day.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="/"
                className="hover:text-white transition duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/products"
                className="hover:text-white transition duration-300"
              >
                Products
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="hover:text-white transition duration-300"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="hover:text-white transition duration-300"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                href="/cart"
                className="hover:text-white transition duration-300"
              >
                Cart
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Support
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-white transition duration-300 cursor-pointer">
              FAQ
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Shipping
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Returns
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              Facebook
            </a>

            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              Instagram
            </a>

            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              Twitter
            </a>

            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          
          <p>
            © {new Date().getFullYear()} Nalakath Shoes. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="hover:text-white transition duration-300 cursor-pointer">
              Terms
            </span>

            <span className="hover:text-white transition duration-300 cursor-pointer">
              Privacy
            </span>

            <span className="hover:text-white transition duration-300 cursor-pointer">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}