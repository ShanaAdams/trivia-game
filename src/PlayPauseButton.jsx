import React, { useState } from "react";
import PlayArrow from "@mui/material/Icon";
import Pause from "@mui/material/Icon";
import { IconButton, Box } from "@mui/material";

const playPauseButton = () => {
  //track if muisc is playing
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = ;

  //toggle play/pause state
  const handlePlayPause = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
  }
  setIsPlaying(!isPlaying); //toggle play/pause state
};

  return (
    <Box>
      {isPlaying ? (
        <Pause onClick={() => setIsPlaying(false)} />
      ) : (
        <PlayArrow onClick={() => setIsPlaying(true)} />
      )}
    </Box>
  );
};

export default playPauseButton;
