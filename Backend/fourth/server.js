const express = require("express");

const app = express();

// app.get("/", (req, res) => res.send("Hello World!"));

const userDetails = [
  {
    name: "Fiazan ahmad",
    cnic: 1231312,
    isMarried: true,
  },
  {
    name: "Fiazan ahmad",
    cnic: 1231312,
    isMarried: true,
  },
  {
    name: "shayan ahmad",
    cnic: 1231312,
    isMarried: true,
  },
  {
    name: "ibrar ahmad",
    cnic: 1231312,
    isMarried: true,
  },
  {
    name: "kamran ahmad",
    cnic: 1231312,
    isMarried: true,
  },
];
app.get("/", (req, res) => {
  res.json({
    name: "ram",
    age: 23,
  });
});


// http://localhost:3030/user
app.get("/user", (req, res) => {
  res.json(userDetails);
});
app.listen(3030, (req, res) => {
  console.log("server is running on http://localhost:3030");
});
