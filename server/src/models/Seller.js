// in this file, set up your user module
// 1.import the mongoose library
const { Schema, model } = require("mongoose");

// 2.start defining book schema
const SellerBookSchema = new Schema({
  title: String,
  price: Number,
  type: String,
  image: String,
});

// 3.create  the book model
const SellerBook = model("seller", SellerBookSchema);

// 4.export the module
module.exports = SellerBook;
