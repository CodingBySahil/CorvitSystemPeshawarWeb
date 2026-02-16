const express = require("express");
const app = express();

// Middleware to read POST form data
app.use(express.urlencoded({ extended: true }));

// Set EJS
app.set("view engine", "ejs");

// Home Route → Show Form
app.get("/", (req, res) => {
  res.render("form");
});

// ===============================
// GET FORM HANDLING
// ===============================
app.get("/submit-get", (req, res) => {
  console.log("--------- GET FORM DATA ---------");
  console.log(req.query);

  res.send("GET Data Received! Check Console");
});

// ===============================
// POST FORM HANDLING
// ===============================
app.post("/submit-post", (req, res) => {
  console.log("--------- POST FORM DATA ---------");
  console.log(req.body);

  res.send("POST Data Received! Check Console");
});

// Start Server
app.listen(3030, () => {
  console.log("Server running at http://localhost:3030");
});
