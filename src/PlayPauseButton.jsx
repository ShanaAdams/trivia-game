import React, { useRef, useState } from "react";
import { PlayArrow } from "@mui/icons-material";
import { Pause } from "@mui/icons-material";
import { IconButton, Box } from "@mui/material";

//create a PlaayArrow icon button3
// write a function for onclick to change to the Pause icon
//create a Settings icon button
//write a function for onclick to display a settings panel
//create a settings panel with a class of settings-panel
//include a slider with the VolumeDown and VolumeUp icons

const PlayPauseButton = () => {
  //track if muisc is playing
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(
    new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")
  );

  //toggle play/pause state
  const handlePlayPause = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying); // play pause state
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <IconButton
        onClick={handlePlayPause}
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
