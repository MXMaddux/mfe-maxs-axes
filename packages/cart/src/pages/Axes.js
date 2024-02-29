import React from "react";
import { guitar_list } from "../guitars_list";
import { Link } from "react-router-dom";
import { Box, styled } from "@mui/material";

const Axes = () => {
  return (
    <Wrapper className="section-center" sx={{ backgroundColor: "#21006e" }}>
      <Box className="guitar-container">
        {guitar_list.map((guitar) => {
          const { id, image, model } = guitar;
          return (
            <Box
              key={id}
              className="single-guitar container"
              sx={{
                position: "relative",
                width: "100%",
                "&:hover .overlay": { opacity: 1 },
                backgroundColor: "#21006e",
              }}
            >
              <img src={image} alt={model} className="image" />
              <Box className="overlay">
                <Link to={`/${id}`}>
                  <h2>Info</h2>
                </Link>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled(Box)(({ theme }) => ({
  minHeight: "60vh",
  height: "calc(100vh - 13px)",
  display: "grid",
  placeItems: "center",
  backgroundColor: "#21006e",
  width: "100%",
  ".guitar-container": {
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(1, minmax(200px, 1fr))",
    [theme.breakpoints.up("sm")]: {
      // Above 600px, go to 2 columns
      gridTemplateColumns: "repeat(2, minmax(200px, 1fr))",
    },
    [theme.breakpoints.up("md")]: {
      // Above 900px, go to 3 columns
      gridTemplateColumns: "repeat(3, minmax(200px, 1fr))",
    },
    [theme.breakpoints.up("lg")]: {
      // Above 1200px, keep 3 columns (or adjust if needed)
      gridTemplateColumns: "repeat(3, minmax(200px, 1fr))",
    },
    [theme.breakpoints.up("xl")]: {
      // Above 1536px, go to 4 columns
      gridTemplateColumns: "repeat(4, minmax(200px, 1fr))",
    },
  },
  ".single-guitar": {
    display: "flex", // Center content horizontally
    justifyContent: "center", // Center content horizontally
    alignItems: "center", // Center content vertically, if needed
    position: "relative",
    "&:hover .overlay": {
      opacity: 1,
    },
  },
  ".image": {
    display: "flex",
    width: "200px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "0.5rem",
    boxShadow: "3px 3px 5px #222124",
    transition: "0.3s",
    // Add margin: "auto" if the image does not center with flexbox alone
  },
  ".overlay": {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    opacity: 0,
    transition: ".5s ease",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  h2: {
    textAlign: "center",
    color: "#fff",
  },
}));

export default Axes;
