const router = require("express").Router();
const user = require("../models/users");

//signIn existing user
router.get("/users", async (req, res) => {
  try {
    const users = await user.find({});
    res.send(users);
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
