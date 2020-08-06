// in this file, set up your application routes
// 1. import the seller module
const router = require("express").Router();
const user = require("../models/users");
const SellerBook = require("../models/Seller");

  //git seller books
  router.get("/seller", async (req, res) => {
    try {
      const sellerBooks = await SellerBook.find({});
      //res.json(sellerBooks);
      res.send(sellerBooks);
    } catch (error) {
      res.status(500).json({
        Error: console.log(error),
      });
    }
    //add new seller books
    router.post("/seller", async (req, res) => {
      const { title, price, type } = req.body;
      const newSellerBook = new SellerBook({
        title,
        price,
        type,
      });
      try {
        await newSellerBook.save();
        res.json(newSellerBook);
        console.log(req.body);
      } catch (error) {
        res.status(500).json({
          Error: error,
        });
      }
    });
  });
  //delete seller books
  router.delete("/seller/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deleteSellerBook = await SellerBook.deleteOne({
        _id: id,
      });
      res.json(deleteSellerBook);
    } catch (error) {
      res.status(500).json({
        Error: error,
      });
    }
  });

 // app.get("*", (req, res) => res.send("URL NOT FOUND"));

//get all users
router.get("/users", async (req, res) => {
  try {
    const users = await user.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({
      Error: error,
    });
  }
});
//signIn existing user
router.get("/users/:Email", async (req, res) => {
  const { Email } = req.params;
  try {
    const users = await user.find({ email: Email });
    res.json(users);
  } catch (error) {
    res.status(500).json({
      Error: error,
    });
  }
});
//signUp new user
router.post("/users", async (req, res) => {
  const newUser = new user({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({
      Error: error,
    });
  }
});

module.exports = router;
