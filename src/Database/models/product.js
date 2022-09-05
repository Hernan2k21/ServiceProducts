'use strict';
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  description: String,
  details: mongoose.Schema.Types.Mixed,
  price: Number,
  listed: Boolean,
  stock: Number,
});

module.exports = mongoose.model("Product", schema);