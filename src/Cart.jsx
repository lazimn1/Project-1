import { useEffect, useState } from "react";

export default function Cart() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(savedCart);

  }, []);

  const increaseQty = (id) => {

    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const decreaseQty = (id) => {

    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item
    );

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const removeItem = (id) => {

    const updatedCart =
      cartItems.filter((item) => item.id !== id);

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-24">

      <h1 className="text-4xl font-bold text-blue-600 text-center mb-10">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center mt-50 items-center">

          <h2 className="text-2xl font-bold text-red-500">
            Cart is Empty
          </h2>

        </div>

      ) : (

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-6">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg p-4 flex flex-col sm:flex-row gap-5 items-center"
              >

                <img
                  src={item.img}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-xl"
                />

                <div className="flex-1 text-center sm:text-left">

                  <h2 className="text-2xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    ${item.price}
                  </p>

                  <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">

                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-gray-200 px-4 py-1 rounded-lg text-xl"
                    >
                      -
                    </button>

                    <span className="text-lg font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-gray-200 px-4 py-1 rounded-lg text-xl"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">

                  <p className="text-xl font-bold">
                    ${item.price * item.quantity}
                  </p>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">

            <h2 className="text-3xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4 text-lg">
              <span>Total Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between mb-6 text-xl font-bold">
              <span>Total Price</span>
              <span>${totalPrice}</span>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl text-lg font-semibold">
              Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
}