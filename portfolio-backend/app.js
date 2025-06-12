const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRoutes = require("../portfolio-backend/route/userRoute");
const userRoutes = require("./routes/userRoute");
app.use("/api/user", userRoutes);

const app = express();

app.use(express.json()); // Parse JSON bodies
const allowedOrigins = [
  "http://localhost:3000",
  "https://internship-me.netlify.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use("/api/user", userRoutes);

module.exports = app;
