import { createContext, useState } from "react";
import Products from "../components/Products";

export const CartContext = createContext();

export const CartProvider = ({children})=>{

    const [cart,setCart] = useState([]);

   const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("Cart updated:", cart);
};


   
    return (
        <CartContext.Provider value={{ cart, addToCart }}
>
            {children}
        </CartContext.Provider>
    )

}