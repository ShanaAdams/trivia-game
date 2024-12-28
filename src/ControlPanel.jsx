import React from "react";

import SettingsPanel from "./Settings";
import PlayPauseButton from "./PlayPauseButton";
import { IconButton, Box } from "@mui/material";

const ControlPanel = () => {
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
      <SettingsPanel />
      <PlayPauseButton />
    </Box>
  );
};

export default ControlPanel;
