import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Hero from "./components/Hero";
import Axes from "./pages/Axes";
import SingleGuitar from "./pages/SingleGuitar";
import Cart from "./pages/CartPage";
import { CartProvider } from "../../container/src/store/cart-context";
import { UserProvider } from "../../container/src/store/user_context";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#21006e",
    },
  },
});

const App = () => {
  return (
    <div>
      <StyledEngineProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <UserProvider>
            <CartProvider>
              <Router>
                <Navbar />
                <Routes>
                  <Route exact path="/" element={<Hero />} />
                  <Route path="/axes" element={<Axes />} />
                  <Route path="/:id" element={<SingleGuitar />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </Router>
            </CartProvider>
          </UserProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
};

export default App;
