import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ConfettiEffect from "./ConfettiEffect";
import ControlPanel from "./ControlPanel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ControlPanel /> */}
      <div
        className="container"
        style={{ textAlign: "center", padding: "20px" }}
      >
        <h1 className="dancing-script-landing-title">
          Welcome to My Trivia Game!
        </h1>
        <ConfettiEffect />
        <p>Get ready to test your knowledge.</p>
        <a href="#" className="custom-button">
          Start Game
        </a>
      </div>
    </>
  );
}

export default App;
