import React from "react";
import { formatPrice } from "../utils/helpers";
import { useCartContext } from "../../../container/src/store/cart-context";
import { useUserContext } from "../../../container/src/store/user_context";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <Wrapper>
      <Paper elevation={3}>
        <Box sx={{ padding: "1.5rem 3rem" }}>
          <Typography variant="h5" className="total" gutterBottom>
            subtotal: <span>{formatPrice(total_amount)}</span>
          </Typography>
          <Typography variant="body1" className="shipping-fee" gutterBottom>
            shipping fee: <span>{formatPrice(shipping_fee)}</span>
          </Typography>
          <hr />
          <Typography variant="h4" className="total" sx={{ mt: 2 }}>
            order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
          </Typography>
        </Box>
        {myUser ? (
          <Button
            component={Link}
            to="/checkout"
            className="btn"
            variant="contained"
          >
            proceed to checkout
          </Button>
        ) : (
          <Button
            onClick={loginWithRedirect}
            className="btn"
            variant="contained"
          >
            login
          </Button>
        )}
      </Paper>
    </Wrapper>
  );
};

const Wrapper = styled("section")(({ theme }) => ({
  marginTop: "3rem",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-end",
  },
  ".btn": {
    width: "100%",
    marginTop: "1rem",
    textAlign: "center",
    fontWeight: 700,
  },
  ".total": {
    color: theme.palette.primary.main,
  },
  ".shipping-fee": {
    color: theme.palette.grey[600],
  },
  hr: {
    margin: theme.spacing(2, 0),
  },
}));

export default CartTotals;
