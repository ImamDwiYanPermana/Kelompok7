// server/app.js

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk menyajikan file statis dari direktori 'public'
app.use(express.static(path.join(__dirname, "../public")));

// Endpoint sederhana untuk menanggapi permintaan GET
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
