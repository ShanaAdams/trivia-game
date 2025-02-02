import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ScoreBoard = () => {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/players", {
        name: playerName,
        score: 0,
      });
      setSubmitted(true);
      navigate("/gameboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "burlywood",
      }}
    >
      <Typography variant="h1" component="h2" gutterBottom>
        ScoreBoard
      </Typography>
      {submitted ? (
        <Typography variant="h4" component="h4" gutterBottom>
          Hi, {playerName}!
        </Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            required
            sx={{ marginBottom: "20px" }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "burlywood",
              "&:hover": { backgroundColor: "goldenrod" },
            }}
          >
            Submit
          </Button>
        </form>
      )}
      <List>
        {players.map((player, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${player.name}: ${player.score}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ScoreBoard;
