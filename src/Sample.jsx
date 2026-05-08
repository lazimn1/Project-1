export default function Products() {
  const shoes = [
    {
      id: 1,
      name: "Nike Air Max",
      price: "$120",
      img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-II6282-100_1.jpg",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: "$150",
      img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Puma RS-X",
      price: "$100",
      img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/390776/53/sv01/fnd/IND/fmt/png/RS-X-Efekt-PRM-Sneakers",
    },
    {
      id: 4,
      name: "Reebok Classic",
      price: "$90",
      img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Converse Run Star",
      price: "$110",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "New Balance 550",
      price: "$130",
      img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "Vans Old Skool",
      price: "$85",
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "Jordan Retro",
      price: "$200",
      img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="products"
      className="bg-white py-20 px-6 pt-30"
    >
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900">
          Featured Products
        </h2>
    
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {shoes.map((shoe) => (
          <div
            key={shoe.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
          >
            <div className="overflow-hidden">
              <img
                src={shoe.img}
                alt={shoe.name}
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {shoe.name}
              </h3>

              <p className="text-lg text-gray-500 font-bold mb-4">
                {shoe.price}
              </p>

              <button className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}