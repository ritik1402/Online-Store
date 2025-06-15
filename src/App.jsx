import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/cartContext";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./components/Cart";


function App() {
  return (
<ThemeProvider>
  <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
</ThemeProvider>

  );
}

export default App;
