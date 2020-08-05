// in this file, set up your application routes
// 1. import the seller module
const SellerBook = require("../models/Seller");
const setupRoutes = (app) => {
  //git seller books
  app.get("/seller", async (req, res) => {
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
    app.post("/seller", async (req, res) => {
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
  app.delete("/seller/:id", async (req, res) => {
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

  app.get("*", (req, res) => res.send("URL NOT FOUND"));
};
module.exports = setupRoutes;
