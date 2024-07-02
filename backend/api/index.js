import express from "express";
import { connectDatabase } from "../config/database.js";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

// Import routes
import userRoute from "./routes/user.route.js";
import authRoute  from "./routes/auth.route.js"
import subscriptionRoute  from "./routes/subscription.route.js"

// Initialize express app
const app = express();

// Load environment variables
dotenv.config({
  path: "./config/.env",
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// Connect to the database
connectDatabase();

// Define routes
app.get("/", (req, res) => {
  res.json({
    message: "API is working",
  });
});

// Use user routes
const baseUrl =  "/api/v1/"
app.use(`/api/v1/auth`, authRoute);

//subscription route
app.use(`/api/v1/subscription`, subscriptionRoute);

//user route
app.use(`/api/v1/user`, userRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
