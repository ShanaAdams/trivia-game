import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Paper, Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const GameBoard = () => {
  const location = useLocation();
  const { player } = location.state || {};
  const [question, setQuestion] = useState();
  const [choices, setChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("null");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    //Fetch a trivia question from openTDB API
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=1&type=multiple"
        );
        const data = response.data.results[0];
        setQuestion(data.question);
        setCorrectAnswer(data.correct_answer);
        setChoices(
          [...data.incorect_answers, data.correct_answer].sort(
            () => Math.random() - 0.5
          )
        );
      } catch (err) {
        console.error(err);
      }
    };

    fetchQuestion();
  }, []);

  const handleAnswerSelect = (choice) => {
    setSelectedAnswer(choice);
    if (choice === correctAnswer) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect. The correct answer is: " + correctAnswer);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        color: "burlywood",
        padding: "20px",
      }}
    >
      <Typography variant="h1" component="h2" gutterBottom>
        GameBoard
      </Typography>
      {player && (
        <Typography
          variant="h4"
          component="h4"
          gutterBottom
          sx={{
            fontFamily: '"Dancing Script", cursive',
            fontOpticalSizing: "auto",
            fontWeight: 700,
            fontStyle: "normal",
            textAlign: "center",
            // color: "Goldenrod",
            textShadow: "2px 2px 0px rgba(0, 0, 0, 0.4)",
            fontSize: "3rem",
          }}
        >
          Hi {player.name}, welcome back!
        </Typography>
      )}
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
          width: "80%",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" component="h5" gutterBottom>
          {question}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {choices.map((choice, index) => (
            <Button
              key={index}
              variant="contained"
              onClick={() => handleAnswerSelect(choice)}
              disabled={selectedAnswer !== null}
              sx={{
                backgroundColor:
                  selectedAnswer === choice ? "burlywood" : "white",
                color: selectedAnswer === choice ? "white" : "burlywood",
                "&:hover": { backgroundColor: "goldenrod", color: "white" },
                boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
                width: "100%",
                height: "60px",
                fontSize: "20px",
                margin: "5px 0",
                textTransform: "none",
              }}
            >
              {choice}
            </Button>
          ))}
        </Box>
        {feedback && (
          <Typography variant="h6" component="h6" gutterBottom>
            {feedback}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default GameBoard;
