import logo from './shoe-logo.png'
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div id='home' className='relative'>
        <img src={logo} className="h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-black/30"></div>

        <div style={{marginTop:"20%"}} className='absolute inset-0 flex flex-col'>
          <h1 style={{marginLeft:"2%"}} className='text-sm  sm:text-lg md:text-xl lg:text-3xl text-white font-medium mb-1'>WELCOME TO NALAKATH SHOE PLANET</h1>
          <p style={{marginLeft:"8%"}} className='text-xs sm:text-md md:text-lg lg:text-xl text-black font-extrabold mb-6'>"Quality footwear for every step."</p>
          <Link to='/products'
             style={{marginLeft:"12%"}}
             className='text-xs sm:text-md md:text-lg lg:text-xl size-fit px-4 py-1 items-center text-center text-white border-white hover:border-red-700 hover:text-red-500 shadow-2xl border-2 rounded-4xl'
            >Explore Collections
          </Link>
        </div>

        <section
         className="relative flex flex-col  items-center justify-center text-center h-screen bg-cover bg-center"
         style={{backgroundImage: 'url(https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}
         >
          <div className="absolute inset-0 backdrop-blur-xs bg-black/30"></div>

          <div className="relative bg-gray-900/70 p-8 rounded-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-700 mb-3">step Into Style</h1>
            <p className="text-xs sm:text-xs md:text-sm lg:text-lg text-gray-300 mb-10">Discover the latest shoes at unbeatable prices.</p>
            <Link
                to="/products"
                className="text-sm sm:text-sm md:text-lg lg:text-2xl px-5 py-3 bg-blue-700 text-white rounded-lg shadow-2xl shadow-black hover:bg-blue-600"
                >Shop Now
            </Link>
          </div>    
        </section>
    </div>
  )
}

/*
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
  */
