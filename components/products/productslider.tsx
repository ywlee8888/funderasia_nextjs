// /components/productcard.tsx
/*
import React from "react";

type ProductCardProps = {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  addToCart: (product: { id: number; name: string; price: string; imageUrl: string; description: string }) => void; // Ensure addToCart signature matches
};

export default function ProductCard({ id, name, description, price, imageUrl, addToCart }: ProductCardProps) {
  const handleAddToCart = () => {
    addToCart({ id, name, description, price, imageUrl }); // Call addToCart with all required fields
  };

  return (
    <div className="border rounded p-4">
      <img src={imageUrl} alt={name} className="w-full h-32 object-cover" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p>{description}</p>
      <p className="font-bold">{price}</p>
      <button onClick={handleAddToCart} className="bg-blue-500 text-white p-2 rounded">Buy Now</button>
    </div>
  );
}
  */
