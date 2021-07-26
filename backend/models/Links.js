const { Schema, model } = require("mongoose");

const Links = new Schema({
  originalUrl: { type: String, required: true },
  modifiedUrl: { type: String, required: true },
  link: { type: String, required: true },
  views: { type: Number, default: 0 },
});

module.exports = model("Links", Links);
