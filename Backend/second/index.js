const express = require("express");

const app = express();

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
  },
  {
    id: 3,
    name: "Priya Singh",
    age: 21,
    email: "priya.singh@example.com",
    role: "UI/UX Designer",
    isActive: false
  },
  {
    id: 4,
    name: "Neha Gupta",
    age: 23,
    email: "neha.gupta@example.com",
    role: "QA Engineer",
    isActive: true
  },
  {
    id: 5,
    name: "Aman Khan",
    age: 25,
    email: "aman.khan@example.com",
    role: "DevOps Engineer",
    isActive: true
  },
  {
    id: 6,
    name: "Sneha Patel",
    age: 22,
    email: "sneha.patel@example.com",
    role: "Data Analyst",
    isActive: false
  },
  {
    id: 7,
    name: "Vikas Mehta",
    age: 26,
    email: "vikas.mehta@example.com",
    role: "Project Manager",
    isActive: true
  },
  {
    id: 8,
    name: "Karan Malhotra",
    age: 23,
    email: "karan.malhotra@example.com",
    role: "Full Stack Developer",
    isActive: true
  }
];

function users(req, res) {
  res.send(userData);
}
app.get("/api/user", users);
// server listning
app.listen(3002, (req, res) => {
  console.log("Server started http://localhost:3002");
});
