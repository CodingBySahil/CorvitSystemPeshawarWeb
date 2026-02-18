import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/BaheejAhmad");

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Baheej this is a DB Connection Error:", error);
  }
};

export default connectDB;
