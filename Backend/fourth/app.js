import express from "express";
import connectDB from "./config/db.js";

// Controllers
import { saveUser, getAllUsers } from "./controllers/userController.js";
import { savePatient, getAllPatients, getPatientById } from "./controllers/patientController.js";

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(express.urlencoded({ extended: true }));

// Set EJS
app.set("view engine", "ejs");


// ================= ROUTES =================

// Show Form Page
app.get("/", (req, res) => {
  res.render("form");
});


// Save User
app.post("/submit", saveUser);


// Save Patient
app.post("/submit_patient", savePatient);


// Fetch All Users
app.get("/users", getAllUsers);


// Fetch All Patients
app.get("/patients", getAllPatients);


// Find Patient by ID
app.get("/patients/:id", getPatientById);


// Start Server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
