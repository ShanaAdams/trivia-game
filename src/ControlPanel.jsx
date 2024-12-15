import React from "react";
import PlayArrow from "@mui/material/Icon";
import Pause from "@mui/material/Icon";
import Slider from "@mui/material/Slider";

const ControlPanel = () => {
  return (
    <div className="control-panel">
      <BackgroundMusic />
      <Pause />
      <Settings />
      <div className="settings-panel">
        <VolumeDown />
        <Slider />
        <VolumeUp />
      </div>
    </div>
  );
};
//create a PlaayArrow icon button
// write a function for onclick to change to the Pause icon
//create a Settings icon button
//write a function for onclick to display a settings panel
//create a settings panel with a class of settings-panel
//include a slider with the VolumeDown and VolumeUp icons

export default ControlPanel;
