import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// ES modules fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import data
import portfolioData from './data/portfolio.js';
import teamData from './data/team.js';
import { calculatePortfolioMetrics } from './utils/portfolioUtils.js';

// Helper function to shuffle an array
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

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
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/components', express.static(path.join(__dirname, 'components')));

// Serve node_modules for client-side dependencies if needed
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

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
  const metrics = calculatePortfolioMetrics(portfolioData);
  // Send the data in a consistent order and let client handle randomization
  res.render("portfolio", { 
    portfolioCompanies: [...portfolioData], // Send in original order
    metrics,
    // Include a seed for client-side randomization if needed
    randomSeed: Date.now()
  });
});

// Privacy Policy page
app.get("/privacy", (req, res) => {
  res.render("privacy");
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
export default app;
