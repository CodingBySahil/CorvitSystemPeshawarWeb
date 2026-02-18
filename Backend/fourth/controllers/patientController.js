import PatientDetails from "../models/Patient.js";

// Save Patient
export const savePatient = async (req, res) => {

  const { name, email, cnic, contact, age } = req.body;

  console.log("Patient Form Data:", req.body);

  const newPatient = new PatientDetails({
    name,
    email,
    cnic,
    contact,
    age
  });

  await newPatient.save();

  res.send("Patient Saved Successfully");
};


// Fetch All Patients
export const getAllPatients = async (req, res) => {

  const patients = await PatientDetails.find();

  res.send(patients);
};


// Find Patient By ID
export const getPatientById = async (req, res) => {

  console.log(req.params.id);
  
  const patient = await PatientDetails.findById(req.params.id);

  if (!patient) {
    return res.send("Patient Not Found");
  }

  res.send({
    message:"Patient Found",patient
  });
};
