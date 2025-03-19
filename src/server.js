import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import axios from "axios";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/trivia-game", {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

const playerSchema = new mongoose.Schema({
  name: String,
  score: Number,
});

const Player = mongoose.model("Player", playerSchema);

// Get top players MongoDB
app.get("/api/players", async (req, res) => {
  try {
    const players = await Player.find().sort({ score: -1 }).limit(10);
    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a player to MongoDB
app.post("/api/players", async (req, res) => {
  const player = new Player({
    name: req.body.name,
    score: req.body.score,
  });

  try {
    const newPlayer = await player.save();
    res.status(201).json(newPlayer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get trivia question from OpenTDB API
app.get("/api/trivia", async (req, res) => {
  try {
    const response = await axios.get("https://opentdb.com/api.php?amount=1");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch trivia question" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
