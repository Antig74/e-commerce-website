import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function Product({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-contain mt-5"
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">ETB {product.price}</p>
        <p className="text-gray-800 mb-4">{product.description}</p>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
    }),
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;
