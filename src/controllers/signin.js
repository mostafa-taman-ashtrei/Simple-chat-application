const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const passport = require("passport");


router.get("/", (req, res) => {
  res.send("Welcome to signin page");
});

router.post("/", auth, (req, res, next) => {
  try {
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
});

module.exports = router;
