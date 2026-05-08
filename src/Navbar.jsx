import { useState } from "react";
import logo from './4in-logo.png';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex shadow-2xl items-center justify-between bg-black/60 z-50 backdrop-blur-xs h-13 sm:h-auto md:h-auto lg:h-20">
      <div className="flex items-center">
        <img src={logo} alt="4in logo" className="w-7 sm:w-10 md:w-15 lg:w-20 h-auto mx-4" />
        <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-blue-600">NALAKATH</h1>
      </div>
      <div>
        <ul className="hidden md:flex space-x-6 mx-10 p-6 text-white">
          <Link to="/" className="hover:text-blue-700">Home</Link>

          <Link to="/products" className="hover:text-blue-700">Products</Link>

          <Link to="/contact" className="hover:text-blue-700">Contact</Link>

          <a href="#about" className="hover:text-blue-700">About</a>

          <Link to="/cart" className="hover:text-blue-700">Cart</Link>
        </ul>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-6 text-xl text-white hover:text-blue-700 hover:scale-110 transition duration-200">☰</button>
      </div>

      {menuOpen && (
        <ul className="absolute top-13 sm:top-19 right-0 md:hidden flex flex-col bg-black/70 text-white px-6 py-4 mx-1 space-y-4 rounded-b-sm">
          <Link to="/" className="hover:text-blue-600">Home</Link>

          <Link to="/products" className="hover:text-blue-600">Products</Link>
          
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>

          <a href="#about" className="hover:text-blue-600">About</a>

          <Link to="/cart" className="hover:text-blue-600">Cart</Link>
        </ul>
      )}      
      
    </nav>
  );
}