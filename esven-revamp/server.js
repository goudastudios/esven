const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from designs directories
app.use("/original", express.static(path.join(__dirname, "designs/original")));
app.use("/design1", express.static(path.join(__dirname, "designs/design1")));
app.use("/design2", express.static(path.join(__dirname, "designs/design2")));
app.use("/design3", express.static(path.join(__dirname, "designs/design3")));
app.use("/data", express.static(path.join(__dirname, "data")));
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(express.static("public"));
app.use("/assets", express.static("assets"));

// Shared data endpoint
app.get("/api/data", (req, res) => {
  const data = require("./data/content.js");
  res.json(data);
});

// Routes for different designs
app.get("/", (req, res) => {
  res.send(`
    <h1>Esven.us Revamp Demo</h1>
    <p>Choose a design to view:</p>
    <ul>
      <li><a href="/original">Original Site Revamp</a></li>
      <li><a href="/design1">Design Concept 1: The Track Record Focus</a></li>
      <li><a href="/design2">Design Concept 2: The Relationship Builder Focus</a></li>
      <li><a href="/design3">Design Concept 3: The Modern Minimalist Focus</a></li>
    </ul>
  `);
});

app.get("/original", (req, res) => {
  res.sendFile(path.join(__dirname, "designs/original/index.html"));
});

// Design routes - serve intro pages by default
app.get("/design1", (req, res) => {
  res.sendFile(path.join(__dirname, "designs/design1/intro.html"));
});

app.get("/design2", (req, res) => {
  res.sendFile(path.join(__dirname, "designs/design2/intro.html"));
});

app.get("/design3", (req, res) => {
  res.sendFile(path.join(__dirname, "designs/design3/intro.html"));
});

// Specific intro page routes (for direct access)
app.get("/design1/intro.html", (req, res) => {
  res.sendFile(path.join(__dirname, "designs/design1/intro.html"));
});

app.get("/design2/intro.html", (req, res) => {
  res.sendFile(path.join(__dirname, "designs/design2/intro.html"));
});

app.get("/design3/intro.html", (req, res) => {
  res.sendFile(path.join(__dirname, "designs/design3/intro.html"));
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Esven Revamp Demo running at http://localhost:${PORT}`);
    console.log("Available routes:");
    console.log("  /original - Original site revamp");
    console.log("  /design1 - The Track Record Focus");
    console.log("  /design2 - The Relationship Builder Focus");
    console.log("  /design3 - The Modern Minimalist Focus");
  });
}

// Export for Vercel
module.exports = app;
