const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  mobile: { type: Number, minLength: 10, maxLength: 10, required: true },
  pincode: { type: Number, minLength: 6, maxLength: 6, required: true },
  email: { required: true, type: String, unique: true },
  password: { required: true, type: String, minlength: 8, unique: true },
});

module.exports = mongoose.model("User", userSchema);
