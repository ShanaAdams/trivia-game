import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const ScoreBoard = () => {
  const [players, setPlayers] = useState([]);

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
