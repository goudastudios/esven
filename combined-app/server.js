const express = require("express");
const path = require("path");
const portfolioData = require("./data/portfolio");
const teamData = require("./data/team");

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static assets from various directories
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/components', express.static(path.join(__dirname, 'components')));

// Log all requests for debugging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Route for intro page as entry point
app.get("/", (req, res) => {
  res.render("index");
});

// Home, Portfolio, Team, Contact
app.get("/home.html", (req, res) => {
  res.render("home");
});

app.get("/portfolio.html", (req, res) => {
  res.render("portfolio", { portfolioCompanies: portfolioData });
});

app.get("/team.html", (req, res) => {
  console.log("Team data:", teamData); // Log the team data
  try {
    res.render("team", { 
      teamMembers: teamData,
      title: 'Our Team | Esven'
    });
  } catch (error) {
    console.error('Error rendering team page:', error);
    res.status(500).send('Error loading team page');
  }
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
