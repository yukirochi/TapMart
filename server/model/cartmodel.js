const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true, 
  },
  items: [
    {
      productId: { type: Number, required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
})

module.exports = mongoose.model("Cart",cartSchema,"cart");