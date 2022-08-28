const express = require("express");
const router = express.Router();
const userModel = require("../models/signupSchema");

router.get("/", (req, res) => {
  // console.log(req.cookies.token);
  if (req.cookies.token === loggedOut) {
    res.status(200).json({ message: "Please SignIn" });
  } else {
    userModel.findOne({ _id: req.cookies.token }, function (err, user) {
      if (err) {
        res.status(200).json({ message: "Please SignUp" });
      } else {
        res.status(200).json({ message: "Hello User" });
      }
    });
  }
});

module.exports = router;
