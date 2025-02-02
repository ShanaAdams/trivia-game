import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const GameBoard = () => {
  const location = useLocation();
  const { player } = location.state || {};
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
      {player && (
        <Typography variant="h4" component="h4" gutterBottom>
          Hi {player.name}, welcome back!
        </Typography>
      )}
    </Box>
  );
};

export default GameBoard;
