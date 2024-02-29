import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Button, styled } from "@mui/material";
import heroBcg from "../assets/ma_hero_bcg.jpg";
import heroBcg2 from "../assets/ma_hero_bcg_2.jpg";
import trademark from "../assets/TM-150x150-1.jpg";

const Hero = () => {
  return (
    <Wrapper>
      <Box className="content">
        <Typography variant="h1" gutterBottom>
          Max's Axes <br />
        </Typography>
        <Box className="underline" />
        <Typography
          variant="h6"
          component="p"
          className="hands-text"
          gutterBottom
        >
          "Get your hands around their necks"
          <img src={trademark} className="trademark-img" alt="tm" />
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </Typography>
        <Button
          component={RouterLink}
          to="/axes"
          variant="contained"
          className="hero-btn"
          sx={{
            backgroundColor: "#4c06f0", // Custom background color
            color: "#fff", // Text color
            "&:hover": {
              backgroundColor: "#3a04d0", // Darken the background color slightly on hover
            },
          }}
        >
          shop now
        </Button>
      </Box>
      <Box className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled(Box)(({ theme }) => ({
  minHeight: "70vh",
  height: "100%",
  display: "grid",
  backgroundColor: "#21006e",
  placeItems: "center",
  width: "100vw",
  ".img-container": {
    display: "none",
  },
  ".content": {
    paddingLeft: theme.spacing(9), // Add padding to the left of the content
  },
  p: {
    lineHeight: 2,
    maxWidth: "45em",
    marginBottom: theme.spacing(4),
    color: theme.palette.grey[600],
    fontSize: "1rem",
  },
  h1: {
    color: "#e9eefc",
  },
  ".hands-text": {
    color: "#e9eefc",
  },

  ".trademark-img": {
    height: 15,
    width: 15,
  },
  ".underline": {
    width: "8.5rem",
    height: "0.25rem",
    backgroundColor: "#4c06f0",
    margin: theme.spacing(1, 0),
  },
  [theme.breakpoints.up("lg")]: {
    height: "calc(100vh - 5rem)",
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing(10),
    h1: {
      marginBottom: theme.spacing(4),
    },
    p: {
      fontSize: "1.25rem",
    },
    ".hero-btn": {
      padding: theme.spacing(1.5, 3),
      fontSize: "1rem",
    },
    ".img-container": {
      display: "block",
      position: "relative",
      ".main-img": {
        width: "100%",
        height: 550,
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        display: "block",
        objectFit: "cover",
      },
      "&::before": {
        content: '""',
        position: "absolute",
        width: "8%",
        height: "68%",
        backgroundColor: "#4c06f0", // Updated background color
        bottom: "25%",
        left: "-6%",
        borderRadius: theme.shape.borderRadius,
      },

      ".accent-img": {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: 250,
        transform: "translateX(-50%)",
        borderRadius: theme.shape.borderRadius,
      },
    },
  },
}));

export default Hero;
