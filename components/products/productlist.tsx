"use client"; // Ensure this component is a Client Component
import ProductCard from "./productcard"; // Correct import

type Product = {
  id: number;
  name: string;
  description: string; // Ensure this is included
  price: string;
  imageUrl: string;
};

type ProductListProps = {
  products: Product[];
  addToCart: (product: Product) => void;
  isInCart: (id: number) => boolean; // This returns a boolean to check if product is in cart
};

export default function ProductList({ products, addToCart, isInCart }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            addToCart={addToCart}
            isInCart={isInCart(product.id)} // This should be boolean (true/false)
          />
        ))
      ) : (
        <p className="col-span-full text-center text-lg text-gray-500">
          No products available. Please check back later.
        </p>
      )}
    </div>
  );
}
