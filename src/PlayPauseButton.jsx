import React, { useRef, useState } from "react";
import { PlayArrow } from "@mui/icons-material";
import { Pause } from "@mui/icons-material";
import { IconButton, Box } from "@mui/material";

const PlayPauseButton = ({ audioRef, isPlaying, onPlayPause }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      <IconButton
        onClick={onPlayPause}
        color="primary"
        sx={{
          backgroundColor: "burlywood",
          "&:hover": { backgroundColor: "goldenrod" },
          boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
          width: "60px",
          height: "60px",
        }}
      >
        {isPlaying ? (
          <Pause sx={{ fontSize: 40, color: "white" }} />
        ) : (
          <PlayArrow sx={{ fontSize: 40, color: "white" }} />
        )}
      </IconButton>
    </Box>
  );
};

export default PlayPauseButton;
