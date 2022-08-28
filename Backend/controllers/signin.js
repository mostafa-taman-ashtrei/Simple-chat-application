const express = require("express");
const router = express.Router();
const userModel = require("../models/signupSchema");
var auth = require("../middleware/auth")

router.get('/', (req, res) => {
    res.send("Welcome to signin page")
})

router.post('/', auth, (req, res) => {    
    let providedEmail = req.body.email;
    let providedPassword = req.body.password;

    console.log(req.cookies.token);

    userModel.findOne({email:providedEmail},function(err,user){
        if(err){
            res.status(400).json({message:"Wrong Email"})
        }else{
            if(user.password === providedPassword){
                res.cookie('token', user._id)
                res.status(200).json({message:"Successfully"})
            }else{
                res.status(400).json({message:"Wrong Password"})
            }
        }
    });
})


module.exports = router;