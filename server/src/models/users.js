//import the mongoose library
const { Schema, model } = require("mongoose");

//defining your client schema
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
});

//create  the user model and export
module.exports = model("USER", userSchema);
