import "./App.css";
import ConfettiEffect from "./ConfettiEffect";
import ControlPanel from "./ControlPanel";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  DialogContentText,
  Box,
} from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import ScoreBoard from "./ScoreBoard";
import Gameboard from "./Gameboard";
import { useEffect, useState } from "react";
import { use } from "react";

const Home = () => {
  const navigate = useNavigate();

  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/players");
        setPlayers(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPlayers();
  }, []);

  const handlePlayerSelect = (player) => {
    setSelectedPlayer(player);
    setOpen(false);
    navigate("/gameboard", { state: { player } });
  };

  const playCheerSoundAndNavigate = () => {
    const audio = new Audio("/cheering-and-clapping-crowd-2-6029.mp3");
    audio.play();
    navigate("/scoreboard");
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          background:
            "linear-gradient(to bottom right, rgba(222, 184, 135, 0.9), rgba(222, 184, 135, 0.5))",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            width: "calc(100% - 20px)",
            height: "calc(100% - 20px)",
            background:
              "linear-gradient(to bottom right, rgba(222, 184, 135, 0.0), rgba(222, 184, 135, 0.4))",
            zIndex: 1,
            borderRadius: "4px",
          }}
        />
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <DialogTitle>Select a player</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Select a player, otherwise close player selection to start a new
              game.
            </DialogContentText>
            <List>
              {players.map((player, index) => (
                <ListItem
                  button
                  onClick={() => handlePlayerSelect(player)}
                  key={index}
                >
                  <ListItemText primary={player.name} />
                </ListItem>
              ))}
            </List>
          </DialogContent>
        </Box>
      </Dialog>
      <div
        className="container"
        style={{ textAlign: "center", padding: "20px" }}
      >
        <h1 className="dancing-script-landing-title">
          Welcome to My Trivia Game!
        </h1>
        <ConfettiEffect />
        <p style={{ color: "burlywood" }}>Get ready to test your knowledge.</p>
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
    </div>
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
