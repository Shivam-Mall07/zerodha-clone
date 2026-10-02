const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mode: {
    type: String, // e.g., 'BUY' or 'SELL'
    required: true,
  },
});

module.exports = { OrdersSchema };