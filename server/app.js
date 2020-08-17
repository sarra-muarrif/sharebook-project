const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./src/router/router");
const cors = require("cors");

app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
app.set("port", process.env.PORT || 5000);

module.exports = app;
