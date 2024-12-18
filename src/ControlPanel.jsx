import React from "react";
import PlayArrow from "@mui/material/Icon";
import Pause from "@mui/material/Icon";
import Slider from "@mui/material/Slider";
import PlayPauseButton from "./PlayPauseButton";

const ControlPanel = () => {
  return (
    <div className="control-panel">
      <PlayPauseButton />
      {/* <Settings /> */}
      <div className="settings-panel">
        {/* <VolumeDown /> */}
        {/* <Slider /> */}
        {/* <VolumeUp /> */}
      </div>
    </div>
  );
};

export default ControlPanel;
