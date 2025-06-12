const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRoutes = require("../portfolio-backend/route/userRoute");

const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(
  cors({ origin: "https://your-frontend.netlify.app", credentials: true })
);
app.use(morgan("dev"));
app.use("/api/user", userRoutes);

module.exports = app;
