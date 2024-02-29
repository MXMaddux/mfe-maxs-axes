import React from "react";
import { Box, Button, Typography, Link as MuiLink } from "@mui/material";
import { useCartContext } from "../../../container/src/store/cart-context";
import CartContent from "../components/CartContent";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          ".empty": {
            textAlign: "center",
            "& h2": {
              marginBottom: "1rem",
              textTransform: "none",
              color: "#bdcbf5",
            },
          },
        }}
      >
        <div className="empty">
          <Typography variant="h2" gutterBottom>
            Your cart is empty
          </Typography>
          <Button
            component={Link}
            to="/axes"
            variant="contained"
            color="primary"
          >
            Fill it
          </Button>
        </div>
      </Box>
    );
  }

  return (
    <main>
      {/* <PageHero title='cart' /> */}
      <Box
        sx={
          {
            // Apply any required styles for the 'page' class here.
            // If the 'page' class does not require specific styles, this can be simplified.
          }
        }
      >
        <CartContent />
      </Box>
    </main>
  );
};

export default CartPage;
