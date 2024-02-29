import React from "react";
import { useParams } from "react-router-dom";
import { guitar_list } from "../guitars_list";
import { Link } from "react-router-dom";
import AddToCart from "../components/AddToCart";
import { formatPrice } from "../utils/helpers";
import { Box, Button, styled } from "@mui/material";

const SingleGuitar = () => {
  const { id } = useParams();
  console.log("id: ", id);
  const guitar = guitar_list.find((guitar) => guitar.id === id);

  return (
    <Wrapper sx={{ backgroundColor: "#35006e" }}>
      <Box className="section section-center page" sx={{ padding: "2rem" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4c06f0", // Custom background color
            color: "#fff", // Text color
            "&:hover": {
              backgroundColor: "#3a04d0", // Darken the background color slightly on hover
            },
          }}
        >
          <Link to="/axes" style={{ color: "inherit", textDecoration: "none" }}>
            Back To Axes
          </Link>
        </Button>
        <Box className="guitar-center">
          <img src={guitar.image} alt={guitar.model} />
          <Box className="content">
            <h2 className="model">{guitar.model}</h2>
            <h5 className="price">{formatPrice(guitar.price)}</h5>
            <p className="desc">{guitar.description}</p>
            <Box className="info">
              <span>Brand :</span>
              {guitar.brand}
            </Box>
            <hr />

            <AddToCart guitar={guitar} />
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  img: {
    width: "80%",
    height: "auto",
  },
  btn: {
    width: "140px",
    height: "36.5px",
    backgroundColor: "#7200e8",
    color: "#fff",
  },
  ".guitar-center": {
    display: "grid",
    gap: "4rem",
    marginTop: "2rem",
    backgroundColor: "#21006e",
  },
  ".model": {
    color: "#8097df",
  },
  ".price": {
    color: "white",
  },
  ".desc": {
    lineHeight: 2,
    maxWidth: "45em",
    color: "#91a8ee",
  },
  ".info": {
    textTransform: "capitalize",
    width: "300px",
    display: "grid",
    gridTemplateColumns: "125px 1fr",
    color: "#fff",
    "& span": {
      fontWeight: 700,
      color: "#6585e7",
    },
  },
  [theme.breakpoints.up("md")]: {
    ".guitar-center": {
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
    },
    ".price": {
      fontSize: "1.25rem",
    },
  },
  ".section-center": {
    backgroundColor: "#21006e",
  },
}));

export default SingleGuitar;
