import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { motion } from "framer-motion";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Your Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-xl text-gray-600">Cart is empty!</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {cart.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-32 object-contain mb-4"
              />
              <h2 className="font-semibold text-center mb-2 line-clamp-2">{item.title}</h2>
              <p className="text-blue-700 font-bold text-lg mb-2">₹{item.price.toFixed(2)}</p>
            </motion.div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-blue-900">
            Total Items: {cart.length}
          </h2>
          <h2 className="text-2xl font-semibold text-blue-900">
            Total Price: ₹{totalPrice.toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
