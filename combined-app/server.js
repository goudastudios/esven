const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/components", express.static(path.join(__dirname, "components")));

// Route for intro page as entry point
app.get("/", (req, res) => {
  res.render("index");
});

// Home, Portfolio, Team, Contact
app.get("/home.html", (req, res) => {
  res.render("home");
});

app.get("/portfolio.html", (req, res) => {
  res.render("portfolio");
});

app.get("/team.html", (req, res) => {
  res.render("team");
});

app.get("/contact.html", (req, res) => {
  res.render("contact");
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Combined Esven App running at http://localhost:${PORT}`);
    console.log("Available routes:");
    console.log("  /           - Intro page");
    console.log("  /home.html - Main landing page");
    console.log("  /portfolio.html - Portfolio");
    console.log("  /team.html - Team");
    console.log("  /contact.html - Contact");
  });
}

// Export for Vercel
module.exports = app;
