import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 pt-60 border-t border-t-gray-700">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Nalakath Shoes</h3>
          <p className="text-sm leading-relaxed">
            Quality footwear for every step. Designed with comfort, style, and value in mind.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/products" className="hover:text-blue-600">Products</a></li> 
            <li><a href="/about" className="hover:text-blue-600">About Us</a></li> 
            <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
            <li><a href="/cart" className="hover:text-blue-600">Cart</a></li> 
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#facebook" className="hover:text-blue-600">Facebook</a>
            <a href="#instagram" className="hover:text-blue-600">Instagram</a>
            <a href="#twittet" className="hover:text-blue-600">Twitter</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-white mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Nalakath Shoes. All rights reserved.
      </div>
    </footer>
  );
}
