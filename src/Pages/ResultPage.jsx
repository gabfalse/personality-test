import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  CircularProgress,
  Card,
  CardContent,
  Divider,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ResultPage() {
  const [result, setResult] = useState(null);
  const [personalityData, setPersonalityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem("quizAnswers")) || {};
    const counts = {};

    Object.values(answers).forEach((type) => {
      counts[type] = (counts[type] || 0) + 1;
    });

    let bestType = null;
    let maxCount = 0;
    for (const [type, count] of Object.entries(counts)) {
      if (count > maxCount) {
        bestType = type;
        maxCount = count;
      }
    }

    setResult(bestType);

    if (bestType) {
      fetch("https://rutee.id/dapur/personality/personality-type.php")
        .then((res) => res.json())
        .then((data) => {
          if (data?.success && Array.isArray(data.data)) {
            const found = data.data.find((item) => item.type === bestType);
            if (found) {
              setPersonalityData({
                type: found.type,
                description: found.description,
              });
            }
          }
        })
        .catch((err) => console.error("Fetch error:", err))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <Container maxWidth="sm" sx={{ py: 6, textAlign: "center" }}>
        <CircularProgress size={50} sx={{ color: "#8AAFFF" }} />
        <Typography variant="body1" sx={{ mt: 2, color: "#5C7AFF" }}>
          Loading your result...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          p: 3,
          backgroundColor: "#E6F0FF", // biru soft
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{ color: "#5C7AFF", fontWeight: "bold" }}
          >
            Your Result
          </Typography>

          {result && personalityData ? (
            <>
              <Typography
                variant="h5"
                align="center"
                sx={{
                  mb: 3,
                  fontWeight: "bold",
                  color: "#8AAFFF", // biru muda
                }}
              >
                {personalityData.type}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  textAlign: "justify",
                  whiteSpace: "pre-line",
                  color: "#4A4A6B", // ungu muda
                }}
              >
                {personalityData.description}
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                  gap: 2,
                  mb: 3,
                }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 2,
                    backgroundColor: "#C8E0FF",
                    borderRadius: 2,
                    minHeight: "120px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", color: "#095f98" }}
                    gutterBottom
                  >
                    Strengths
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#4A4A6B" }}>
                    {personalityData.strengths ||
                      "See our official website for full details"}
                  </Typography>
                </Paper>

                <Paper
                  elevation={2}
                  sx={{
                    p: 2,
                    backgroundColor: "#E6D6FF",
                    borderRadius: 2,
                    minHeight: "120px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", color: "#7D4BFF" }}
                    gutterBottom
                  >
                    Weaknesses
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#4A4A6B" }}>
                    {personalityData.weaknesses ||
                      "See website for full details"}
                  </Typography>
                </Paper>

                <Paper
                  elevation={2}
                  sx={{
                    p: 2,
                    backgroundColor: "#D9F0FF",
                    borderRadius: 2,
                    minHeight: "120px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", color: "#0077B6" }}
                    gutterBottom
                  >
                    Suitable Roles
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#4A4A6B" }}>
                    {personalityData.suitable_roles ||
                      "See website for full details"}
                  </Typography>
                </Paper>
              </Box>

              <Typography
                variant="body2"
                align="center"
                sx={{ mt: 2, mb: 2, color: "#5C7AFF" }}
              >
                ⚠️ For a <strong>more accurate and complete report</strong>{" "}
                including full strengths, weaknesses, and suitable roles, visit{" "}
                <a
                  href="https://rutee.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#8AAFFF",
                    fontWeight: "bold",
                  }}
                >
                  Rutee
                </a>
                .
              </Typography>
            </>
          ) : (
            <Typography
              variant="body1"
              align="center"
              sx={{ color: "#5C7AFF" }}
            >
              No result found
            </Typography>
          )}

          <Divider sx={{ my: 3, borderColor: "#C0D4FF" }} />

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: 3,
                px: 4,
                backgroundColor: "#5C7AFF",
                "&:hover": { backgroundColor: "#8AAFFF" },
              }}
              onClick={() => navigate("/")}
            >
              Retake Quiz
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
