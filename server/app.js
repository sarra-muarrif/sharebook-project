const express = require("express");
const { join } = require("path");
const app = express();
const bodyParser = require("body-parser");
const router = require("./src/router/router");
const cors = require("cors");

app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1", router);
app.use(express.static(join(__dirname, "..", "build")));
app.get("*", (_req, res) => {
  res.sendFile(join(__dirname, "..", "build", "index.html"));
});
app.set("port", process.env.PORT || 5000);

module.exports = app;
