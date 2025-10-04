import { Container, Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #224a86ff 30%, #52a4f7ff 90%)", // biru gelap → biru
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              p: 5,
              borderRadius: 4,
              boxShadow: 6,
              textAlign: "center",
              backgroundColor: "white",
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              Welcome!
            </Typography>

            <Typography variant="h6" sx={{ mb: 3, color: "text.secondary" }}>
              Take this quick sneak peek personality quiz and discover which{" "}
              <strong>one of our 8 personalities</strong> matches you best.
            </Typography>

            <Stack spacing={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  borderRadius: 3,
                  py: 1.5,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
                onClick={() => navigate("/quiz")}
              >
                🚀 Start the Test
              </Button>

              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{
                  borderRadius: 3,
                  py: 1.5,
                  textTransform: "none",
                  fontSize: "1rem",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
                onClick={() => window.open("https://rutee.id", "_blank")}
              >
                🌐 Visit Official for More Accurate Result
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
