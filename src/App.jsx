import "./App.css";
import ConfettiEffect from "./ConfettiEffect";
import ControlPanel from "./ControlPanel";
import { Button } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import ScoreBoard from "./ScoreBoard";
import Gameboard from "./Gameboard";

const Home = () => {
  const navigate = useNavigate();

  const playCheerSoundAndNavigate = () => {
    const audio = new Audio("/cheering-and-clapping-crowd-2-6029.mp3");
    audio.play();
    navigate("/scoreboard");
  };
  return (
    <>
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
          onClick={playCheerSoundAndNavigate}
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
};

function App() {
  return (
    <Router>
      <ControlPanel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scoreboard" element={<ScoreBoard />} />
        <Route path="/gameboard" element={<Gameboard />} />
      </Routes>
    </Router>
  );
}

export default App;
