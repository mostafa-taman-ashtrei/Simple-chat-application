const express = require("express");
const router = express.Router();
const userModel = require("../models/signupSchema");
const auth = require("../middleware/auth");
const passport = require("passport");


router.get("/", (req, res) => {
  res.send("Welcome to signin page");
});

router.post("/", auth, (req, res, next) => {
  try {
    console.log(';s;;;;;');
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err); }
      if (!user) return res.json({ error: info.message });

      req.logIn(user, (err) => {
        if (err) { return next(err); }
        return res.json({ user });
      });
    })(req, res, next);

  } catch (e) {
    console.log(e);
    return { status: 500, e: 'ServerError', data: null };
  }
  // let providedEmail = req.body.email;
  // let providedPassword = req.body.password;

  // console.log('sssssssssssssssssss', { providedEmail, providedPassword });

  // console.log(req.cookies.token);

  // userModel.findOne({ email: providedEmail }, function (err, user) {
  //   if (err) {
  //     res.status(400).json({ message: "Wrong Email" });
  //   } else {
  //     if (user.password === providedPassword) {
  //       res.cookie("token", user._id);
  //       res.status(200).json({ message: "Successfully" });
  //     } else {
  //       res.status(400).json({ message: "Wrong Password" });
  //     }
  //   }
  // });
});

module.exports = router;
