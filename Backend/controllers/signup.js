const express = require("express");
const router = express.Router();
const signupModel = require("../models/signupSchema.js");

router.post("/", async (req, res) => {
  var data = new signupModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
