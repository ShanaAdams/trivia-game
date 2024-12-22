import React from "react";

import SettingsPanel from "./Settings";
import PlayPauseButton from "./PlayPauseButton";
import { IconButton, Box } from "@mui/material";

//create a Settings icon button
//write a function for onclick to display a settings panel
//create a settings panel with a class of settings-panel
//include a slider with the VolumeDown and VolumeUp icons

const ControlPanel = () => {
  return (
    <div className="control-panel">
      <PlayPauseButton />
      <SettingsPanel />
    </div>
  );
};

export default ControlPanel;
