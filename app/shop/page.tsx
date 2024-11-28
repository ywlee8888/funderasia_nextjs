// app/shop/page.tsx
"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar/navbar";
import Copyright from "@/components/copyright/copyright";
import SidebarCart from "@/components/sidebar/sidebar_cart";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number; // Added quantity property
};

const products: Product[] = [
  {
    id: 1,
    name: "Devi's Claw Compile",
    description: "This is the description for Product 1.",
    price: 29.99,
    image: "/products/devils_claw.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Lecithin Compile",
    description: "This is the description for Product 2.",
    price: 49.99,
    image: "/products/lecithin_compile.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "Pau D Compile",
    description: "This is the description for Product 3.",
    price: 19.99,
    image: "/products/pau_d_compile.jpg",
    quantity: 1,
  },
  {
    id: 4,
    name: "Red Respberry Compile",
    description: "This is the description for Product 3.",
    price: 19.99,
    image: "/products/red_respberry_compile.jpg",
    quantity: 1,
  },
  {
    id: 5,
    name: "Slippery Elm Bark",
    description: "This is the description for Product 3.",
    price: 19.99,
    image: "/products/slippery_elm_bark.jpg",
    quantity: 1,
  },
  {
    id: 6,
    name: "Spirulina Compile",
    description: "This is the description for Product 3.",
    price: 19.99,
    image: "/products/spirulina_compile.jpg",
    quantity: 1,
  },
  {
    id: 7,
    name: "Supa Bio C",
    description: "This is the description for Product 3.",
    price: 19.99,
    image: "/products/supa_bio_c.jpg",
    quantity: 1,
  },
  {
    id: 8,
    name: "Uva Ursi Compile",
    description: "This is the description for Product 3.",
    price: 19.99,
    image: "/products/uva_ursi_compile.jpg",
    quantity: 1,
  },
  {
    id: 9,
    name: "Hawthorn Compile",
    description: "This is the description for Product 3.",
    price: 19.99,
    image: "/products/hawthorn_compile.jpg",
    quantity: 1,
  },
];

export default function ShopPage() {
  const [isSpecialistConnectOpen, setIsSpecialistConnectOpen] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false); // State for showing checkout form
  const [showCart, setShowCart] = useState(false); // State for toggling cart view

  // Toggle Cart visibility
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  // Add to Cart function
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });
    // Automatically show the cart when an item is added
    setShowCart(true);
  };

  // Increase quantity
  const increaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item from cart
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Toggle checkout form visibility
  const toggleCheckout = () => {
    setIsCheckoutOpen(!isCheckoutOpen);
  };

  // Function to toggle SpecialistConnect visibility
  const toggleSpecialistConnect = () => {
    setIsSpecialistConnectOpen(!isSpecialistConnectOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Conditionally render SidebarCart */}
      {showCart && (
        <SidebarCart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />
      )}

      {/* Navbar */}
      <Navbar
        className="absolute top-0 left-0 w-full z-10"
        toggleSpecialistConnect={toggleSpecialistConnect} // Pass down the toggle function
      />

      {/* Cart Toggle Button */}
      <button
        onClick={toggleCart}
        className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded z-20 hover:bg-blue-600"
      >
        {showCart ? "Hide Cart" : "Show Cart"}
      </button>

      {/* Main Content */}
      <div className="flex-1 container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-6">Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded p-4 shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-76 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-blue-600 font-bold">
                ${product.price.toFixed(2)}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Checkout Button in Sidebar */}
      {showCart && (
        <button
          onClick={toggleCheckout}
          className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-2 rounded z-20 hover:bg-green-600"
        >
          Check Out
        </button>
      )}

      {/* Checkout Form */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
          <div className="bg-white p-8 rounded shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Delivery Address
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your delivery address"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Credit Card Number
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your credit card number"
                />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={toggleCheckout}
                  className="bg-red-500 text-white px-4 py-2 rounded mr-4"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded"
                >
                  Submit Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="relative w-full">
        <Copyright />
      </div>
    </div>
  );
}
