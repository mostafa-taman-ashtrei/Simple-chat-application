require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const signinRoute = require("./controllers/signin.js");
const signupRoute = require("./controllers/signup.js");

const app = express();
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

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is runnig on port ${port} ...`));