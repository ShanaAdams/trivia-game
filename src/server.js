import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/trivia-game", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const playerSchema = new mongoose.Schema({
  name: String,
  score: Number,
});

const Player = mongoose.model("Player", playerSchema);

// Get top players
app.get("/api/players", async (req, res) => {
  try {
    const players = await Player.find().sort({ score: -1 }).limit(10);
    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a player
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
