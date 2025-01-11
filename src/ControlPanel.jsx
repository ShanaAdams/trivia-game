import React, { useEffect, useRef, useState } from "react";

import SettingsPanel from "./Settings";
import PlayPauseButton from "./PlayPauseButton";
import { IconButton, Box } from "@mui/material";
import { use } from "react";

const ControlPanel = () => {
  const audioRef = useRef(
    new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")
  );
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    //Initialize audio
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set initial volume
      audioRef.current.loop = true; // Loop the audio
    }
  }, []);

  const handlePlayPause = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying); // play pause state
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        display: "flex",
        alignItems: "center", // Align items vertically centered
        gap: "20px", // Adjust the gap as needed
        padding: "10px", // Optional padding
      }}
      className="control-panel"
    >
      <SettingsPanel audioRef={audioRef} />
      <PlayPauseButton
        audioRef={audioRef}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
      />
    </Box>
  );
};

export default ControlPanel;
