import React from "react";
import { FaShoppingCart, FaUserPlus, FaUserMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../container/src/store/cart-context";
import { useUserContext } from "../../../container/src/store/user_context";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function CartButtons() {
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  // comment to trigger deploy

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
        style={{ textDecoration: "none", color: "hsl(209, 61%, 16%)" }}
      >
        <Button
          sx={{
            color: "hsl(209, 61%, 16%)",
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
                backgroundColor: "#1f49c6",
                width: "16px",
                height: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                fontSize: "0.75rem",
                color: "#ffffff",
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
            color: "hsl(209, 61%, 16%)",
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
            color: "hsl(209, 61%, 16%)",
          }}
        >
          Login <FaUserPlus sx={{ ml: 0.5 }} />
        </Button>
      )}
    </Box>
  );
}

export default CartButtons;
