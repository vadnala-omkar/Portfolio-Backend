const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const projectRoutes = require("./routes/projectRoute");
const ExperienceRoute = require("./routes/ExperienceRoute");
const certificateRoutes = require("./routes/CertificateRoute");

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 4500;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve images

// Debugging: Log MongoDB URL (ensure it's not undefined)
// console.log("Connecting to MongoDB:", process.env.MONGO_URL);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connected Successfully"))
  .catch((err) => {console.error("MongoDB Connection Error:", err.message);});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use("/project", projectRoutes);
app.use("/experience", ExperienceRoute);
app.use("/certificates", certificateRoutes);