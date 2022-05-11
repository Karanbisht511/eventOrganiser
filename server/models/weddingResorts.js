const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weddingResort = new Schema({
  name: { type: String, required: true },
  mobile: { type: Number, min: 10, max: 10, required: true },
  pincode: { type: Number, min: 6, max: 6, required: true },
  address: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("weddingResort", userSchema);
