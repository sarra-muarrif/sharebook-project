const app = require("./app");
const mongoose = require("mongoose");
const port = app.get("port");
const URI = "mongodb://localhost:27017/shareBook-db";

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log("shareBook-db is connected...");
    app.listen(port, () =>
      console.log(`the server is running on port ${port}`)
    );
  })
  .catch((err) => console.log(err));
