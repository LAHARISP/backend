const express = require("express");
const cors = require("cors");

const app = express();

// Configure CORS
const corsOptions = {
  origin: "https://frontend1-e8w5uq6px-laharisp6-gmailcoms-projects.vercel.app",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions)); // Enable CORS

// Other Middleware
app.use(express.json());

app.post("/register", (req, res) => {
  res.json({ message: "Registration successful" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
