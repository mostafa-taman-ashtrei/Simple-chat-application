const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.cookie("token", "loggedOut");

  res.status(200).json({ message: "successfully logged out" });
});

module.exports = router;
