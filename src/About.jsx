export default function About() {
  return (
    <section id="about" className="py-40 bg-black">
      <div className="max-w-5xl mx-auto px-15 md:px-7 lg:px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">About Us</h2>
        <p className="text-xs md:text-md lg:text-lg text-white leading-relaxed mb-10">
          At <span className="font-semibold text-blue-600">Nalakath Shoe Planet</span>, 
          we believe footwear is more than just fashion — it’s a lifestyle. 
          Our mission is to bring you the latest styles, unmatched comfort, 
          and unbeatable prices. Whether you’re hitting the streets, the gym, 
          or a night out, we’ve got the perfect pair for every step.
        </p>

        <div className="grid grid-cols-3 md:grid-cols-3 mt-50">
          <div className="px-5 lg:px-20 border-2 border-r-white">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Quality</h3>
            <p className="text-white text-xs md:text-md lg:text-lg">We source only premium materials to ensure durability and comfort.</p>
          </div>
          <div className="px-5 lg:px-20 border-2 border-r-white">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Style</h3>
            <p className="text-white text-xs md:text-md lg:text-lg">Our designs keep you ahead of trends while staying timeless.</p>
          </div>
          <div className="px-5 lg:px-20 border-2 ">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Value</h3>
            <p className="text-white text-xs md:text-md lg:text-lg">Affordable pricing without compromising on quality or looks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
