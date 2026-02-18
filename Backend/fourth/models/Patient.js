import mongoose from "mongoose";
const PatientDetailsSchema = new mongoose.Schema({
  name: String,
  cnic: String,
  email: String,
  contact: String,
  age: Number,
});

const PatientDetails = new mongoose.model("Patient", PatientDetailsSchema);
export default PatientDetails;
