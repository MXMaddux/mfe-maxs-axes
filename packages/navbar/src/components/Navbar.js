import React from "react";
import logo from "../assets/logo/png/logo-no-background.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "../components/CartButtons";
import { useGuitarsContext } from "../../../container/src/store/guitars-context";
import { useUserContext } from "../../../container/src/store/user_context";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

function Navbar() {
  const { openSidebar } = useGuitarsContext();
  const { myUser } = useUserContext();
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "var(--clr-primary-9)",
        height: "8rem",
        padding: "0 2rem",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: "var(--max-width)",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <img
              src={logo}
              alt="Max's Axes"
              style={{ width: "300px", marginLeft: "-15px" }}
            />
          </Link>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={openSidebar}
          >
            <FaBars />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <Typography key={id} sx={{ margin: "0 0.5rem" }}>
                <Link
                  to={url}
                  style={{
                    color: "var(--clr-grey-3)",
                    textDecoration: "none",
                    padding: "0.5rem",
                    fontSize: "1rem",
                  }}
                >
                  {text}
                </Link>
              </Typography>
            );
          })}
          {myUser && (
            <Typography sx={{ margin: "0 0.5rem" }}>
              <Link
                to="/checkout"
                style={{
                  color: "var(--clr-grey-3)",
                  textDecoration: "none",
                  padding: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                checkout
              </Link>
            </Typography>
          )}
        </Box>
        <CartButtons />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
