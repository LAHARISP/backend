const express = require("express");
const cors = require("cors");

const app = express();  // ✅ Define the Express app instance first

const corsOptions = {
    origin: process.env.FRONTEND_URL || "https://frontend1-gules-delta.vercel.app", // Allow frontend requests
    credentials: true, // Allow cookies
};

app.use(cors(corsOptions)); // ✅ Apply CORS after defining `app`
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
