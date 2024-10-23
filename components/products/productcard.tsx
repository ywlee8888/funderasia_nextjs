import React from "react";

type ProductCardProps = {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  addToCart: (product: { id: number; name: string; description: string; price: string; imageUrl: string }) => void;
  isInCart?: boolean; // New prop to indicate if the product is in the cart
};

export default function ProductCard({ id, name, description, price, imageUrl, addToCart, isInCart = false }: ProductCardProps) {
  const handleAddToCart = () => {
    console.log("Adding to cart:", { id, name, description, price, imageUrl }); // Log when clicked
    addToCart({ id, name, description, price, imageUrl });
  };

  return (
    <div className="border rounded p-4 flex flex-col items-center">
      <img src={imageUrl} alt={name} className="w-40 h-40 object-cover mb-2" />
      <h2 className="text-xl font-semibold text-center">{name}</h2>
      <p className="text-center">{description}</p>
      <p className="font-bold text-center">{price}</p>
      <button 
        onClick={handleAddToCart} 
        className={`bg-blue-500 text-white p-2 rounded ${isInCart ? 'opacity-50 cursor-not-allowed' : ''}`} 
        disabled={isInCart} // Disable if the item is in the cart
      >
        {isInCart ? 'Added to Cart' : 'Buy Now'}
      </button>
    </div>
  );
}
