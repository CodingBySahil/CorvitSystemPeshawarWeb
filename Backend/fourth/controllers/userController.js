import User from "../models/User.js";

// Save User
export const saveUser = async (req, res) => {

  const { username, email, cnic } = req.body;

  console.log("User Form Data:", req.body);

  const newUser = new User({
    username,
    email,
    cnic
  });

  await newUser.save();

  res.send("User Saved Successfully");
};


// Fetch All Users
export const getAllUsers = async (req, res) => {

  const users = await User.find();

  res.send(users);
};
