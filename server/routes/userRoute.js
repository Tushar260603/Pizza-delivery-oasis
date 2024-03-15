const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await new User({ name, email, password });
  try {
    newUser.save();
    res.status(200).json({
      success: true,
      message: "Register success",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});
// router.post('/register', async (req, res) => {
//   try {
//       // Create a new user based on the request body
//       const newUser = new User({
//           username: req.body.username,
//           email: req.body.email,
//           password: req.body.password
//       });

//       // Save the user to the database
//       await newUser.save();

//       // Respond with success message
//       res.status(201).json({ message: 'User registered successfully!' });
//   } catch (error) {
//       // Respond with error message if registration fails
//       res.status(500).json({ message: 'Failed to register user.', error: error.message });
//   }
// });

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email, password });
    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0].Id,
      };
      res.status(200).send(currentUser);
    } else {
      res.status(400).json({
        message: "Login Failed",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Something Went wrong",
    });
  }
});

router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});

router.post("/deleteuser", async (req, res) => {
  const userid = req.body.userid;
  try {
    await User.findOneAndDelete({ _id: userid });
    res.status(200).send("User Deleted");
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});
module.exports = router;