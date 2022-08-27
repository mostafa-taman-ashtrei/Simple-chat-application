require('dotenv').config();
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var signinRoute = require("./controllers/signin.js");
var signupRoute = require("./controllers/signup.js");

var app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.DB_CONNECTION_STRING);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

// app.use("/signin", signinRoute);
app.use("/signup", signupRoute);

app.listen(3000, function () {
    console.log("Working on 3000!!!");
});