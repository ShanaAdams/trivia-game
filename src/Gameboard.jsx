import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";

const Gameboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        color: "burlywood",
        padding: "20px",
      }}
    >
      <Typography variant="h1" component="h2" gutterBottom>
        GameBoard
      </Typography>
    </Box>
  );
};

export default Gameboard;
