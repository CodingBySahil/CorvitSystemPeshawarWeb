const express = require("express");

const app = express();

/*
|--------------------------------------------------------------------------
| MIDDLEWARE
|--------------------------------------------------------------------------
| This allows Express to read form data
*/
app.use(express.urlencoded({ extended: true }));

/*
|--------------------------------------------------------------------------
| SET VIEW ENGINE
|--------------------------------------------------------------------------
| Tell Express we are using EJS
*/
app.set("view engine", "ejs");

/*
|--------------------------------------------------------------------------
| DUMMY USER DATA
|--------------------------------------------------------------------------
*/
const userData = [
  {
    id: 1,
    name: "Ankit Sharma",
    age: 22,
    email: "ankit.sharma@example.com",
    role: "Frontend Developer",
    isActive: true
  },
  {
    id: 2,
    name: "Rohit Verma",
    age: 24,
    email: "rohit.verma@example.com",
    role: "Backend Developer",
    isActive: true
  }
];

/*
|--------------------------------------------------------------------------
| ROUTE 1: API USERS
|--------------------------------------------------------------------------
| URL: http://localhost:3002/api/user
*/
app.get("/api/user", (req, res) => {
  res.json(userData);
});

/*
|--------------------------------------------------------------------------
| ROUTE 2: SHOW FORM (EJS)
|--------------------------------------------------------------------------
| URL: http://localhost:3002/form
*/
app.get("/form", (req, res) => {
  res.render("form"); // renders views/form.ejs
});

/*
|--------------------------------------------------------------------------
| ROUTE 3: HANDLE FORM SUBMIT
|--------------------------------------------------------------------------
*/
app.post("/submit-form", (req, res) => {

  // Get data from form
  const name = req.body.name;
  const email = req.body.email;
  const role = req.body.role;

  console.log("Form Data Received:");
  console.log(name, email, role);

  res.send("Form submitted successfully!");
});

// Server listening
app.listen(3002, () => {
  console.log("Server started at http://localhost:3002");
});
