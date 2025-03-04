const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Correct CORS setup
const corsOptions = {
    origin: "https://frontend1-gules-delta.vercel.app", // Replace with your Vercel frontend URL
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
};

app.use(cors(corsOptions)); // Apply CORS Middleware

app.use(express.json());

// Your routes
app.post("/register", (req, res) => {
    res.json({ message: "Registration successful!" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
