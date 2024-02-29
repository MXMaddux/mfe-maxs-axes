import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { useCartContext } from "../../../container/src/store/cart-context";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Your cart is empty
        </Typography>
        <Button variant="contained" component={Link} to="/axes" sx={{ mt: 2 }}>
          Fill it
        </Button>
      </Box>
    );
  }

  return (
    <Box className="section section-center" sx={{ my: 4 }}>
      <CartColumns />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
          ".link-btn": {
            backgroundColor: "transparent",
            borderColor: "transparent",
            textTransform: "capitalize",
            padding: "0.25rem 0.5rem",
            backgroundColor: "#1f49c6",
            color: "#ffffff",
            borderRadius: "0.25rem",
            letterSpacing: "0.1rem",
            fontWeight: 400,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#163e91", // Slightly darker on hover for visual feedback
            },
          },
          ".clear-btn": {
            backgroundColor: "#000000",
            "&:hover": {
              backgroundColor: "#333333", // Slightly lighter on hover for visual feedback
            },
          },
        }}
      >
        <Button
          variant="outlined"
          component={Link}
          to="/axes"
          className="link-btn"
        >
          Continue Shopping
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={clearCart}
          className="clear-btn"
        >
          Clear Shopping Cart
        </Button>
      </Box>
      <CartTotals />
    </Box>
  );
};

export default CartContent;
