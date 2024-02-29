import React from "react";
import CartApp from "./components/CartApp";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./store/user_context";
import { CartProvider } from "./store/cart-context";

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <div>
            <Navbar />
            <CartApp />
          </div>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
