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
import contactUsRoute from "./routes/contactus.route.js"
import blogRoute from "./routes/blog.route.js"
// import PracticeRoute from "./routes/practice.route.js"

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
app.use(`/api/v1/auth`, authRoute);

//subscription route
app.use(`/api/v1/subscription`, subscriptionRoute);

//user route
app.use(`/api/v1/user`, userRoute);

//contactUs route
app.use(`/api/v1/contact-us`, contactUsRoute);

//blog route
app.use(`/api/v1/blog`, blogRoute);

//practice Route
// app.use(`/api/v1/practice`, PracticeRoute)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
