export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center mt-40">
        {/* Responsive heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-8">
          About Us
        </h2>

        {/* Responsive paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
          At <span className="font-semibold text-blue-600">Nalakath Shoe Planet</span>, 
          we believe footwear is more than just fashion — it’s a lifestyle. 
          Our mission is to bring you the latest styles, unmatched comfort, 
          and unbeatable prices. Whether you’re hitting the streets, the gym, 
          or a night out, we’ve got the perfect pair for every step.
        </p>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-blue-600">Quality</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              We source only premium materials to ensure durability and comfort.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-blue-600">Style</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Our designs keep you ahead of trends while staying timeless.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-blue-600">Value</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Affordable pricing without compromising on quality or looks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
