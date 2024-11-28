import React from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
};

type SidebarProps = {
  cart: Product[];
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const SidebarCart: React.FC<SidebarProps> = ({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  const calculateSubTotal = (product: Product) =>
    (product.price * product.quantity).toFixed(2);

  const calculateGrandTotal = () =>
    cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);

  return (
    <div style={{ top: '6.5rem' }} className="fixed right-0 w-80 h-full bg-gray-100 shadow-lg p-4 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="mb-6">
              <div className="flex items-center mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-gray-700">${product.price.toFixed(2)}</p>
                  <p className="text-gray-700">
                    Subtotal: ${calculateSubTotal(product)}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => decreaseQuantity(product.id)}
                  className="px-2 py-1 bg-gray-300 text-gray-700 rounded-l"
                  disabled={product.quantity <= 1}
                >
                  -
                </button>
                <span className="px-4">{product.quantity}</span>
                <button
                  onClick={() => increaseQuantity(product.id)}
                  className="px-2 py-1 bg-gray-300 text-gray-700 rounded-r"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="ml-auto bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xl font-bold">GRAND TOTAL: ${calculateGrandTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default SidebarCart;
