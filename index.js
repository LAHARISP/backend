const cors = require("cors");

const corsOptions = {
  origin: "https://frontend1-gules-delta.vercel.app", // Your frontend URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow cookies and authentication headers
};

app.use(cors(corsOptions)); // Apply CORS to allow frontend requests
