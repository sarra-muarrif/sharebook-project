const app = require("express")();
const bodyParser = require("body-parser");
const router = require("./src/router/router");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
app.set("port", process.env.PORT || 5000);

module.exports = app;