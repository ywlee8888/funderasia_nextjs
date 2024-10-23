'use client';
// /context/CartContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the Product and CartItem types
type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
};

type CartItem = Product & {
  quantity: number;
};

// Define the context type
type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  totalItems: number;
};

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create the provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === product.id);
      if (itemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    setTotalItems((prevTotal) => prevTotal + 1);
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => 
        item.id === id ? { ...item, quantity } : item
      );
      const totalQuantity = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
      setTotalItems(totalQuantity);
      return updatedItems;
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      const totalQuantity = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
      setTotalItems(totalQuantity);
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
