import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { cart } = useContext(CartContext);

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`navbar flex justify-between items-center px-6 py-4 shadow-md sticky top-0 z-50 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-blue-500 text-white"
      } transition-colors duration-500`}
    >
      <h1 className="text-2xl font-bold">
        <Link to="/">🛍️ Online Store</Link>
      </h1>

      <div className="flex items-center gap-6">
        {/* Theme Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="bg-white text-black px-3 py-1 rounded-lg shadow hover:scale-105 transition-transform"
        >
          {theme === "dark" ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </motion.button>

        {/* Cart */}
        <Link
          to="/cart"
          className="relative hover:scale-105 transition-transform"
        >
          🛒
          <span className="ml-1">Cart</span>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs rounded-full px-2">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
