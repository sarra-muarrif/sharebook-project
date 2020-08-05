// import the required libraries
//   download the required modules
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const setupRoutes = require("./src/router/router");
const cors = require("cors");
const URL = "mongodb://localhost:27017/seller-db";

const start = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect to DB, Lets create app");
    const app = express();
    app.use(cors());
    app.use(bodyparser.urlencoded({ extended: false }));
    app.use(bodyparser.json());
    console.log("App is create, Lets create router");
    setupRoutes(app);
    console.log("App Router is added, Lets listen on 5000");
    app.listen(5000);
  } catch (error) {
    console.error(error);
  }
};
start();
