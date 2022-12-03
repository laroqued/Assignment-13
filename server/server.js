const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product");
const app = express();

const ProductModel = require("./models/Product");

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(
  "mongodb+srv://donnyves:vJJCQb2FN8rKPLt3@cluster0.xa57vqh.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    console.log(`Database is connected`);
  }
);

app.get("/", async (req, res) => {
    const id = 0
    const productId = 0

  const product = new ProductModel({
    id: id,
    product: {
      productid: productId,
      category: "Food",
      price: 45.12,
      name: "Apples",
      instock: false,
    },
    id: 1,
    product: {
      productid: 1,
      category: "Food",
      price: 45.12,
      name: "Apples",
      instock: false,
    },
  });

  try {
    await product.save()
    res.send("Refresh to Insert Data")
  } catch (error) {
    console.log(error);
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`The Server is running on server ${port}`);
});
