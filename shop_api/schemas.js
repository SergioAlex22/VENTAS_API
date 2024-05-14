const mongoose = require('mongoose');
const shopSchema = new mongoose.Schema({
    codProduct: {
        type: String,
        required: true
      },
    productName: {
      type: String,
      required: true
    },
    price: {
        type: String,
        required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = {shopSchema}