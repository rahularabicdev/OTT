import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "../routes/user.routes.js";

const app = express();

// CORS Options
const corsOptions = {
  origin: process.env.CORS_OPTIONS || "http://localhost:3000",
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));

// Options
app.options("*", cors(corsOptions));

// Routes
app.use("/api/users", userRoutes);

// Test Route
app.get("/api", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

export default app;
