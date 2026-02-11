const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();  

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/documents", require("./routes/documentRoutes"));

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
