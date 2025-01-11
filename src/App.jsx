import { useState } from "react";
import "./App.css";
import ConfettiEffect from "./ConfettiEffect";
import ControlPanel from "./ControlPanel";
import { Button } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);
  const playCheerSound = () => {
    const audio = new Audio("/cheering-and-clapping-crowd-2-6029.mp3");
    audio.play();
  };
  return (
    <>
      <ControlPanel />
      <div
        className="container"
        style={{ textAlign: "center", padding: "20px" }}
      >
        <h1 className="dancing-script-landing-title">
          Welcome to My Trivia Game!
        </h1>
        <ConfettiEffect />
        <p>Get ready to test your knowledge.</p>
        <Button
          onClick={playCheerSound}
          sx={{
            backgroundColor: "burlywood",
            "&:hover": { backgroundColor: "goldenrod" },
            boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
            width: "200px",
            height: "60px",
            fontSize: "20px",
          }}
          variant="contained"
        >
          Start Game
        </Button>
      </div>
    </>
  );
}

export default App;
