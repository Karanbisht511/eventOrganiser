const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectID } = require("mongodb");

const relative = new Schema({
  name: { type: String },
  address: { type: String },
  pincode: { type: Number, minLength: 6, maxLength: 6, required: true },
  mobile: { type: Number, minLength: 10, maxLength: 10, required: true },
});

const event = new Schema({
  event_name: { type: String },
  event_date: { type: Date },
});

const marriageDetails = new Schema({
  user_id: { type: String, required: true },
  eventDetails: [event],
  relatives: [relative],
  invitationTemplate: { type: String },
  decorator: { type: String },
  cosmetologist: { type: String },
  weddingResort: { type: String },
  photographer: { type: String },
  videographer: { type: String },
});

module.exports = mongoose.model("marriageDetails", marriageDetails);
