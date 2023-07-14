const mongoose = require("mongoose");
const db = require("./index.js");

const itemSchema = new db.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  Adress: {
    type: String,
    required: true
  },
  CIN: {
    type: String,
    required: true
  },
  skills: String
});


const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
