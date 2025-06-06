import React, { useState, useEffect } from "react";
import { Settings, VolumeDown, VolumeUp } from "@mui/icons-material";
import { Slider } from "@mui/material";
import { IconButton, Box } from "@mui/material";

const SettingsPanel = ({ audioRef }) => {
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);
  const [volume, setVolume] = useState(0.3); //initial volume value

  const handleVolumeDown = () => {
    setVolume((prevVolume) => Math.max(prevVolume - 0.1, 0)); // Decrease volume by 0.1, minimum 0
  };
  const handleVolumeUp = () => {
    setVolume((prevVolume) => Math.min(prevVolume + 0.1, 1)); // Increase volume by 0.1, maximum 1
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume, audioRef]);

  return (
    <div className="settings-panel">
      <IconButton
        onClick={() => setIsSettingsPanelOpen(!isSettingsPanelOpen)}
        color="primary"
        sx={{
          backgroundColor: "burlywood",
          "&:hover": { backgroundColor: "goldenrod" },
          boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
          width: "60px",
          height: "60px",
        }}
      >
        <Settings sx={{ fontSize: 40, color: "white" }} />
      </IconButton>
      {isSettingsPanelOpen && (
        <Box
          sx={{
            position: "absolute",
            top: "50px",
            right: "0px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "burlywood",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "20px",
            width: "300px",
            zIndex: 1000, // Ensure the settings panel is on top of other elements
          }}
        >
          <IconButton onClick={handleVolumeDown}>
            <VolumeDown sx={{ fontSize: 40, color: "white" }} />
          </IconButton>
          <Slider
            value={volume}
            onChange={(e, newValue) => setVolume(newValue)}
            aria-label="Volume"
            sx={{ width: "200px", color: "white" }}
            min={0}
            max={1}
            step={0.1}
          />
          <IconButton onClick={handleVolumeUp}>
            <VolumeUp sx={{ fontSize: 40, color: "white" }} />
          </IconButton>
        </Box>
      )}
    </div>
  );
};

export default SettingsPanel;
