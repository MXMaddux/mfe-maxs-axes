import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../store/cart_context";
import { useUserContext } from "../store/user_context";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { Box, Button, Badge, Typography } from "@mui/material";

function CartButtons() {
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      width: '225px',
      '.cart-btn': {
        color: 'var(--clr-grey-1)', // Replace with your actual color variable or value
        fontSize: '1.5rem',
        letterSpacing: 'var(--spacing)', // Replace with your actual spacing variable or value
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none', // To remove underline from Link
      },
      '.auth-btn': {
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        border: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer',
        color: 'var(--clr-grey-1)', // Replace with your actual color variable or value
        letterSpacing: 'var(--spacing)', // Replace with your actual spacing variable or value
      }
    }}>
      <Link to="/cart" className="cart-btn">
        Cart
        <Badge badgeContent={total_items} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </Link>
      {myUser ? (
        <Button
          className="auth-btn"
          onClick={() => {
            clearCart();
            localStorage.removeItem("user");
            logout({ returnTo: window.location.origin });
          }}
          startIcon={<LogoutIcon />}
        >
          Logout
        </Button>
      ) : (
        <Button
          className="auth-btn"
          onClick={loginWithRedirect}
          startIcon={<LoginIcon />}
        >
          Login
        </Button>
      )}
    </Box>
  );
}

export default CartButtons;
