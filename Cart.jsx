import PropTypes from "prop-types";

function Cart({ cart, setCart }) {
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );
    setCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const handleCheckout = () => {
    alert("Thank you for your purchase!");
    setCart([]);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg overflow-hidden shadow-md p-4">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b-2 py-2"
        >
          <div className="flex items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 object-contain rounded"
            />
            <div className="ml-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-700">ETB {item.price}</p>
              <p className="mx-2">Quantity: {item.quantity}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Increase Quantity
                </button>
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Decrease Quantity
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Total: ETB {totalPrice}</h2>
        <button
          onClick={handleCheckout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
    }),
  ).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Cart;
