import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { motion } from "framer-motion"; // Correct import
import { ThemeContext } from "../context/ThemeContext";

const Products = () => {
  const { cart, addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div
      className={`min-h-screen p-6 transition-all duration-500 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-100 to-blue-300 text-black"
      }`}
    >
      <h1
        className={`text-3xl font-bold text-center mb-10 ${
          theme === "dark" ? "text-white" : "text-blue-800"
        }`}
      >
        Featured Products
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`rounded-2xl shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-40 object-contain mb-4"
            />
            <h2 className="font-semibold text-lg text-center line-clamp-2 mb-2">
              {item.title}
            </h2>
            <p
              className={`font-bold text-lg mb-4 ${
                theme === "dark" ? "text-yellow-300" : "text-blue-700"
              }`}
            >
              ₹{item.price}
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => addToCart(item)}
              className={`px-4 py-2 rounded-xl transition ${
                theme === "dark"
                  ? "bg-yellow-500 text-black hover:bg-yellow-400"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Add To Cart
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
