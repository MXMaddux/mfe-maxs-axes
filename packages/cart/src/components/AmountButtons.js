import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <Box
      className="amount-btns"
      sx={{
        display: "grid",
        width: "140px",
        justifyItems: "center",
        gridTemplateColumns: "repeat(3, 1fr)",
        alignItems: "center",
        "& .amount": {
          marginBottom: "0",
          color: "#6585e7",
        },
        "& .amount-btn": {
          background: "transparent",
          borderColor: "transparent",
          cursor: "pointer",
          padding: "1rem 0",
          width: "2rem",
          height: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#bdcbf5",
        },
      }}
    >
      <IconButton onClick={decrease} className="amount-btn" size="large">
        <RemoveIcon />
      </IconButton>
      <Typography variant="h6" className="amount" component="h2">
        {amount}
      </Typography>
      <IconButton onClick={increase} className="amount-btn" size="large">
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default AmountButtons;
