// Import Express framework
// Express makes backend development easier than plain Node.js
const express = require("express");

// Create an Express application
const app = express();

// Define a route (API endpoint)
// When user opens http://localhost:3000/
app.get("/", (req, res) => {

  // Send response to browser
  res.send("Hello World API from Express.js");

});

// Start the server on port 3000
app.listen(3001, () => {
  console.log("Server running at http://localhost:3000");
});
