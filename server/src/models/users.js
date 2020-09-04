//import the mongoose library
const { Schema, model } = require("mongoose");

const { hashPassword } = require("../../helpers");

const shortId = require("shortid");
//defining your client schema
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
});

// تخزين كلمة السر بعد عمل الهاش

userSchema.pre("save", function (next) {
  if (!this.salt) {
    this.salt = shortId.generate();
  }
  if (this.password) {
    this.password = hashPassword(this.password, this.salt);
  }
  next();
});

//create  the user model and export
const userModel = model("user", userSchema);
module.exports = userModel;
