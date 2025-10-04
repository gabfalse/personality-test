import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  LinearProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Questions from "./Question";

export default function QuizPage() {
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const currentQuestion = Questions[currentIndex];

  const handleChange = (id, type) => {
    setAnswers({ ...answers, [id]: type });
  };

  const handleNext = () => {
    if (currentIndex < Questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // quiz selesai
      localStorage.setItem("quizAnswers", JSON.stringify(answers));
      navigate("/result");
    }
  };

  const progress = ((currentIndex + 1) / Questions.length) * 100;

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: 6,
          p: 2,
          background: "linear-gradient(135deg, #f5f5f5, #e3f2fd)",
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom color="primary" align="center">
            Sneak Peek Personality Quiz
          </Typography>

          {/* Progress bar */}
          <Box sx={{ mb: 3 }}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ borderRadius: 2, height: 10 }}
            />
            <Typography
              variant="body2"
              align="right"
              sx={{ mt: 1, fontStyle: "italic" }}
            >
              {currentIndex + 1} / {Questions.length}
            </Typography>
          </Box>

          {/* Pertanyaan */}
          <Typography variant="h6" gutterBottom>
            {currentQuestion.question}
          </Typography>

          <RadioGroup
            value={answers[currentQuestion.id] || ""}
            onChange={(e) => handleChange(currentQuestion.id, e.target.value)}
          >
            {currentQuestion.options.map((opt, i) => (
              <FormControlLabel
                key={i}
                value={opt.type}
                control={<Radio />}
                label={opt.text}
              />
            ))}
          </RadioGroup>

          {/* Tombol Next / Finish */}
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              disabled={!answers[currentQuestion.id]}
              onClick={handleNext}
              sx={{ borderRadius: 3, px: 5 }}
            >
              {currentIndex === Questions.length - 1 ? "See Result" : "Next"}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
