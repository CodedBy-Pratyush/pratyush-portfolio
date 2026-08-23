// app.js
// Sets up the Express app: middleware + routes.

const express = require("express");
const cors = require("cors");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

// CORS configuration - allow multiple frontend URLs
const allowedOrigins = [
 "https://pratyush-portfolio-khaki.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.FRONTEND_URL || "https://pratyush-portfolio-khaki.vercel.app",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes("*")) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Pratyush Banerjee portfolio API is running.");
});

app.use("/api/ai", aiRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

module.exports = app;
