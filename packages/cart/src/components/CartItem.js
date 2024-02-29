import React from "react";
import { Box, Typography, Button, Grid, CardMedia } from "@mui/material";
import { styled } from "@mui/system";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../../container/src/store/cart-context";

const CartItem = ({ id, image, model, price, amount }) => {
  const triggerGithubActionAgain = ":";
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => toggleAmount(id, "inc");
  const decrease = () => toggleAmount(id, "dec");

  return (
    <ItemWrapper>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "200px auto auto",
          gap: "3rem 1rem",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "75px 125px",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={model}
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "var(--radius)",
            }}
          />
          <Box>
            <Typography variant="subtitle2">{model}</Typography>
            <Typography variant="body2" sx={{ color: "var(--clr-primary-9)" }}>
              {formatPrice(price)}
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="body1"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          {formatPrice(price)}
        </Typography>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Typography
          variant="body1"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          {formatPrice(price * amount)}
        </Typography>
        <Button
          onClick={() => removeItem(id)}
          sx={{
            color: "var(--clr-white)",
            backgroundColor: "var(--clr-red-dark)",
            "&:hover": { backgroundColor: "darken(var(--clr-red-dark), 10%)" },
          }}
        >
          <FaTrash />
        </Button>
      </Box>
    </ItemWrapper>
  );
};

const ItemWrapper = styled("article")(({ theme }) => ({
  // Add custom styles or theme-dependent styles
}));

export default CartItem;
