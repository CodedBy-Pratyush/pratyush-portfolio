// app.js

const express = require("express");
const cors = require("cors");

const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(
  cors({
    origin: "https://pratyush-portfolio-khaki.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
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
