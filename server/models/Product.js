const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
  id: Number,
  product: {
    productid: Number,
    category: String,
    price: Number,
    name: String,
    instock: Boolean,
  },
});

const Product = mongoose.model("ProductData", ProductSchema)
module.exports = Product
