const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const relative = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  mobile: { type: Number, min: 10, max: 10, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("relative", userSchema);
