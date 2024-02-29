import React from "react";
import { styled } from "@mui/system";

// MUI v5 styled component
const Container = styled("footer")(({ theme }) => ({
  height: "5rem",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#000000", // Using theme for colors if you want to stick with MUI theme
  textAlign: "center",
  "& span": {
    color: "#7600ef", // Example of using theme for color
  },
  "& h5": {
    color: "#ffffff",
    margin: "0.1rem",
    fontWeight: 400,
    fontSize: "1.25rem",
    textTransform: "none",
    lineHeight: 1.25,
  },
  "& button": {
    borderRadius: theme.shape.borderRadius, // Using theme for border-radius
    fontSize: "1rem",
    padding: "0.5rem 1rem",
    background: "#21006e", // Example of using theme for background color
    marginLeft: "5px",
  },
  "@media (min-width: 776px)": {
    flexDirection: "row",
  },
}));

const Footer = () => {
  return (
    <Container>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Max's Axes </span>
      </h5>
      <h5>All rights reserved</h5>
    </Container>
  );
};

export default Footer;
