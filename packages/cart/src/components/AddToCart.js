import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../container/src/store/cart-context";
import AmountButtons from "../components/AmountButtons";
import { Box, Button, styled } from "@mui/material";

const AddToCart = ({ guitar }) => {
  // add to cart
  const { addToCart } = useCartContext();
  const { id, stock } = guitar;
  const [amount, setAmount] = useState(0);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1; // Updated to prevent amount going below 1
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <Box className="btn-container">
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
          className="amount-btn"
        />
        <Button
          variant="contained"
          sx={{
            marginTop: "1rem",
            backgroundColor: "#4c06f0", // Custom background color
            color: "#fff", // Text color for the button itself
            textDecoration: "none", // Remove underline from links globally (if applicable)
            "&:hover": {
              backgroundColor: "#3a04d0", // Darken the background color slightly on hover
            },
            "& a": {
              // Targeting the Link component specifically
              color: "inherit", // Inherit the color from the Button component
              textDecoration: "none", // Ensure no underline
            },
          }}
        >
          <Link to="/cart" onClick={() => addToCart(id, amount, guitar)}>
            Add To Cart
          </Link>
        </Button>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled(Box)({
  marginTop: "2rem",
  ".colors": {
    display: "grid",
    gridTemplateColumns: "125px 1fr",
    alignItems: "center",
    marginBottom: "1rem",
    "& span": {
      textTransform: "capitalize",
      fontWeight: 700,
    },
    "& div": {
      display: "flex",
    },
  },
  ".color-btn": {
    display: "inline-block",
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "50%",
    background: "#222",
    marginRight: "0.5rem",
    border: "none",
    cursor: "pointer",
    opacity: 0.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      fontSize: "0.75rem",
      color: "var(--clr-white)",
    },
  },
  ".active": {
    opacity: 1,
  },
  ".btn-container": {
    marginTop: "2rem",
  },
  ".btn": {
    marginTop: "1rem",
    width: "140px",
    height: "36.5px",
    backgroundColor: "#4c06f0",
    color: "#fff",
  },
});

export default AddToCart;
