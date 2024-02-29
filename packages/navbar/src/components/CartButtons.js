import React from "react";
import { FaShoppingCart, FaUserPlus, FaUserMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../store/cart_context";
import { useUserContext } from "../store/user_context";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CartButtons() {
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        width: "225px",
      }}
    >
      <Link
        to="/cart"
        style={{ textDecoration: "none", color: "var(--clr-grey-1)" }}
      >
        <Button
          sx={{
            color: "var(--clr-grey-1)",
            fontSize: "1.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          Cart
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              ml: 0.5,
            }}
          >
            <FaShoppingCart />
            <Box
              sx={{
                position: "absolute",
                top: "-10px",
                right: "-16px",
                backgroundColor: "var(--clr-primary-5)",
                width: "16px",
                height: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                fontSize: "0.75rem",
                color: "var(--clr-white)",
                padding: "12px",
              }}
            >
              {total_items}
            </Box>
          </Box>
        </Button>
      </Link>
      {myUser ? (
        <Button
          onClick={() => {
            clearCart();
            localStorage.removeItem("user");
            logout({ returnTo: window.location.origin });
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "1.5rem",
            color: "var(--clr-grey-1)",
          }}
        >
          Logout <FaUserMinus sx={{ ml: 0.5 }} />
        </Button>
      ) : (
        <Button
          onClick={loginWithRedirect}
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "1.5rem",
            color: "var(--clr-grey-1)",
          }}
        >
          Login <FaUserPlus sx={{ ml: 0.5 }} />
        </Button>
      )}
    </Box>
  );
}

export default CartButtons;
