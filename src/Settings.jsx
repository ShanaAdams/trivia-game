import React, { useState } from "react";
import { Settings, VolumeDown, VolumeUp } from "@mui/icons-material";
import { Slider } from "@mui/material";
import { IconButton, Box } from "@mui/material";

const SettingsPanel = () => {
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);
  const [volume, setVolume] = useState(30); //initial volume value

  const handleVolumeDown = () => {
    setVolume((prevVolume) => Math.max(prevVolume - 10, 0)); // Decrease volume by 10, minimum 0
  };
  const handleVolumeUp = () => {
    setVolume((prevVolume) => Math.min(prevVolume + 10, 100)); // Increase volume by 10, maximum 100
  };

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
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "space-between",
            flexDirection: "row",
            backgroundColor: "burlywood",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "20px",
            width: "300px",
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
