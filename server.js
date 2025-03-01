const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

// Allow all origins (temporarily for testing)
app.use(cors());

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the Dice Roller API!");
});

// RESTful API to roll a dice
app.get("/roll", (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    res.json({ result: diceRoll });
});

// Simulate a CORS failure by blocking requests from a specific origin
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://blocked-origin.com");
    next();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
