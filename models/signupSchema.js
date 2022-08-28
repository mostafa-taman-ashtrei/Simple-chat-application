const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const signupSchema = new Schema({
  name: {
    type: String,
    required: [true, "Enter your name"],
  },
  email: {
    type: String,
    required: [true, "Enter your email"],
  },
  password: {
    type: String,
    required: [true, "Enter your password"],
  },
});

module.exports = mongoose.model("signupModel", signupSchema);
