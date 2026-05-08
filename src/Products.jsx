import logo from './shoe-logo.png'

const products = [
  {
      id: 1,
      name: "Nike Air Max",
      price: 120,
      img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-II6282-100_1.jpg",
    },
    {
      id: 2,
      name: "Adidas Superstar",
      price: 150,
      img: "https://images.unsplash.com/photo-1593287073863-c992914cb3e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWRpZGFzfGVufDB8fDB8fHww"
    },
    {
      id: 3,
      name: "Puma RS-X",
      price: 100,
      img: "https://images.unsplash.com/photo-1715716234817-19e699050f60?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Reebok Classic",
      price: 90,
      img: "https://images.unsplash.com/photo-1727957019444-a9c99ee0ebb7?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      name: "Converse Run Star",
      price: 110,
      img: "https://images.unsplash.com/photo-1561909848-977d0617f275?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udmVycyUyMHJ1biUyMHN0YXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 6,
      name: "New Balance 550",
      price: 130,
      img: "https://images.unsplash.com/photo-1665517464780-ab4f42d8af95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwYmFsYW5jZSUyMDU1MHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 7,
      name: "Vans Old Skool",
      price: 85,
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "Jordan Retro",
      price: 200,
      img: "https://images.unsplash.com/photo-1656335362192-2bc9051b1824?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9yZGFuJTIwcmV0cm98ZW58MHx8MHx8fDA%3D",
    },

]
export default function Products() {

  const addToCart = (product) => {

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = existingCart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {

      const updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

    } else {

      existingCart.push({
        ...product,
        quantity: 1,
      });

      localStorage.setItem(
        "cart",
        JSON.stringify(existingCart)
      );
    }

    alert("Added To Cart");
  };

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-24">

      <h1 className="text-4xl font-bold text-blue-600 text-center ">
        Products
      </h1>

      <p className="text-xl text-center text-gray-600 mb-20">premium sneakers collections for you.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
          >

            <img
              src={product.img}
              alt={product.name}
              className="w-full h-72 object-cover hover:scale-105 transition duration-500"
            />

            <div className="p-5 text-center">

              <h2 className="text-2xl font-bold">
                {product.name}
              </h2>

              <p className="text-2xl text-gray-500 mt-2 font-black">
                ${product.price}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}