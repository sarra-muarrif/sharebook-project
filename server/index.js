
// import the required libraries
//   download the required modules
const app = require("./app");
const mongoose = require("mongoose");
const port = app.get("port");
const URL = "mongodb://localhost:27017/seller-db";
//const URI = "mongodb://localhost:27017/shareBook-db";

const start = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log("shareBook-db is connected...");
    app.listen(port, () =>
      console.log(`the server is running on port ${port}`)
    );
  } catch (error) {
    console.error(error);
  }
};
start();
