import React from "react";
import { Box, Typography } from "@mui/material";

const CartColumns = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" }, // 'md' corresponds to 768px in MUI's default theme breakpoints
        ".content": {
          display: "grid",
          gridTemplateColumns: "316px repeat(3, 1fr) auto",
          justifyItems: "center",
          columnGap: "1rem",
          "& h5": {
            color: "var(--clr-grey-5)", // Adjust color as needed, possibly defining a theme or directly using MUI's color system
            fontWeight: 400,
          },
        },
        span: {
          width: "2rem",
          height: "2rem",
        },
        hr: {
          marginTop: "1rem",
          marginBottom: "3rem",
        },
      }}
    >
      <div className="content">
        <Typography variant="h5">item</Typography>
        <Typography variant="h5">price</Typography>
        <Typography variant="h5">quantity</Typography>
        <Typography variant="h5">subtotal</Typography>
        <span></span>
      </div>
      <hr />
    </Box>
  );
};

export default CartColumns;
