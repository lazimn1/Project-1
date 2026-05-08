import logo from "./shoe-logo.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div id="home" className="w-full overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-screen w-full">

        {/* Background Image */}
        <img
          src={logo}
          alt="shoe"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-4 sm:px-8 lg:px-20">

          <div className="max-w-3xl">

            <p className="text-blue-500 font-semibold tracking-[3px] uppercase text-xs sm:text-sm md:text-base mb-4">
              Welcome To Nalakath Shoe Planet
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Quality Footwear
              <span className="text-blue-500"> For Every Step</span>
            </h1>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl">
              Discover premium sneakers designed with comfort,
              performance, and modern street style for everyday wear.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <Link
                to="/products"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl text-center font-semibold transition duration-300 shadow-xl"
              >
                Explore Collection
              </Link>

              <Link
                to="/cart"
                className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-2xl text-center font-semibold transition duration-300"
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        {/* Content Card */}
        <div className="relative z-10 bg-white/10 border border-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-10 lg:p-14 max-w-4xl text-center shadow-2xl">

          <p className="text-blue-500 uppercase tracking-[3px] text-xs sm:text-sm font-semibold mb-4">
            Trending Collection
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Step Into
            <span className="text-blue-500"> Style</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Explore the latest sneaker collections with premium
            quality, modern design, and unbeatable comfort for
            everyday lifestyle.
          </p>

          <Link
            to="/products"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-3 rounded-2xl text-sm sm:text-base md:text-lg font-semibold transition duration-300 shadow-xl"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}