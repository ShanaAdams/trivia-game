import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const ScoreBoard = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "burlywood",
        }}
      >
        <Typography variant="h1" component="h2" gutterBottom>
          ScoreBoard
        </Typography>
      </Box>
    </div>
  );
};

export default ScoreBoard;
