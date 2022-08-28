const express = require("express");
const router = express.Router();
const { hash } = require('bcrypt');
const signupModel = require("../models/signupSchema.js");

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await signupModel.findOne({ email });
    if (userExists) return res.status(409).json({ error: 'Email taken' });

    const hashedPassword = await hash(password, 12);
    const data = { name, email, password: hashedPassword };
    const newUserData = new signupModel(data);

    const newUser = await newUserData.save();
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
