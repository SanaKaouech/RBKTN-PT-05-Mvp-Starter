const mongoose = require("mongoose");
const db = require("./index.js");

const itemSchema = new mongoose.Schema({
  id : {
    type : Number,
    required : true,
    unique : true
  },
  name : String,
  lastName : String,
  skills : String,
  CIN : Number,
});


const Item = mongoose.model("Item", itemSchema);


//let save = (items) => {
  //Item.insertMany(items)
//}

//let findReposByName = (name)=> {
  //return Item.find({name})
//}

//let getAll = () =>{
  // return Item.find().limit(25)
//}

module.exports = Item;
//module.exports.save = save;
//module.exports.findReposByName = findReposByName;
//module.exports.getAll = getAll;