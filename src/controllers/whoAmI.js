const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    if (req.isAuthenticated()) {
        return res.status(200).json({ isAuthenticated: req.isAuthenticated(), user: req.user });
    }
    return res.json({ isAuthenticated: req.isAuthenticated(), user: null });
});

module.exports = router;
